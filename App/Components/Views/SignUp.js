'use strict';

import React, {Component} from "react";
import {
    TextInput,
    Text,
    View,
    Image,
    StatusBarIOS,
    ScrollView,
    TouchableOpacity,
    Platform,
    Dimensions,
    DeviceEventEmitter
} from "react-native";
import login from "./../Styles/login";
import ButtonRoundBlue from "./../Controls/ButtonRoundBlue";
import {Actions} from "react-native-router-flux";
import IconInput from "./../Controls/IconInput";

export default class SignUp extends Component {
    render() {
        return (
            <ScrollView>
                <View style={login.container}>
                    <View style={{marginTop:-20}}>
                        <IconInput placeholder="Name" image={require("../../images/icon-password.png")}/>
                        <IconInput placeholder="Email" image={require("../../images/icon-email.png")}/>
                        <IconInput placeholder="Phone" image={require("../../images/icon-phone.png")}/>
                        <IconInput placeholder="Password" image={require("../../images/icon-password.png")}/>
                    </View>
                    <ButtonRoundBlue
                        onPress={()=>Actions.home}
                        text="Registration"/>

                    <Text style={{color:'white',opacity:0.7,marginRight:5,fontSize:15}}>
                        already have an account
                    </Text>
                    <TouchableOpacity onPress={Actions.login} style={{alignSelf: 'flex-end', marginRight: 15}}>
                        <Text style={login.registerLink}>
                            Sign in now
                        </Text>
                    </TouchableOpacity>

                    <Text style={{color: '#aaa', textAlign: 'center', padding: 12}}>
                        By clicking "Registration" I agree to BeoUI <Text style={{color: '#3071D0'}}>Terms of Service</Text>
                    </Text>

                </View>
            </ScrollView>
        );
    }
}
