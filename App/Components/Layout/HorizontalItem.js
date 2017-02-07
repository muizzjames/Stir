'use strict';

import React, {Component} from "react";
import {Text, View, Image, ListView, TouchableOpacity, ScrollView} from "react-native";
import Swiper from "react-native-swiper";

const shop = require('./../Styles/shop.js').default;
import Product from './../Controls/Product';

export default class HorizontalItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const swipeView = (
            <View>
                <Image source={require('../../images/man1.png')} style={shop.image}>
                    <Swiper dot={<View style={{backgroundColor:'rgba(255,255,255,.3)', width: 8, height: 8, borderRadius: 4, marginLeft: 4, marginRight: 4}} />}
                            activeDot={<View style={{backgroundColor: '#fff', width: 8, height: 8, borderRadius: 4, marginLeft: 4, marginRight: 4}} />}
                            paginationStyle={{top: -300, left: 300}}
                    >
                        <View>
                            <Image source={require('../../images/man1.png')} style={shop.image}></Image>
                        </View>
                        <View>
                            <Image source={require('../../images/man2.png')} style={shop.image}></Image>
                        </View>
                        <View>
                            <Image source={require('../../images/man3.png')} style={shop.image}></Image>
                        </View>
                    </Swiper>
                </Image>
            </View>
        )

        const scrollView = (
            <ScrollView style={shop.scrollView}
                        directionalLockEnabled={true}
                        horizontal={true}>

                <View style={{flexDirection:'row'}}>
                    <Product name="New Balance 530 Multi Trainers" price="120$" imageURL={require('../../images/man-s1.png')} />
                    <Product name="Dark Future Drop Crotch Jeans" price="110$" imageURL={require('../../images/man-s2.png')} />
                    <Product name="Spitfire Post Punk Round" price="110$" imageURL={require('../../images/man-s3.png')} />
                    <Product name="Puma Throwbacks Sweat Shorts" price="110$" imageURL={require('../../images/man-s4.png')} />
                    <Product name="Sweat Shorts Adidas" price="110$" imageURL={require('../../images/man-s5.png')} />
                </View>
            </ScrollView>
        )

        const scrollView2 = (
            <ScrollView style={shop.scrollView}
                        directionalLockEnabled={true}
                        horizontal={true}>

                <View style={{flexDirection:'row'}}>
                    <Product name="what deal evil rent by real" price="110$" imageURL={require('../../images/man-s6.png')} />
                    <Product name="literature to or an sympathize" price="110$" imageURL={require('../../images/man-s4.png')} />
                    <Product name="Way advantage age led" price="110$" imageURL={require('../../images/man-s5.png')} />
                    <Product name="what deal evil rent by real in" price="110$" imageURL={require('../../images/man-s3.png')} />
                </View>
            </ScrollView>
        )


        return (
            <View style={shop.hlist}>
                <ScrollView>
                    {swipeView}
                    <View>
                        <Text style={shop.title}>BEST SELLER</Text>
                    </View>
                    {scrollView}
                    <View>
                        <Text style={shop.title}>POPULAR</Text>
                    </View>
                    {scrollView2}
                    <View>
                        <Text style={shop.title}>LATEST COLLECTIONS</Text>
                    </View>
                    {scrollView}
                </ScrollView>
            </View>
        );
    }
}
