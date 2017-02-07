'use strict';

import React, {Component} from "react";
import {Text, View, TouchableOpacity, Image} from "react-native";
const product = require('./../Styles/shop.js').default;

export default class Product extends Component {
    render() {
        return (
            <TouchableOpacity>
                <View style={product.panel}>
                    <Image source={this.props.imageURL} style={product.imagePanel}></Image>
                </View>

                <Text style={product.name}>{this.props.name}</Text>
                <Text style={product.price}>{this.props.price}</Text>
            </TouchableOpacity>
        );
    }

}
