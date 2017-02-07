'use strict';

import React, {Component} from "react";
import {ListView, Text, View, Image, TouchableOpacity, ScrollView, StyleSheet} from "react-native";
import order from "./../Styles/myorder";
import {Actions} from "react-native-router-flux";
import Toolbar from "./../Controls/Toolbar";
import button from "./../Styles/button";

export default class MyOrder extends Component {
    render() {
        return (
            <View style={order.body}>
                <Toolbar name="My Order"/>

                <ScrollView>
                    <View style={order.card}>
                        <View style={order.row}>
                            <Image style={order.image} source={require('../../images/man-s2.png')}></Image>

                            <View style={order.content}>
                                <Text style={order.name}>In said to of poor full be post face snug</Text>
                                <Text style={order.status}>Order Id: 1230922</Text>
                                <Text style={order.status}>Status: Delivered Successfully!</Text>
                                <Text style={order.status}>Delivered on: 4 Jul 2016</Text>

                                <View style={order.buttons}>
                                    <TouchableOpacity>
                                        <Text style={button.link}>DETAIL</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={Actions.trackorder}>
                                        <Text style={button.small}>TRACK</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={order.line}></View>
                        <View style={order.lineFinishHalf}></View>

                        <View style={order.statusIcons}>
                            <View style={order.icon}>
                                <View style={[order.circel, order.finish]}></View>
                                <Text style={order.iconLabel}>PLACED</Text>
                            </View>
                            <View style={order.icon}>
                                <View style={[order.circel, order.going]}></View>
                                <Text style={order.iconLabel}>DISPATCHED</Text>
                            </View>
                            <View style={order.icon}>
                                <View style={[order.circel]}></View>
                                <Text style={order.iconLabel}>DELIVERED</Text>
                            </View>
                        </View>
                    </View>

                    <View style={order.card}>
                        <View style={order.row}>
                            <Image style={order.image} source={require('../../images/man-s1.png')}></Image>

                            <View style={order.content}>
                                <Text style={order.name}>Adipisicing Elit Sed Do Eiusmod Tempor Incididunt Ut Labore Et
                                    Do
                                </Text>
                                <Text style={order.status}>Order Id: 1230932</Text>
                                <Text style={order.status}>Status: Delivered Successfully!</Text>
                                <Text style={order.status}>Delivered on: 1 Jul 2016</Text>

                                <View style={order.buttons}>
                                    <TouchableOpacity>
                                        <Text style={button.link}>DETAIL</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={Actions.trackorder}>
                                        <Text style={button.small}>TRACK</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={order.line}></View>
                        <View style={order.lineFinish}></View>
                        <View style={order.statusIcons}>
                            <View style={order.icon}>
                                <View style={[order.circel, order.finish]}></View>
                                <Text style={order.iconLabel}>PLACED</Text>
                            </View>
                            <View style={order.icon}>
                                <View style={[order.circel, order.finish]}></View>
                                <Text style={order.iconLabel}>DISPATCHED</Text>
                            </View>
                            <View style={order.icon}>
                                <View style={[order.circel, order.going]}></View>
                                <Text style={order.iconLabel}>DELIVERED</Text>
                            </View>
                        </View>
                    </View>

                    <View style={order.card}>
                        <View style={order.row}>
                            <Image style={order.image} source={require('../../images/man-s4.png')}></Image>

                            <View style={order.content}>
                                <Text style={order.name}>Sit Amet Consectetur Adipisicing Elit Sed Do Eius
                                </Text>
                                <Text style={order.status}>Order Id: 1232322</Text>
                                <Text style={order.status}>Status: Delivered Successfully!</Text>
                                <Text style={order.status}>Delivered on: 1 Jul 2016</Text>

                                <View style={order.buttons}>
                                    <TouchableOpacity>
                                        <Text style={button.link}>DETAIL</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={Actions.trackorder}>
                                        <Text style={button.small}>TRACK</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={order.line}></View>
                        <View style={order.lineFinish}></View>

                        <View style={order.statusIcons}>
                            <View style={order.icon}>
                                <View style={[order.circel, order.finish]}></View>
                                <Text style={order.iconLabel}>PLACED</Text>
                            </View>
                            <View style={order.icon}>
                                <View style={[order.circel, order.finish]}></View>
                                <Text style={order.iconLabel}>DISPATCHED</Text>
                            </View>
                            <View style={order.icon}>
                                <View style={[order.circel, order.finish]}></View>
                                <Text style={order.iconLabel}>DELIVERED</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
            ;
    }
}
