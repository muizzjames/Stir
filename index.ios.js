/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

'use strict';
import React, { Component } from 'react';
import { AppRegistry,  StatusBar} from 'react-native';

import OneSignal from 'react-native-onesignal';
import CodePush from 'react-native-code-push';

OneSignal.configure({
	onIdsAvailable: function (device) {
		console.log('UserId = ', device.userId);
		console.log('PushToken = ', device.pushToken);
	},
	onNotificationReceived: function (notification) {
		console.log('NOTIFICATION RECEIVED: ', notification);
	},
	onNotificationOpened: function (openResult) {	
		console.log('NOTIFICATION OPENED: : ', openResult);

		pendingNotifications.push(notification);

		handleNotificationAction(openResult);
	}
});

StatusBar.setBarStyle('light-content');

import RootRouter from './App/Components/RootRouter';


class Stir extends Component {
    
    // componentDidtMount() {
    // 	CodePush.sync({ updateDialog: true, installMode: CodePush.InstallMode.IMMEDIATE });
    // }

    render() {
        return (
            <RootRouter />
        );
    }
}

// Stir = codePush({updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE})(Stir);

AppRegistry.registerComponent('Stir', () => Stir);
