'use strict';

import React, { Component } from 'react';
import {ListView, Text, View, Image, TouchableOpacity, PickerIOS, ScrollView} from 'react-native';
import product from "./../Styles/product";
import Toolbar from './../Controls/Toolbar';
import {Actions} from 'react-native-router-flux';
import css from "./../Styles/style";
import AppEventEmitter from './../../Services/AppEventEmitter';

export default class ProductGrid extends Component {
	open () {
        AppEventEmitter.emit('hamburger.click');
    }

	render() {
		return (
			<View style={product.color}>
				<Toolbar name="Product" gridButton={true} heartButton={true} />

	            <ScrollView style={{marginTop:5}}>
		            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
						<View style={product.cardsGrid}>
							<Image source={require('../../images/woman-1.jpg')} style={product.productItemGrid}></Image>
							<TouchableOpacity style={product.star}>
								<Image source={require('../../images/icon-heart.png')} style={css.imageIcon}></Image>
							</TouchableOpacity>
							<Text style={product.productName}>Frame Cardigan</Text>
							<View style={{flexDirection:'row'}}>
								<Text style={[product.discountPrice, {paddingBottom: 12, paddingLeft: 4}]}>$69.95</Text>
							</View>
						</View>
						<View style={product.cardsGrid}>
							<Image source={require('../../images/woman2.jpg')} style={product.productItemGrid}></Image>

							<TouchableOpacity style={product.star}>
								<Image source={require('../../images/icon-heart.png')} style={css.imageIcon}></Image>
							</TouchableOpacity>

							<Text style={product.productName}>Bodycon Dress</Text>
							<View style={{flexDirection:'row'}}>
								<Text style={[product.discountPrice]}>$49.94</Text>
							</View>
						</View>
					</View>
					<View style={{flexDirection:'row',justifyContent:'space-around'}}>
						<View style={product.cardsGrid}>
							<Image source={require('../../images/woman4.jpg')} style={product.productItemGrid}></Image>
							<TouchableOpacity style={product.star}>
								<Image source={require('../../images/icon-heart.png')} style={css.imageIcon}></Image>
							</TouchableOpacity>
							<Text style={product.productName}>Bodycon Dress</Text>
							<View style={{flexDirection:'row'}}>
								<Text style={[product.discountPrice]}>$49.94</Text>
							</View>
						</View>
						<View style={product.cardsGrid}>
							<Image source={require('../../images/woman5.jpg')} style={product.productItemGrid}></Image>
							<TouchableOpacity style={product.star}>
								<Image source={require('../../images/icon-heart.png')} style={css.imageIcon}></Image>
							</TouchableOpacity>
							<Text style={product.productName}>Frame Cardigan</Text>
							<View style={{flexDirection:'row'}}>
								<Text style={[product.discountPrice]}>$69.95</Text>
							</View>
						</View>
					</View>

					<View style={{flexDirection:'row',justifyContent:'space-around'}}>
						<View style={product.cardsGrid}>
							<Image source={require('../../images/woman6.jpg')} style={product.productItemGrid}></Image>
							<TouchableOpacity style={product.star}>
								<Image source={require('../../images/icon-heart.png')} style={css.imageIcon}></Image>
							</TouchableOpacity>
							<Text style={product.productName}>Frame Cardigan</Text>
							<View style={{flexDirection:'row'}}>
								<Text style={[product.discountPrice]}>$69.95</Text>
							</View>
						</View>
						<View style={product.cardsGrid}>
							<Image source={require('../../images/woman7.jpg')} style={product.productItemGrid}></Image>
							<TouchableOpacity style={product.star}>
								<Image source={require('../../images/icon-heart.png')} style={css.imageIcon}></Image>
							</TouchableOpacity>
							<Text style={product.productName}>Frame Cardigan</Text>
							<View style={{flexDirection:'row'}}>
								<Text style={[product.discountPrice]}>$69.95</Text>
							</View>
						</View>
					</View>

					<View style={{flexDirection:'row',justifyContent:'space-around'}}>
						<View style={product.cardsGrid}>
							<Image source={require('../../images/woman3.jpg')} style={product.productItemGrid}></Image>
							<TouchableOpacity style={product.star}>
								<Image source={require('../../images/icon-heart.png')} style={css.imageIcon}></Image>
							</TouchableOpacity>
							<Text style={product.productName}>Frame Cardigan</Text>
							<View style={{flexDirection:'row'}}>
								<Text style={[product.discountPrice]}>$69.95</Text>
							</View>
						</View>
						<View style={product.cardsGrid}>
							<Image source={require('../../images/woman8.jpg')} style={product.productItemGrid}></Image>
							<TouchableOpacity style={product.star}>
								<Image source={require('../../images/icon-heart.png')} style={css.imageIcon}></Image>
							</TouchableOpacity>
							<Text style={product.productName}>Frame Cardigan</Text>
							<View style={{flexDirection:'row'}}>
								<Text style={[product.discountPrice]}>$69.95</Text>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}
