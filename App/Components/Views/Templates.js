'use strict';

import React, {Component} from "react";
import {ListView, TextInput, Text, View, Image, Platform, TouchableOpacity, ScrollView, StyleSheet} from "react-native";
import css from "./../Styles/style";
import {Actions} from "react-native-router-flux";
import Toolbar from "./../Controls/Toolbar";

export default class Template extends Component {
    render() {
        return (
            <View style={css.layout}>
                <Toolbar name="Templates"/>

                <View style={css.templateLayout}>
                    <TouchableOpacity
                        style={css.templateRow}
                        onPress={Actions.intro}>
                        <Image style={css.templateImage} source={require('../../images/icon-set/intro.png')}></Image>
                        <Text style={css.templateMenu}>Intro</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={css.templateRow}
                        onPress={Actions.login}>

                        <Image style={css.templateImage} source={require('../../images/icon-set/signup.png')}></Image>
                        <Text style={css.templateMenu}>Sign In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={css.templateRow}
                        onPress={Actions.home}>

                        <Image style={css.templateImage} source={require('../../images/icon-set/category.png')}></Image>
                        <Text style={css.templateMenu}>Categories</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={css.templateRow}
                        onPress={Actions.product}>

                        <Image style={css.templateImage} source={require('../../images/icon-set/products.png')}></Image>
                        <Text style={css.templateMenu}>Product</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={css.templateRow}
                        onPress={Actions.cart}>
                        <Image style={css.templateImage} source={require('../../images/icon-set/cart.png')}></Image>
                        <Text style={css.templateMenu}>Cart</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={css.templateRow}
                        onPress={Actions.myorder}>
                        <Image style={css.templateImage} source={require('../../images/icon-set/myorder.png')}></Image>
                        <Text style={css.templateMenu}>My Order</Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={css.templateRow}
                        onPress={Actions.trackorder}>
                        <Image style={css.templateImage} source={require('../../images/icon-set/shipping.png')}></Image>
                        <Text style={css.templateMenu}>Shipping</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={css.templateRow}
                        onPress={Actions.profile}>
                        <Image style={css.templateImage} source={require('../../images/icon-set/profile.png')}></Image>
                        <Text style={css.templateMenu}>Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
