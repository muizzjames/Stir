'use strict';

import React, {Component} from "react";
import {ListView, Text, View, Image, TouchableOpacity, ScrollView, TextInput} from "react-native";
import order from "./../Styles/order";
import summary from "./../Styles/summary";
import {Actions} from "react-native-router-flux";

export default class Summary extends Component {
    render() {
        return (
            <View style={summary.body}>
                <ScrollView>
                    <View style={summary.card}>
                        <View style={summary.row}>
                            <Text style={[summary.label, summary.header]}>Cart:</Text>
                        </View>

                        <View style={summary.row}>
                            <View style={summary.labelView}>
                                <Text style={summary.subLabel}>Lorem Ipsum Dolor Sit Amet Consect</Text>
                                <Text style={summary.description}>Color: Blue, Size: XL</Text>
                            </View>
                            <Text style={summary.value}>%30</Text>
                        </View>

                        <View style={summary.row}>
                            <Text style={summary.label}>Sit Amet Consectetur Elit Sed</Text>
                            <Text style={summary.value}>$19</Text>
                        </View>

                        <View style={summary.row}>
                            <View style={summary.labelView}>
                                <Text style={summary.subLabel}>Dolor Sit Amet Consect</Text>
                                <Text style={summary.description}>Size: XLL</Text>
                            </View>
                            <Text style={summary.value}>$50</Text>
                        </View>

                        <View style={[summary.row, summary.linebreak]}>
                            <Text style={summary.label}>TOTAL</Text>
                            <Text style={[summary.value, summary.total]}>$99</Text>
                        </View>
                    </View>

                    <View style={[summary.card, summary.lastRow]}>
                        <View style={summary.row}>
                            <Text style={[summary.label, summary.header]}>Delivery address:</Text>
                        </View>

                        <View style={summary.row}>
                            <Text style={[summary.label, summary.fullWidth]}>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Sed Do Eiusmod Tempor
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
};
