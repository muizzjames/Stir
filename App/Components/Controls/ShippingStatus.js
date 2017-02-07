'use strict';

import React, {Component} from "react";
import {ListView, Text, View, Image, TouchableOpacity, ActionSheetIOS, ScrollView, StyleSheet} from "react-native";
import shipping from "./../Styles/shipping";
import {Actions} from "react-native-router-flux";

export default class ShippingStatus extends Component {
    render() {
        return (
            <View>
                <View style={shipping.status}>
                    <View style={[shipping.statusIcon,shipping.statusActive]}/>
                    <View style={[shipping.statusIcon, shipping.statusFinish]}/>
                    <View style={[shipping.statusIcon]}/>
                </View>
                <View style={[shipping.status, shipping.statusFull]} />
            </View>
        );
    }
}