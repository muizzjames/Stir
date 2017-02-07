'use strict';

import React, { Component } from 'react';
import {Text, View, Image, ListView, TouchableOpacity, ScrollView} from 'react-native';
import {Actions} from "react-native-router-flux";
const shop = require('./../Styles/shop.js').default;

export default class ListItem extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<View style={shop.list}>
				<ScrollView>

					<TouchableOpacity onPress={Actions.product}>
						<View style={shop.blockFull}>
							<Image source={require('../../images/shop1.png')} style={shop.imageFull}></Image>
						</View>
					</TouchableOpacity>

					<TouchableOpacity>
						<View style={shop.blockFull}>
							<Image source={require('../../images/shop2.png')} style={shop.imageFull}></Image>
						</View>
					</TouchableOpacity>

					<View style={{flexDirection:'row'}}>
						<TouchableOpacity>
							<View style={shop.block}>
								<Image source={require('../../images/shop3.png')} style={shop.imageBlock}></Image>
							</View>
						</TouchableOpacity>
						<TouchableOpacity>
							<View style={shop.block}>
								<Image source={require('../../images/shop4.png')} style={shop.imageBlock}></Image>
							</View>
						</TouchableOpacity>
					</View>

					<View style={{flexDirection:'row'}}>
						<TouchableOpacity>
							<View style={shop.block}>
								<Image source={require('../../images/shop5.png')} style={shop.imageBlock}></Image>
							</View>
						</TouchableOpacity>
						<TouchableOpacity>
							<View style={shop.block}>
								<Image source={require('../../images/shop6.png')} style={shop.imageBlock}></Image>
							</View>
						</TouchableOpacity>
					</View>

					<View style={{flexDirection:'row'}}>
						<TouchableOpacity>
							<View style={shop.block}>
								<Image source={require('../../images/shop7.png')} style={shop.imageBlock}></Image>
							</View>
						</TouchableOpacity>
						<TouchableOpacity>
							<View style={shop.block}>
								<Image source={require('../../images/shop8.png')} style={shop.imageBlock}></Image>
							</View>
						</TouchableOpacity>
					</View>

					<View style={{flexDirection:'row'}}>
						<TouchableOpacity>
							<View style={shop.block}>
								<Image source={require('../../images/shop9.png')} style={shop.imageBlock}></Image>
							</View>
						</TouchableOpacity>
						<TouchableOpacity>
							<View style={shop.block}>
								<Image source={require('../../images/shop3.png')} style={shop.imageBlock}></Image>
							</View>
						</TouchableOpacity>
					</View>

				</ScrollView>
		    </View>
		);
	}
}
