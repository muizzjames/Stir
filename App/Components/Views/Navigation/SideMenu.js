'use strict';

import React, {Component} from "react";
import {Text, View, TouchableOpacity, Image, ScrollView} from "react-native";
import css from "./style";
import {Actions} from "react-native-router-flux";

export default class SideMenu extends Component {
    render() {
        return (
            <ScrollView>
                <View style={[css.sideMenu, this.props.menuBody]}>
                    <View style={css.profile}>
                        <Image style={css.avatar}
                               source={{uri: 'https://freeiconshop.com/files/edd/person-flat.png' }}/>
                        <Text style={[css.fullname, this.props.textColor]}>Minh Pham</Text>
                        <Text style={[css.email, this.props.textColor]}>minh@beostore.io</Text>
                    </View>

                    <TouchableOpacity
                        style={[css.menuRow, this.props.rowStyle]}
                        underlayColor="#2D2D30"
                        onPress={Actions.wooProduct}>
                        <Text style={[css.menuLink, this.props.textColor]}>Shop</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[css.menuRow, this.props.rowStyle]}
                        underlayColor="#2D2D30"
                        onPress={Actions.news}>
                        <Text style={[css.menuLink, this.props.textColor]}>News</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[css.menuRow, this.props.rowStyle]}
                        underlayColor="#2D2D30"
                        onPress={Actions.templates}>
                        <Text style={[css.menuLink, this.props.textColor]}>Templates</Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={[css.menuRow, css.menuSignOut, this.props.rowStyle]}
                        underlayColor="#2D2D30"
                        onPress={Actions.login}>
                        <Text style={[css.menuLink, css.logoutLink, this.props.textColor]}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }

}
