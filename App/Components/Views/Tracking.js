'use strict';

import React, {Component} from "react";
import {Text, View, Image, ListView, TouchableOpacity, ScrollView} from "react-native";
import track from "./../Styles/trackorder";
import * as Animatable from "react-native-animatable";

export default class Tracking extends Component {
    render() {
        return (
            <View style={track.body}>
                <View style={track.card}>
                    <ScrollView>
                        <View style={track.line}/>
                        <View style={track.lineFinish}/>

                        <View style={track.row}>
                            <View style={[track.circel, track.finish]}></View>
                            <Text style={[track.title, track.titleFinish]}>PLACED</Text>
                        </View>

                        <View style={track.content}>
                            <View>
                                <Text style={track.label}>Lorem Ipsum Dolor Sit Amet Consectetur Adipi</Text>
                                <Text style={track.date}>2 Jul 2016</Text>
                            </View>
                            <View>
                                <Text style={track.label}>Adipisicing Elit Sed Do Eiusmod Tempo Do Eiusmod Tempor Lorem
                                    Ipsum Dolor Sit</Text>
                                <Text style={track.date}>2 Jul 2016</Text>
                            </View>
                            <View>
                                <Text style={track.label}>Adipisicing Elit Sed Do Eiusmod Tempor Incididunt</Text>
                                <Text style={track.date}>6 Jul 2016</Text>
                            </View>
                        </View>

                        <View style={track.row}>
                            <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite">
                                <View style={[track.circel, track.going]}></View>
                            </Animatable.View>
                            <Text style={track.title}>DISPATCHING</Text>
                        </View>
                        <View style={track.content}>
                            <View>
                                <Text style={track.label}>Adipisicing Elit Sed Do Eiusmod Tempo Do Eiusmod Tempor
                                    Lorem Ipsum Dolor Sit</Text>
                                <Text style={track.date}>2 Jul 2016</Text>
                            </View>
                            <View>
                                <Text style={track.label}>Adipisicing Elit Sed Do Eiusmod Tempor Incididunt</Text>
                                <Text style={track.date}>6 Jul 2016</Text>
                            </View>
                        </View>

                        <View style={track.row}>
                            <View style={track.circel}></View>
                            <Text style={track.title}>DELIVERED</Text>
                        </View>
                        <View style={track.content}>
                            <View>
                                <Text style={track.label}>Adipisicing Elit Sed Do Eiusmod Tempor Incididunt</Text>
                                <Text style={track.date}>6 Jul 2016</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
            ;
    }
}