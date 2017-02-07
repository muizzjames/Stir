import React, {Component} from "react";
import {Text, View, Platform, Dimensions, Image, TouchableOpacity, TextInput} from "react-native";
import AppIntro from "react-native-app-intro";
import intro from "./../Styles/intro";
import {Actions} from "react-native-router-flux";
import Icon from "react-native-vector-icons/Ionicons";





const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100;



export default class Intro extends Component {

   


    render() {
        return (
            <View>

                    <Text>
                      <Text>Initial position: </Text>
                      {this.state.initialPosition}
                    </Text>
                    <Text>
                      <Text>Current position: </Text>
                      {this.state.lastPosition}
                    </Text>
      
                <AppIntro
                    skipBtnLabel=""
                    doneBtnLabel=""
                    activeDotColor={"rgba(255,255,255,0.5)"}
                    dotColor={"rgba(255,255,255,0.1)"}
                    rightTextColor={"transparent"}
                    onDoneBtnClick={Actions.login}
                    onSkipBtnClick={Actions.home}>

                    <View style={intro.slide}>

                        <View level={-15} style={intro.imageView}>
                            <Image style={intro.image} source={require('../../images/intro1.png')}></Image>
                        </View>

                        <View level={1} style={intro.boxView}>
                            <Image style={intro.box} source={require('../../images/welcome1.png')}/>
                        </View>
                    </View>

                    <View style={intro.slide}>
                        <View level={10} style={intro.imageView}>
                            <Image style={intro.image} source={require('../../images/phone.png')}></Image>
                        </View>

                        <View level={-20} style={{position: 'absolute', top: vh * 10, left: -vw * 3 }}>
                            <Image style={{ resizeMode: 'contain', width: vw * 80, height: vh * 50 }}
                                   source={require('../../images/3_3.png')}/>
                        </View>

                        <View level={-10} style={{ position: 'absolute', top: vh * 13, left: vw * 14}}>
                            <Image style={{  resizeMode: 'contain', width: vw * 40, height: vh * 40 }}
                                   source={require('../../images/3_1.png')}/>
                        </View>

                        <View level={25}
                              style={{width: width, height: height, position: 'absolute', top: vh * 20, left: vw * 22 }}>
                            <Image style={{ resizeMode: 'contain', width: vw * 30, height: vh * 30 }}
                                   source={require('../../images/3_2.png')}/>
                        </View>

                        <View level={1} style={intro.boxView}>
                            <Image style={intro.box} source={require('../../images/welcome2.png')}/>
                        </View>
                    </View>

                    <View style={intro.slide}>
                        <View level={-15} style={intro.imageView}>
                            <Image style={intro.image} source={require('../../images/intro.png')}></Image>
                        </View>

                        <View level={20} style={intro.icon}>
                            <Icon name={'logo-android'} style={intro.iconAndroid}/>
                        </View>

                        <View level={15} style={intro.icon}>
                            <Icon name={'logo-apple'} style={intro.iconApple}/>
                        </View>

                        <View level={1} style={intro.boxView}>
                            <Image style={intro.box} source={require('../../images/welcome3.png')}/>
                        </View>
                    </View>
                </AppIntro>


                <TouchableOpacity onPress={Actions.login}><Text style={intro.signupText}>Sign
                    Up</Text></TouchableOpacity>
            </View>
        );
    }
}
