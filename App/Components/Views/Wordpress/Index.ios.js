'use strict';

import React, {Component} from "react";
import {Text, View, Image, ListView, StatusBar} from "react-native";
import {Actions} from "react-native-router-flux";

import PostCategory from "./PostCategory";
import StickyScrollView from "./Widget/StickyScrollView";

export default class Index extends Component {
    constructor(props) {
        super(props);
        StatusBar.setHidden(true);
    }
    render() {
        return (
            <StickyScrollView>
                <PostCategory />
            </StickyScrollView>

        );
    }
}
