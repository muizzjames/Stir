'use strict';

import React, {Component} from "react";
import {ListView, Text, View, Image, TabBarIOS, TouchableOpacity, ScrollView, StyleSheet} from "react-native";
import {Actions} from "react-native-router-flux";
import Notification from "./Notification";
import MyOrder from "./MyOrder";
import TrackOrder from "./TrackOrder";
import WishList from "./WishList";
import ScrollableTabView, {ScrollableTabBar} from "react-native-scrollable-tab-view";
import FacebookTabBar from "./../Custom/FacebookTabBar";

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedTab: 'tabOne'}
    }

    render() {
        return (
            <ScrollableTabView
                tabBarPosition={"bottom"}
                locked={true}
                renderTabBar={() => <FacebookTabBar />}
            >
                <MyOrder tabLabel="md-cart"/>
                <WishList tabLabel="md-heart"/>
                <Notification tabLabel="md-notifications"/>
            </ScrollableTabView>
        );
    }
}

