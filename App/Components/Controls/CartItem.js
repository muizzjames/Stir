'use strict';

import React, {Component} from "react";
import {
    TextInput,
    Text,
    View,
    Image,
    StatusBarIOS,
    ScrollView,
    TouchableOpacity,
    Platform,
    Dimensions,
    DeviceEventEmitter
} from "react-native";
import cart from "./../Styles/cart";
import {Actions} from "react-native-router-flux";
import Icon from "react-native-vector-icons/EvilIcons";
import css from "./../Styles/style";

export default class CartItem extends Component {
    render() {
        const buttonList = <View style={cart.buttonPanel}>
            <View style={cart.buttons}>
                <TouchableOpacity>
                    <Text style={cart.numberItem}>+</Text>
                </TouchableOpacity>
                <Text style={[cart.numberItem, cart.numberText]}>1</Text>
                <TouchableOpacity>
                    <Text style={cart.numberItem}>-</Text>
                </TouchableOpacity>
            </View>
        </View>;

        return (
            <View style={cart.cards}>
                <TouchableOpacity style={cart.close}>
                    <Icon name={"check"} style={[css.icon32, cart.iconClose, this.props.isSelect == true ? cart.active: '']}/>
                </TouchableOpacity>

                <View style={{flexDirection: 'row'}}>
                    <Image style={cart.image} source={this.props.image}></Image>

                    <View style={cart.namePanel}>
                        <Text style={cart.name}>{this.props.name}</Text>
                        <View>
                            <Text style={cart.price}>{this.props.price}</Text>
                            <Text style={cart.size}>{this.props.size}</Text>
                        </View>
                    </View>
                    {this.props.hideButton ? null : buttonList}
                </View>
            </View>
        );
    }
}
