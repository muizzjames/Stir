'use strict';

import React, {Component} from "react";
import {ListView, Text, View, Image, TabBarIOS, TouchableOpacity, ScrollView, StyleSheet} from "react-native";
import {Actions} from "react-native-router-flux";
import {ScrollableTabBar} from "react-native-scrollable-tab-view";
import Notification from "./Notification";
import MyOrder from "./MyOrder";
import TrackOrder from "./TrackOrder";
import WishList from "./WishList";


var iconOrder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAqBJREFUeAHtmU1OxDAMRoFjIbYsuEVX3IPrgQQXgBULdrBmBQ5SpCoxY7vqNE3zKkWdNs6Pn5u04+/iggMCEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAASOSeBa3HqT8mOUR6m/lcJxZgIf0r8VjFz/eua5DNf9peJxgh05tD4i7bGdEbia/ebnDgh4ApJWwLxY057E4EtK3tY46yyehdGdFPMoAZYNTtXfiHFZz/X/TN5LuJ4VUrY5df19qpK6ikD1/l07IE8y5IOUz2pobpQEXuTGfXmzipAYpC0mcmh9pHvRfiJjHtZ27RWSQRGMTCJ41gKS/qV7j4itt0/sCgIpHZLSItbXEamTAhyXEIAABCAAAQhAAAIQgAAEjkIATX1nkURTbxgQLVMbTQxqfTR0qe+hteRi3x51PntPQNIKmBfL5UkM0NTt5CyaujwoVgZ763o0dWt5b1xfvX89W1Zkjmjqflpo6n5W7SzXXiHZk+inc243/FkLSEQnj9gOD3spADT1peRoBwEIQAACEIAABCAAAQhA4CAE0NR3Fkg09YYBqfLxMpdoYlDro6FLfQ+tJRf79qjz2XsCMtfTPathEiZo6rZcjKYuD8rWmrk1Hpr6zna0asfxbFkRH9DU/bTQ1P2s2lmuvUKyJ9FP59xu+LMWkIhOHrEdHvZSAGjqS8nRDgIQgAAEIAABCEAAAhCAwEEIoKnvLJBo6g0DUuXjZS7RxKDWR0OX+h5aSy727VHns/cEJK2AebFcnsQATd2Wi9HU5UGxNO6t69HUreW9cX31/vVsWZE5oqn7aaGp+1m1s1x7hWRPop/Oud3wZy0gEZ08Yjs87KUA0NSXkqMdBCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQOCPwC/17yBaZhjGsgAAAABJRU5ErkJggg==";
var iconTrack = "data:image/png;base64,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";
var iconNotify = "data:image/png;base64,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";
var heartIcon = "data:image/png;base64,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";

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedTab: 'tabOne'}
    }

    render() {
        return (
            <TabBarIOS
                tintColor="#1CAADE"
                translucent={true}>
                <TabBarIOS.Item
                    title="My order"
                    badge={3}
                    icon={{uri: iconOrder, scale: 4}}
                    selected={this.state.selectedTab === 'tabOne'}
                    onPress={() => {
                                this.setState({
                                  selectedTab: 'tabOne'
                                });
                              }}>

                    <MyOrder />
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    title="Wishlist"
                    icon={{uri: heartIcon, scale: 4}}
                    selected={this.state.selectedTab === 'tabThree'}
                    onPress={() => {
                                this.setState({
                                  selectedTab: 'tabThree',
                                  notifCount: this.state.notifCount + 1
                                });
                              }}>
                    <WishList />
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    title="Notification"
                    icon={{uri: iconNotify, scale: 4}}
                    selected={this.state.selectedTab === 'tabFour'}
                    onPress={() => {
                                this.setState({
                                  selectedTab: 'tabFour',
                                  notifCount: this.state.notifCount + 1
                                });
                              }}>
                    <Notification />
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

