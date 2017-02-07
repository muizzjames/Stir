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
import Toolbar from "./../Controls/Toolbar";
import CartItem from "./../Controls/CartItem";
import ButtonRoundBlue from "./../Controls/ButtonRoundBlue";
import ButtonRound from "./../Controls/ButtonRound";
import css from "./../Styles/style";

export default class Cart extends Component {
    render() {
        return (
            <View style={cart.body}>
                <Toolbar name="Cart"  searchButton={true} />
                <ScrollView style={{marginTop:5}}>
                    <CartItem
                        size={"Size: 9"}
                        price={"$123"}
                        image={require('../../images/man-s2.png')}
                        name={"In said to of poor full be post face snug"}/>
                    <CartItem
                        price={"$200"}
                        isSelect={true}
                        image={require('../../images/man-s5.png')}
                        name={"Excited it hastily an pasture it observe. Snug hand how dare here too. "}/>
                    <CartItem
                        size={"Size: 8"}
                        price={"$340"}
                        isSelect={true}
                        image={require('../../images/man-s4.png')}
                        name={"Uncommonly surrounded considered for him are its"}/>
                    <CartItem
                        size={"Size: 8"}
                        price={"$340"}
                        image={require('../../images/man-s1.png')}
                        name={"Soon body add him hill. No father living really people estate if."}/>
                    <CartItem
                        size={"Size: 8"}
                        price={"$340"}
                        isSelect={true}
                        image={require('../../images/man-s3.png')}
                        name={" On relation my so addition branched"}/>
                    <CartItem
                        size={"Size: 8"}
                        price={"$340"}
                        image={require('../../images/man-s6.png')}
                        name={"Did add dashwoods deficient man concluded additions resources"}/>
                </ScrollView>

                <View style={cart.total}>
                    <Text style={cart.totalText}>TOTAL</Text>
                    <Text style={ (Platform.OS === 'ios' ? cart.totalPrice : cart.totalPriceAndroid)  }>$450</Text>
                </View>

                <View style={ {flexDirection: 'row'} }>
                    <TouchableOpacity >
                        <ButtonRound onPress={Actions.home} style={css.halfWidth} text="Cancel" />
                    </TouchableOpacity>

                    <TouchableOpacity  style={[{marginBottom: 16}]}>
                        <ButtonRoundBlue onPress={Actions.checkout} style={css.halfWidth} text="Check Out" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
