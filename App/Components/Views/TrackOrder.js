'use strict';

import React, {Component} from "react";
import {Text, View, Image, ListView, TouchableOpacity} from "react-native";
import {Actions} from "react-native-router-flux";
import Tracking from "./Tracking";
import Summary from "./Summary";
import track from "./../Styles/trackorder";
import ScrollableTabView, {ScrollableTabBar} from "react-native-scrollable-tab-view";
import Toolbar from "./../Controls/Toolbar";

export default class TrackOrder extends Component {

    render() {
        return (
            <View style={track.body}>
                <Toolbar name="Track order"/>

                <ScrollableTabView
                    initialPage={0}
                    tabBarBackgroundColor={"white"}
                    tabBarUnderlineStyle={ {height: 2, backgroundColor: "#1CAADE"}  }
                    
                    tabBarActiveTextColor={"#000"}
                    tabBarInactiveTextColor={"#B8B8B8"}
                    contentProps={{backgroundColor: '#F2F2F2', marginTop: 0}}
                    tabBarTextStyle={{height: 30, fontWeight: 'normal', fontSize: 12}}
                    renderTabBar={() => <ScrollableTabBar
                          underlineHeight={2}
                          style={{borderBottomWidth: 8, borderBottomColor: 'transparent', height: 38}}
                          tabStyle={{paddingBottom: 0, borderBottomWidth: 0, paddingTop: 0, paddingLeft: 6, paddingRight: 6}}
                         />}>

                    <Tracking tabLabel="STATUS"/>
                    <Summary tabLabel="SUMMARY"/>
                </ScrollableTabView>
            </View>
        );
    }
}
