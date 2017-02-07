'use strict';

import React, {Component} from "react";
import {ListView, Text, View, Image, TouchableOpacity, ScrollView, TextInput} from "react-native";
import order from "./../Styles/order";
import {Actions} from "react-native-router-flux";

export default class Confirm extends Component {
    render() {
        return (
            <ScrollView>
                <View style={order.body}>
                    <View style={order.card}>
                        <View style={order.row}>
                            <Text style={[order.label, order.header]}>Cart</Text>
                            <Text style={order.link}>Edit</Text>
                        </View>

                        <View style={order.row}>
                            <View style={order.labelView}>
                                <Text style={order.subLabel}>Lorem Ipsum Dolor Sit Amet Consect</Text>
                                <Text style={order.description}>Color: Blue, Size: XL</Text>
                            </View>
                            <Text style={order.value}>%30</Text>
                        </View>

                        <View style={order.row}>
                            <Text style={order.label}>Sit Amet Consectetur Elit Sed</Text>
                            <Text style={order.value}>$19</Text>
                        </View>

                        <View style={order.row}>
                            <View style={order.labelView}>
                                <Text style={order.subLabel}>Dolor Sit Amet Consect</Text>
                                <Text style={order.description}>Size: XLL</Text>
                            </View>
                            <Text style={order.value}>$50</Text>
                        </View>

                        <View style={[order.row, order.linebreak]}>
                            <Text style={order.label}>TOTAL</Text>
                            <Text style={[order.value, order.total]}>$99</Text>
                        </View>
                    </View>
                    <View style={order.card}>
                        <View style={order.row}>
                            <Text style={[order.label, order.header]}>Delivery</Text>
                            <Text style={order.link}>Edit</Text>
                        </View>

                        <View style={order.row}>
                            <Text style={[order.label, order.fullWidth]}>Address: Lorem Ipsum Dolor Sit Amet Consectetur
                                Adipisicing Elit Sed Do Eiusmod Tempor
                            </Text>
                        </View>
                    </View>
                    <View style={order.card}>
                        <View style={order.row}>
                            <Text style={[order.label, order.header]}>Payment</Text>
                            <Text style={order.link}>Edit</Text>
                        </View>

                        <View style={order.row}>
                            <Text style={order.label}>VISA XXXX-XXXX-XXXX-1234
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
};
