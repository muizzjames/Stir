'use strict';

import React, {Component} from "react";
import {
    ListView,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Dimensions,
    AppRegistry
} from "react-native";
import {Actions} from "react-native-router-flux";
import css from "./../Styles/style";
import Toolbar from "./../Controls/Toolbar";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import product from "./../Styles/product";
import Modal from "react-native-modalbox";
import AppEventEmitter from "./../../Services/AppEventEmitter";
import Swiper from "../../../node_modules/react-native-swiper";
import Icon from "react-native-vector-icons/Ionicons";

var deviceWidth = Dimensions.get('window').width;

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected1: 'key1'
        }
    }

    componentDidMount() {
        AppEventEmitter.addListener('open.product.click', this.openProductDetail.bind(this));
        AppEventEmitter.addListener('close.product.click', this.closeProductDetail.bind(this));
    }

    onValueChange(key:string, value:string) {
        const newState = {};
        newState[key] = value;
        this.setState(newState);
    }

    closeProductDetail() {
        this.refs.modalProduct.close();
    }

    openProductDetail() {
        this.refs.modalProduct.open();
    }

    openProduct() {
        AppEventEmitter.emit('open.product.click');
    }

    closeProduct() {
        AppEventEmitter.emit('close.product.click');
    }

    getDescription(desc) {
        return desc.replace('<p>', '').substring(0, 200);
    }

    render() {
        const productDetail = (
            <View>
                <ScrollView style={{marginTop:5,marginBottom:40}}>
                    <TouchableOpacity style={product.cards}>
                        <View
                            style={{flexDirection:'row',margin:8,width:deviceWidth-20,justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row',alignItems:'center',marginLeft:5}}>
                                <Icon name={'ios-shirt-outline'} style={product.productNavIcon}/>
                                <Text style={{fontSize:12,marginLeft:5,marginRight:5}}>Select Size</Text>
                            </View>
                            <View style={{alignSelf:'center',marginRight:15,marginLeft:15}}>
                                <Icon name={'ios-arrow-down'} style={product.detailsDropdown}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={product.cards}>
                        <View
                            style={{flexDirection:'row',margin:8,width:deviceWidth-20,justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row',alignItems:'center',marginLeft:5}}>
                                <Icon name={'ios-color-filter-outline'} style={product.productNavIcon}/>

                                <Text style={{fontSize:12,marginLeft:5,marginRight:5}}>Select color</Text>
                            </View>
                            <View style={{alignSelf:'center',marginRight:15,marginLeft:15}}>
                                <Icon name={'ios-arrow-down'} style={product.detailsDropdown}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={product.cards}>
                        <View
                            style={{flexDirection:'row',margin:8,width:deviceWidth-20,justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row',alignItems:'center',marginLeft:5}}>
                                <Icon name={'ios-time-outline'} style={product.productNavIcon}/>
                                <Text style={{fontSize:12,marginLeft:5,marginRight:5}}>Check Delivery Options</Text>
                            </View>
                            <View style={{alignSelf:'center',marginRight:15,marginLeft:15}}>
                                <Icon name={'ios-arrow-down'} style={product.detailsDropdown}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )

        const productSwipe = (
            <Swiper
                dot={<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 8, height: 8, borderRadius: 4, marginLeft: 4, marginRight: 4}} />}
                activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 4, marginRight: 4}} />}
                paginationStyle={{top: 300, left: 10}}
            >
                <View>
                    <Image source={{uri: this.props.product.images[0].src}} style={css.image}></Image>
                </View>
                <View>
                    <Image source={require('../../images/detail2.jpg')} style={css.image}></Image>
                </View>
                <View>
                    <Image source={require('../../images/detail3.jpg')} style={css.image}></Image>
                </View>
                <View>
                    <Image source={require('../../images/detail4.jpg')} style={css.image}></Image>
                </View>
            </Swiper>

        )

        return (
            <View style={product.color}>
                <ParallaxScrollView
                    backgroundColor="#eee"
                    contentBackgroundColor="white"
                    parallaxHeaderHeight={500}
                    renderFixedHeader={() => (
                        <Toolbar name="Product detail" action={Actions.wooProduct} isChild="true"/>
                    )}
                    renderBackground={() => (
                        <View style={{marginTop: 60}}>
                            <Image style={product.productItem} source={{uri: this.props.product.images[0].src}}  />
                        </View>
                    )}
                    renderForeground={() => (
                           <View style={product.detailPanel}>
                                <View style={product.detailBlock}>
                                    <TouchableOpacity style={product.iconZoom} onPress={this.openProduct}>
                                        <Image source={require('../../images/icon-zoom-out.png')} style={css.imageIcon}></Image>
                                    </TouchableOpacity>

                                    <Text style={product.detailPrice}>${this.props.product.price} <Text style={product.detailFullPrice}>${this.props.product.regular_price}</Text></Text>
                                    <Text style={product.detailName}>{this.props.product.name}</Text>
                                    <Text style={product.detailDesc}>{this.getDescription(this.props.product.description) }
                                    </Text>
                                </View>
                            </View>
                          )}>
                    <View>
                        {productDetail}
                    </View>
                </ParallaxScrollView>

                <View
                    style={{position:'absolute',bottom:0,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>

                    <TouchableOpacity style={[product.detailsBtn,{backgroundColor:'#eee'}]}>
                        <Text style={[product.detailsBtnTxt,{color:'#494949'}]}>ADD TO CART</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[product.detailsBtn, css.backgroundColor]} onPress={Actions.cart}>
                        <Text style={[product.detailsBtnTxt,{color:'white'}]}>BUY NOW</Text>
                    </TouchableOpacity>
                </View>

                <Modal ref={"modalProduct"} swipeToClose={false} animationDuration={200}>
                    <View style={css.modal}>
                        {productSwipe}
                        <TouchableOpacity style={product.iconZoom} onPress={this.closeProduct}>
                            <Image source={require('../../images/icon-zoom-in.png')}
                                   style={[css.imageIcon, {top: 2, right: 4}]}></Image>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        );
    }
}
