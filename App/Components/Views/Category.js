'use strict';

import React, {Component} from "react";
import {Text, View, Dimensions, StyleSheet, PixelRatio, Image, ListView, TouchableOpacity, TouchableHighlight, ActivityIndicator, Linking} from "react-native";
import styles from "./../Styles/category";
import Parallax from "react-native-parallax";
import FoursquareApi from "../../Services/FoursquareApi";

var params = {
    //this should be dynamic lat and long
    'll': '10.652814,-61.3969835',
    'categoryId': '4d4b7105d754a06376d81259',
    'radius': '3000',
    'sortByDistance': '1',
    'v': '20140730'
};



var foursquare;



var SCROLLVIEW = 'Parallax_scroll';
var PARALLAX_FACTOR = 0.8;
var SECTIONS = [
    {
        title: 'B A G S',
        number: '2990',
        keyword: require("../../images/cate1.png"),
    },
    {
        title: 'S H O E S',
        number: '23900',
        keyword: require('../../images/cate2.png'),
    },
    {
        title: 'S U I T S',
        number: '99',
        keyword: require('../../images/cate3.png'),
    },
    {
        title: 'A C C E S S O R I E S',
        number: '3320',
        keyword: require('../../images/cate4.png'),
    },
    {
        title: 'L O R E M  I P S U M',
        number: '360',
        keyword: require('../../images/cate5.png'),
    },
    {
        title: 'C O N S E C T E T U R',
        number: '340',
        keyword: require('../../images/cate6.png'),
    },
    {
        title: 'A D I P I S I C I N G',
        number: '430',
        keyword: require('../../images/cate7.png'),
    }
];

var _this;

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {            
            isRefreshing: true,
            mainData: [],
        }
        _this = this;
    }

    componentWillMount() {
        params.ll = this.props.lat + ','+  this.props.lng;
        FoursquareApi(params, function(res){
            _this.setState({
                isRefreshing: false,
                mainData: res
            });
        }); 
            
    }

    totalAmount(a){
        if(a != 'Nobody here'){
            return  <Text style={styles.description}>{section.total}</Text>
        }
    }

    render() {
        return (
            <View>
            
                { this.state.isRefreshing ? <ActivityIndicator style={{ alignItems: 'center', justifyContent: 'center', padding: 8 }} /> :
                <Parallax.ScrollView ref={SCROLLVIEW} style={styles.scrollView}>
                    {this.state.mainData.map((section, i) => (
                        <Parallax.Image
                            key={i}
                            style={styles.image}
                            overlayStyle={styles.overlay}
                            source={{uri: section.image ==="" ?  'https://facebook.github.io/react/img/logo_og.png' : section.image}}
                            parallaxFactor={PARALLAX_FACTOR}>
                            <Text style={styles.title}>{section.name}</Text>
                            {this.totalAmount(section.total)}
                            <Text style={styles.description}>{section.category}</Text>

                            
                            <TouchableOpacity style={{marginTop:20}} onPress={() => Linking.openURL('uber://?client_id=IFYyz2JJPLLmxzCFNuxm7fyrMk-HWNNW&action=setPickup&pickup[latitude]='+this.props.lat+'&pickup[longitude]='+this.props.lng+'&pickup[nickname]=Current Location&dropoff[latitude]='+section.location.lat+'&dropoff[longitude]='+section.location.lng+'&dropoff[nickname]='+section.name+'&dropoff[formatted_address]='+section.location.formattedAddress[0]+' '+section.location.formattedAddress[1]+' '+section.location.formattedAddress[2]+'&product_id=a1111c8c-c720-46c3-8534-2fcdd730040d&link_text=View%20team%20roster&partner_deeplink=partner%3A%2F%2Fteam%2F9383').catch(err =>{
                                alert('You have to install Uber app!');
                            })}>
                        
                                <Text style={{fontSize: 12, color:'#fff', lineHeight: 21}}>    
                                    <Image
                                    style={{width:15,height:15}}
                                    source={{ uri: 'http://stirapp.co/img/uber-logo.png'}}
                                /> Request Uber</Text>

                            </TouchableOpacity>
                        </Parallax.Image>
                    ))}
                </Parallax.ScrollView> }
            </View>
            
        );
    }
}
