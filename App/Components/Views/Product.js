'use strict';

import React, {Component} from "react";
import {
    ListView,
    TextInput,
    RefreshControl,
    Text,
    Animated,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    StyleSheet
} from "react-native";
import {Actions} from "react-native-router-flux";
import css from "./../Styles/style";
import product from "./../Styles/product";
import Toolbar from "./../Controls/Toolbar";
import AppEventEmitter from "../../Services/AppEventEmitter";

var offset = 0;
var alpha = 100;
var beta = 50;

export default class Product extends Component {
    open() {
        AppEventEmitter.emit('hamburger.click');
    }

    constructor(props) {
        super(props);
        this.state = {
            _animatedMenu: new Animated.Value(0),
            isRefreshing: false
        }
    }

    hideMenu() {
        Animated.spring(this.state._animatedMenu, {
            toValue: -120
        }).start();
    }

    showMenu() {
        Animated.spring(this.state._animatedMenu, {
            toValue: 0
        }).start();
    }

    componentDidMount() {
        this._onRefresh()
    }

    onScroll(event) {
        var currentOffset = event.nativeEvent.contentOffset.y;

        if (currentOffset < alpha) {
            return;
        }

        if (Math.abs(offset - currentOffset) <= beta)
            return;

        if (this.state.isRefreshing) {
            return;
        }

        if (currentOffset > offset) {
            this.hideMenu();
            console.log('down');
        } else if (currentOffset < offset) {
            this.showMenu();
            console.log('up');
        }

        offset = currentOffset;
    }

    _onRefresh = () => {
        this.hideMenu();

        this.setState({
            isRefreshing: true
        });

        setTimeout(() => {
            this.showMenu();

            this.setState({
                loaded: this.state.loaded + 10,
                isRefreshing: false,
            });
        }, 1000);
    }

    render() {
        return (
            <View style={product.color}>
                <Animated.View style={[css.toolbarView, {transform: [{translateY: this.state._animatedMenu}]}]}>
                    <Toolbar name="Product" heartButton={true} layoutButton={true}/>
                    <TextInput underlineColorAndroid='rgba(0,0,0,0)' style={css.inputSearch} placeholder={'Search'}/>
                </Animated.View>

                <ScrollView
                    onScroll={this.onScroll.bind(this)} scrollEventThrottle={30}
                    refreshControl={<RefreshControl
                                    refreshing={this.state.isRefreshing}
                                    onRefresh={this._onRefresh}
                                    tintColor="#333"
                                    title="Loading..."
                                    titleColor="#333"
                                    colors={['#333', '#999', '#ddd']}
                                    progressBackgroundColor="#ffff00"
                                  />
                                }>
                    <TouchableOpacity style={[product.cards, {marginTop: 110} ]}>
                        <Image source={require('../../images/woman-1.jpg')} style={product.productItem}></Image>
                        <TouchableOpacity style={product.star}>
                            <Image source={require('../../images/icon-heart.png')} style={css.imageIcon}></Image>
                        </TouchableOpacity>
                        <Text style={product.productName}>Frame Cardigan</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={[product.discountPrice, {paddingBottom: 12}]}>$69.95</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={product.cards}>
                        <Image source={require('../../images/woman2.jpg')} style={product.productItem}></Image>
                        <TouchableOpacity style={product.star}>
                            <Image source={require('../../images/icon-heart.png')} style={css.imageIcon}></Image>
                        </TouchableOpacity>
                        <Text style={product.productName}>Bodycon Dress</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={[product.discountPrice, {paddingBottom: 12}]}>$49.94</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={product.cards}>
                        <Image source={require('../../images/woman4.jpg')} style={product.productItem}></Image>
                        <TouchableOpacity style={product.star}>
                            <Image source={require('../../images/icon-heart.png')} style={css.imageIcon}></Image>
                        </TouchableOpacity>
                        <Text style={product.productName}>Bodycon Dress</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={[product.discountPrice, {paddingBottom: 12}]}>$49.94</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={product.cards}>
                        <Image source={require('../../images/woman6.jpg')} style={product.productItem}></Image>
                        <TouchableOpacity style={product.star}>
                            <Image source={require('../../images/icon-heart.png')} style={css.imageIcon}></Image>
                        </TouchableOpacity>
                        <Text style={product.productName}>Bodycon Dress</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={[product.discountPrice, {paddingBottom: 12}]}>$49.94</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={product.cards}>
                        <Image source={require('../../images/woman7.jpg')} style={product.productItem}></Image>
                        <TouchableOpacity style={product.star}>
                            <Image source={require('../../images/icon-heart.png')} style={css.imageIcon}></Image>
                        </TouchableOpacity>
                        <Text style={product.productName}>Bodycon Dress</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={[product.discountPrice, {paddingBottom: 12}]}>$49.94</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={product.cards}>
                        <Image source={require('../../images/woman3.jpg')} style={product.productItem}></Image>
                        <TouchableOpacity style={product.star}>
                            <Image source={require('../../images/icon-heart.png')} style={css.imageIcon}></Image>
                        </TouchableOpacity>
                        <Text style={product.productName}>Bodycon Dress</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={[product.discountPrice, {paddingBottom: 12}]}>$49.94</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={product.cards}>
                        <Image source={require('../../images/woman8.jpg')} style={product.productItem}></Image>
                        <TouchableOpacity style={product.star}>
                            <Image source={require('../../images/icon-heart.png')} style={css.imageIcon}></Image>
                        </TouchableOpacity>
                        <Text style={product.productName}>Bodycon Dress</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={[product.discountPrice, {paddingBottom: 12}]}>$49.94</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}
