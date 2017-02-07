'use strict';

import React, {Component} from "react";
import {Text, View, TouchableOpacity, Image} from "react-native";
import post from "./../Styles/Post";

import TimeAgo from "react-native-timeago";
import Constants from './../../Common/Constants';
import {Actions} from "react-native-router-flux";

export default class Post extends Component {
    viewPost() {
        Actions.postDetails( {post: this.props.post} );
    }
    
    render() {
        const data = this.props.post;

        if (this.props.layout == Constants.Post.layout_one)    {
            return (
                <TouchableOpacity style={post.panelOne} onPress={this.viewPost.bind(this)} >
                    <Image source={{uri: data.better_featured_image.source_url}} style={post.imagePanelOne}></Image>
                    <Text style={post.nameOne}>{data.title.rendered}</Text>
                    <Text style={post.timeOne}><TimeAgo time={data.date} hideAgo={true}/></Text>
                </TouchableOpacity>
            );
        }
        else if (this.props.layout == Constants.Post.layout_two)    {
            return (
                <TouchableOpacity style={post.panelTwo} onPress={this.viewPost.bind(this)} >
                    <Image source={{uri: data.better_featured_image.source_url}} style={post.imagePanelTwo}></Image>
                    <Text style={post.nameTwo}>{data.title.rendered}</Text>
                    <Text style={post.timeTwo}><TimeAgo time={data.date} hideAgo={true}/></Text>
                </TouchableOpacity>
            );
        }
        return (
            <TouchableOpacity style={post.panel} onPress={this.viewPost.bind(this)} >
                <Image source={{uri: data.better_featured_image.source_url}} style={post.imagePanel}></Image>
                <Text style={post.name}>{data.title.rendered}</Text>
                <Text style={post.time}><TimeAgo time={data.date} hideAgo={true}/></Text>
            </TouchableOpacity>
        );
    }
}
