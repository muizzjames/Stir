import React, {Component} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import styles from "./../Styles/button";

module.exports = React.createClass({
    render: function () {
        return (
            <TouchableOpacity style={[styles.buttonRound, this.props.style]}
                onPress={this.props.onPress}>
                <Text style={styles.buttonRoundText}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
})
