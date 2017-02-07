import React, {Component} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import styles from "./../Styles/button";

module.exports = React.createClass({
    render: function () {
        return (
            <TouchableOpacity style={[styles.buttonRoundBlue, this.props.style, {backgroundColor: this.props.color ? this.props.color : '#1CAADE'} ] }
                onPress={this.props.onPress} >
                <Text style={styles.buttonRectangularText}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
})
