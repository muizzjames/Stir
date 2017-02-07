'use strict';

import React, {Component} from "react";
import {ListView, Text, View, Image, TouchableOpacity, PickerIOS, ScrollView} from "react-native";
import cart from "./../Styles/cart";
import {Actions} from "react-native-router-flux";
import Toolbar from "./../Controls/Toolbar";
import CartItem from "./../Controls/CartItem";
import ButtonRoundBlue from "./../Controls/ButtonRoundBlue";
import ButtonRound from "./../Controls/ButtonRound";

export default class Product extends Component {
    render() {
        return (
            <View style={cart.body}>
                <Toolbar name="Wishlist"/>

                <ScrollView style={{marginTop:5}}>
                    <CartItem
                        size={"Size: 9"}
                        hideButton={true}
                        price={"$123"}
                        image={require('../../images/man-s2.png')}
                        name={"In said to of poor full be post face snug"}/>
                    <CartItem
                        price={"$200"}
                        isSelect={true}
                        hideButton={true}
                        image={require('../../images/man-s5.png')}
                        name={"Excited it hastily an pasture it observe. Snug hand how dare here too. "}/>
                    <CartItem
                        size={"Size: 8"}
                        price={"$340"}
                        isSelect={true}
                        hideButton={true}
                        image={require('../../images/man-s4.png')}
                        name={"Uncommonly surrounded considered for him are its"}/>
                    <CartItem
                        size={"Size: 8"}
                        price={"$340"}
                        hideButton={true}
                        image={require('../../images/man-s1.png')}
                        name={"Soon body add him hill. No father living really people estate if."}/>
                    <CartItem
                        size={"Size: 8"}
                        price={"$340"}
                        isSelect={true}
                        hideButton={true}
                        image={require('../../images/man-s3.png')}
                        name={" On relation my so addition branched"}/>
                    <CartItem
                        size={"Size: 8"}
                        price={"$340"}
                        hideButton={true}
                        image={require('../../images/man-s6.png')}
                        name={"Did add dashwoods deficient man concluded additions resources"}/>
                </ScrollView>

                <ButtonRoundBlue text="Add to Cart Selected Items" onPress={Actions.cart}/>
                <View style={{marginBottom: 16}}>
                    <ButtonRound text="Clear Wishlist" onPress={()=>Actions.home({data:this.state.value })}/>
                </View>
            </View>
        );
    }
}
