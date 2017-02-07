'use strict';

import React, {Component} from "react";
import {
    ListView,
    TextInput,
    Text,
    View,
    Image,
    Platform,
    TouchableOpacity,
    ScrollView,
    StyleSheet
} from "react-native";
import shipping from "./../Styles/shipping";
import Shipping from "./Shipping";
import Payment from "./Payment";
import Confirm from "./Confirm";

import {Actions} from "react-native-router-flux";
import Toolbar from "./../Controls/Toolbar";
import ScrollableTabView, {ScrollableTabBar} from "react-native-scrollable-tab-view";

import ButtonRoundBlue from "./../Controls/ButtonRoundBlue";
import ButtonRound from "./../Controls/ButtonRound";
import ProgressBar from "./../Custom/ProgressBar";
import css from "./../Styles/style";

export default class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {labelCheckout: 'Next Step', buttonColor: '#1CAADE'}
    }

    tabChange = function(tab)    {
        if (tab.i == 2) {
            this.setState({labelCheckout: 'Confirm Order', buttonColor: "#000" });
        } else {
            this.setState({labelCheckout: 'Next Step', buttonColor: "#1CAADE" });
        }
    }

    render() {
        const tabBar = function() {
            if (Platform.OS === 'ios') {
                return <ProgressBar
                    underlineHeight={2}
                    tabsContainerStyle={{height: 50}}
                    tabStyle={[{paddingBottom: 0, borderBottomWidth: 0, paddingTop: 0}, {paddingLeft: 10, paddingRight: 10} ]}
                />
            }
            else {
                return <ScrollableTabBar
                    underlineHeight={3}
                    style={{borderBottomColor: '#eee'}}
                    tabsContainerStyle={{paddingLeft: 30, paddingRight: 30}}
                    tabStyle={{paddingBottom: 0, borderBottomWidth: 0, paddingTop: 0, paddingLeft: 10, paddingRight: 10}}
                />
            }
        }
        return (
            <View style={shipping.layout}>
                <Toolbar name="Check out" isChild={true}/>

                <ScrollableTabView
                    onChangeTab={(tab) => this.tabChange(tab)}
                    initialPage={0}
                    tabBarUnderlineStyle={ {height: 2, backgroundColor: "#393838"}  }
                    tabBarActiveTextColor={"#393838"}
                    tabBarInactiveTextColor={"#B8B8B8"}
                    tabBarTextStyle={{height: 20, fontWeight: 'normal', fontSize: 13}}
                    renderTabBar={() => tabBar()}>
                    <Shipping tabLabel="Shipping"/>
                    <Payment tabLabel="Payment"/>
                    <Confirm tabLabel="Confirm"/>
                </ScrollableTabView>

                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity  style={[{marginBottom: 16}]}>
                        <ButtonRound style={css.halfWidth} text="Cancel" onPress={()=>Actions.home({data:this.state.value })}/>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <ButtonRoundBlue onPress={Actions.complete} style={css.halfWidth} text={this.state.labelCheckout} color={this.state.buttonColor}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
