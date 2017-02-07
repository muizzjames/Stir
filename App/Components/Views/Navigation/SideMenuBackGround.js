'use strict';

import React, {Component} from "react";
import {Text, View, TouchableOpacity, Image, ScrollView} from "react-native";
import css from "./style";
import {Actions} from "react-native-router-flux";
import Icon from "react-native-vector-icons/Ionicons";


export default class SideMenuIcons extends Component {
    render() {
        return (
            <ScrollView>
                <View style={[css.sideMenuLeft, this.props.menuBody]}>
                    <Image source={require('../../../images/menubackground.png')}
                           style={css.menuBg}>
                    </Image>

                    <View style={css.profileCenter}>
                        <Image style={css.avatarLeft}
                               source={{uri: 'https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png' }}/>
                        <Text style={[css.fullname, this.props.textColor]}>Minh Pham</Text>
                        <Text style={[css.email, this.props.textColor]}>minh@beostore.io</Text>
                        <Text style={[css.address, this.props.textColor]}>London <Icon name={'ios-pin-outline'}
                                                                                       style={[css.iconSmall]}/></Text>
                    </View>

                    <TouchableOpacity
                        style={[css.menuRowLeft, this.props.rowStyle]}
                        underlayColor="#2D2D30"
                        onPress={Actions.home}>
                        <Icon name={'ios-home-outline'} style={[css.icon, this.props.iconStyle]}/>
                        <Text style={[css.menuLinkLeft, this.props.textColor]}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[css.menuRowLeft, this.props.rowStyle]}
                        underlayColor="#2D2D30"
                        onPress={Actions.wooProduct}>
                        <Icon name={'ios-cart-outline'} style={[css.icon, this.props.iconStyle]}/>
                        <Text style={[css.menuLinkLeft, this.props.textColor]}>Shop</Text>

                        <View style={css.badge}>
                            <Image source={require('../../../images/circle.png')}
                                   style={css.badgeIcon}><Text style={css.badgeText}>4</Text></Image>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[css.menuRowLeft, this.props.rowStyle]}
                        underlayColor="#2D2D30"
                        onPress={Actions.news}>
                        <Icon name={'ios-paper-outline'} style={[css.icon, this.props.iconStyle]}/>
                        <Text style={[css.menuLinkLeft, this.props.textColor]}>News</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[css.menuRowLeft, this.props.rowStyle]}
                        underlayColor="#2D2D30"
                        onPress={Actions.templates}>
                        <Icon name={'ios-settings-outline'} style={[css.icon, this.props.iconStyle]}/>
                        <Text style={[css.menuLinkLeft, this.props.textColor]}>Settings</Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={[css.menuRowLeft, css.menuSignOut, this.props.rowStyle]}
                        underlayColor="#2D2D30"
                        onPress={Actions.login}>
                        <Icon name={'ios-log-out-outline'} style={[css.icon, this.props.iconStyle]}/>
                        <Text style={[css.menuLinkLeft, css.logoutLinkLeft, this.props.textColor]}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }

}
