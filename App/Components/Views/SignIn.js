'use strict';

import React, {Component} from "react";
import {
    TextInput,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    Platform,
    Dimensions,
    DeviceEventEmitter
} from "react-native";
import {Actions} from "react-native-router-flux";
import login from "./../Styles/login";
import ButtonRoundBlue from "./../Controls/ButtonRoundBlue";
import IconInput from './../Controls/IconInput';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Username',
            password: '',
            visibleHeight: Dimensions.get('window').height,
            scroll: false
        };
    }

    render() {
        return (
            <View style={login.container} >
                <View style={{marginTop:-15}}>
                    <IconInput placeholder="Username" image={require("../../images/icon-user.png")} />

                    <IconInput placeholder="Password" image={require("../../images/icon-password.png")}/>
                </View>

                <View style={{flexDirection:'row',alignSelf:'flex-end',marginTop:10,marginBottom:10}}>
                    <Text style={{color:'#aaa', marginRight:5, fontSize:12}}>
                        Forgot Password?
                    </Text>
                </View>

                <ButtonRoundBlue text="Enter" onPress={()=>Actions.home({data:this.state.value })}/>
            </View>
        );
    }
}
