const React = require('react');
const ReactNative = require('react-native');
const {
    View,
    Animated,
    StyleSheet,
    ScrollView,
    Text,
    Platform,
    TouchableOpacity,
    Dimensions,
} = ReactNative;

import shipping from "./../Styles/shipping";
import * as Animatable from "react-native-animatable";

const WINDOW_WIDTH = Dimensions.get('window').width;

const ProgressBar = React.createClass({
    propTypes: {
        goToPage: React.PropTypes.func,
        activeTab: React.PropTypes.number,
        tabs: React.PropTypes.array,
        backgroundColor: React.PropTypes.string,
        style: View.propTypes.style,
        tabStyle: View.propTypes.style,
        tabsContainerStyle: View.propTypes.style,
    },

    getDefaultProps() {
        return {
            backgroundColor: null,
            underlineHeight: 4,
            style: {},
            tabStyle: {},
            tabsContainerStyle: {}
        };
    },

    getInitialState() {
        this._tabsData = [];
        return {
            _widthColorBar: new Animated.Value(0),
            _containerWidth: null,
        };
    },

    componentDidMount() {
        this.props.scrollValue.addListener(this.updateView);
    },

    updateView(offset) {
        const position = Math.floor(offset.value);
        const pageOffset = offset.value % 1;
        const tabCount = this.props.tabs.length;

        if (tabCount === 0 || offset.value < 0 || offset.value > tabCount - 1) {
            return;
        }

        if (this.necessarilyMeasurementsCompleted(position)) {
            this.updateTabPanel(position, pageOffset);

            // update color bar
            this.updateTabUnderline(position, pageOffset, tabCount);
        }
    },
    updateTabUnderline(position, pageOffset, tabCount) {
        const lineLeft = this._tabsData[position].left;
        if (position < tabCount - 1) {
            const nextTabLeft = this._tabsData[position + 1].left;
            const newLineLeft = (pageOffset * nextTabLeft + (1 - pageOffset) * lineLeft);
            this.state._widthColorBar.setValue(newLineLeft);
        } else {
            this.state._widthColorBar.setValue(newLineLeft);
        }
    },

    necessarilyMeasurementsCompleted(position) {
        return this._tabsData[position] &&
            this._tabsData[position + 1] &&
            this._tabContainerMeasurements &&
            this._containerMeasurements;
    },

    updateTabPanel(position, pageOffset) {
        const containerWidth = this._containerMeasurements.width;
        const tabWidth = this._tabsData[position].width;
        const nextTabMeasurements = this._tabsData[position + 1];
        const nextTabWidth = nextTabMeasurements && nextTabMeasurements.width || 0;
        const tabOffset = this._tabsData[position].left;
        const absolutePageOffset = pageOffset * tabWidth;
        let newScrollX = tabOffset + absolutePageOffset;

        // center tab and smooth tab change (for when tabWidth changes a lot between two tabs)
        newScrollX -= (containerWidth - (1 - pageOffset) * tabWidth - pageOffset * nextTabWidth ) / 2;
        newScrollX = newScrollX >= 0 ? newScrollX : 0;

        if (Platform.OS === 'android') {
            this._scrollView.scrollTo({x: newScrollX, y: 0, animated: false,});
        } else {
            const rightBoundScroll = this._tabContainerMeasurements.width - (this._containerMeasurements.width);
            newScrollX = newScrollX > rightBoundScroll ? rightBoundScroll : newScrollX;
            this._scrollView.scrollTo({x: newScrollX, y: 0, animated: false,});
        }

    },

    renderAnimateOption()   {
        if (this.props.activeTab == 1)
            return shipping.statusHalf;
        else if (this.props.activeTab == 2)
            return shipping.statusFull;
    },

    renderTabOption(name, page) {
        const isTabActive = this.props.activeTab === page;

        var tabStatus = '';
        var tabNameActive = '';
        var tabIconView =  <View style={[shipping.statusIcon]} />;

        if (page < this.props.activeTab) {
            tabStatus = shipping.statusFinish;
            tabNameActive = shipping.tabNameFinish;
            tabIconView = <View style={[shipping.statusIcon, tabStatus]} />;
        }
        else if (isTabActive) {
            tabStatus = shipping.statusActive;
            tabNameActive = shipping.tabNameActive;

            // animate the current tabar
            tabIconView = <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite">
                <View style={[shipping.statusIcon, tabStatus]}/>
            </Animatable.View>;
        }

        return <TouchableOpacity
            key={`${name}_${page}`}
            accessible={true}
            accessibilityLabel={name}
            onLayout={this.measureTab.bind(this, page)}
            onPress={() => this.props.goToPage(page)}>{tabIconView}
            <Text style={[shipping.tabName, tabNameActive]}>
                {name}
            </Text>
        </TouchableOpacity>;
    },

    measureTab(page, event) {
        const {x, width, height,} = event.nativeEvent.layout;
        this._tabsData[page] = {left: x, right: x + width, width, height, width: x}
        this.updateView({value: this.props.scrollValue._value,});
    },

    render() {
        const statusBar = {
            "borderTopWidth": 2,
            "borderColor": "#eee",
            "width": WINDOW_WIDTH - 80,
            "position": "relative",
            "alignSelf": "center",
            "marginTop": 20,
            "marginBottom": 30,
            "flexDirection": "row",
            "justifyContent": "space-between"
        };

        const dynamicStatusColor = {
            "width": this.state._widthColorBar,
            "borderTopWidth": 2,
            "borderColor": "#1CAADE",
            "position": "absolute",
            "top": 28,
            "left": 10
        };

        return <View
            style={[styles.container, {backgroundColor: this.props.backgroundColor, }, this.props.style]}
            onLayout={this.onContainerLayout}>
            <ScrollView
                ref={(scrollView) => { this._scrollView = scrollView; }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                directionalLockEnabled={true}
                bounces={false}>
                <View
                    style={[styles.tabs, {width: this.state._containerWidth, }, this.props.tabsContainerStyle]}
                    ref={'tabContainer'}
                    onLayout={this.onTabContainerLayout}>

                    <View style={shipping.statusContainer}>
                        <View style={shipping.status}>
                            {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
                        </View>
                        <Animated.View style={[statusBar, dynamicStatusColor]}/>
                    </View>
                </View>
            </ScrollView>
        </View>;
    },

    onTabContainerLayout(e) {
        this._tabContainerMeasurements = e.nativeEvent.layout;
        let width = this._tabContainerMeasurements.width;
        if (width < WINDOW_WIDTH) {
            width = WINDOW_WIDTH;
        }
        this.setState({_containerWidth: width,});
        this.updateView({value: this.props.scrollValue._value,});
    },

    onContainerLayout(e) {
        this._containerMeasurements = e.nativeEvent.layout;
        this.updateView({value: this.props.scrollValue._value,});
    },
});

module.exports = ProgressBar;

const styles = StyleSheet.create({
    tab: {
        height: 49,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    container: {
        height: 70,
        borderWidth: 0,
        marginTop: 10
    },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
});
