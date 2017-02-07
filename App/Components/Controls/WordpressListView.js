'use strict';

import React, {Component} from "react";
import {
    TextInput,
    Text,
    View,
    Image,
    StatusBarIOS,
    ListView,
    Animated,
    TouchableOpacity,
    ScrollView,
    Platform,
    Dimensions,
    NetInfo,
    DeviceEventEmitter
} from "react-native";
import {Actions} from "react-native-router-flux";
import ApiNews from "./../../Services/ApiNews";
import css from "./../Styles/style";
import news from "./../Styles/news";
import Spinner from "react-native-spinkit";

export default class WordpressListView extends Component {
    constructor(props) {
        super(props);
        this.data = [];
        this.state = {
            page: 1,
            limit: 5,
            isOnline: true,
            isLoading: false,
            finish: false,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => true
            })
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        var self = this;
        if (this.state.finish || !this.state.isOnline) {
            return;
        }
        self.setState({isLoading: true});

        ApiNews.getPosts({
                'per_page': this.state.limit,
                'page': this.state.page
            })
            .then(function (data) {
                console.log(data);

                self.data = self.data.concat(data);
                self.setState({
                    page: self.state.page + 1,
                    finish: data.length < self.state.limit,
                    isLoading: false,
                    dataSource: self.getDataSource(self.data)
                });
            });
    }

    getDataSource(posts) {
        return this.state.dataSource.cloneWithRows(posts);
    }

    onEndReached() {
        this.fetchData();
    }

    renderRow(post, sectionID, rowID) {
        var oddStyle = rowID % 2 == 0 ? {backgroundColor: '#F8F8F8'} : '';

        if (post.better_featured_image != null) {
            return (
                <View style={[news.card, oddStyle]}>
                    <Image style={news.image} source={{uri: post.better_featured_image.source_url }}></Image>

                    <View style={news.content}>
                        <Text>{post.title.rendered}</Text>
                        <Text>{post.date}</Text>
                    </View>
                </View>
            );
        }
        return (
            <View style={[news.card, oddStyle]}>
                <View style={news.box}></View>
                <View style={news.content}>
                    <Text>{post.title.rendered}</Text>
                    <Text>{post.date}</Text>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View>
                <ListView
                    style={news.body}
                    onEndReached={this.onEndReached.bind(this)}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}>
                </ListView>
                <View style={css.spinner}>
                    <Spinner isVisible={this.state.isLoading}
                             size={40}
                             type="Circle"
                             color="#1CAADE"/>
                </View>
            </View>
        );
    }
}
