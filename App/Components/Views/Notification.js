'use strict';

import React, {Component} from "react";
import {ListView, Text, View, Image, TouchableOpacity, ScrollView, StyleSheet} from "react-native";
import {Actions} from "react-native-router-flux";
import notification from "./../Styles/notification";
import Toolbar from "./../Controls/Toolbar";
import Icon from "react-native-vector-icons/Ionicons";

export default class Notification extends Component {
    render() {
        const unreadCard = (
            <TouchableOpacity style={notification.card}>
                <View style={{flexDirection:'row'}}>
                    <Icon name={'ios-notifications'} style={notification.unreadBell}/>

                    <View style={{marginLeft:10}}>
                        <Text style={notification.unreadHeader}>Simply dummy text of the printing.</Text>

                        <View style={notification.blockText}>
                            <Text style={notification.unreadText}>Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been industry's standard....</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );

        const readCard = (
            <TouchableOpacity style={notification.card}>
                <View style={{flexDirection:'row'}}>
                    <Icon name={'ios-notifications-outline'} style={notification.readBell}/>

                    <View style={{marginLeft:10}}>
                        <Text style={notification.readHeader}>Lorem Ipsum has been industry's standard...</Text>

                        <View style={notification.blockText}>
                            <Text style={notification.readText}>Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been industry's standard....</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );

        return (
            <View style={{flex: 1, backgroundColor: '#eee'}}>
                <Toolbar name="Notification"/>
                <ScrollView>
                    {unreadCard}
                    {unreadCard}
                    {unreadCard}
                    {unreadCard}
                    {readCard}
                    {readCard}
                    {readCard}
                    {readCard}
                    {readCard}
                    {readCard}
                    {readCard}
                    {readCard}
                    {readCard}
                </ScrollView>
            </View>
        );
    }
}
