'use strict';

import React, {Component} from "react";
import {ListView, Text, View, Image, TouchableOpacity, ScrollView, TextInput} from "react-native";
import shipping from "./../Styles/shipping";
import {Actions} from "react-native-router-flux";

export default class Payment extends Component {
    render() {
        return (
            <View style={shipping.layout}>
                <ScrollView>
                    <View style={shipping.cardContainer}>
                        <TouchableOpacity>
                            <Image source={require('../../images/card-1.png')} style={shipping.bankImage}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../images/card-2.png')} style={shipping.bankImage}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../images/card-3.png')} style={shipping.bankImage}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={shipping.card}>
                        <TextInput underlineColorAndroid='rgba(0,0,0,0)' style={shipping.input} placeholder={'Cardholder Name'}/>
                        <TextInput underlineColorAndroid='rgba(0,0,0,0)' style={shipping.input} placeholder={'Card Number'}/>

                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <TextInput underlineColorAndroid='rgba(0,0,0,0)' style={shipping.input} placeholder={'MM'}/>
                            <TextInput underlineColorAndroid='rgba(0,0,0,0)' style={shipping.input} placeholder={'YY'}/>
                            <TextInput underlineColorAndroid='rgba(0,0,0,0)' style={shipping.input} placeholder={'CVV'}/>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
};
