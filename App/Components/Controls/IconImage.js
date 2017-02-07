'use strict';

import React, {Component} from "react";
import {Text, View, TouchableOpacity, TextInput, Image} from "react-native";
import css from "./../Styles/style";

export default class IconImage extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.action} style={css.imageIconView}>
                <Image source={this.props.image} style={css.imageIcon} {...this.props}></Image>
            </TouchableOpacity>
        );
    }

}

