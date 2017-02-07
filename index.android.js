/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { AppRegistry,  StatusBar} from 'react-native';

StatusBar.setBarStyle('light-content');
import RootRouter from './App/Components/RootRouter';

import OneSignal from 'react-native-onesignal';
OneSignal.configure({

    onIdsAvailable: function(device) {
        console.log('UserId = ', device.userId);
        console.log('PushToken = ', device.pushToken);
    },
  	onNotificationReceived: function(notification) {
    	console.log("notification received: ", notification);
 	},
 	onNotificationOpened: function(openResult) {

	    console.log('MESSAGE: ', openResult.notification.payload.body);
	    console.log('DATA: ', openResult.notification.payload.additionalData);
	    console.log('ISACTIVE: ', openResult.notification.isAppInFocus);
	    console.log('openResult: ', openResult);

	    // Do whatever you want with the objects here
	    // _navigator.to('main.post', data.title, { // If applicable
	    //  article: {
	    //    title: openResult.notification.payload.body,
	    //    link: openResult.notification.payload.launchURL,
	    //    action: data.openResult.notification.action.actionSelected
	    //  }
	    // });
	}
});

import codePush from 'react-native-code-push';
// let codePushOptions = { checkFrequency: codePush.checkFrequency.ON_APP_RESUME };

class Stir extends Component {

	componentDidtMount() {
    	CodePush.sync({ updateDialog: true, installMode: CodePush.InstallMode.IMMEDIATE });
    }
    
    render() {
        return (
            <RootRouter />
        );
    }
}

Stir = codePush(Stir);

AppRegistry.registerComponent('Stir', () => Stir);
