'use strict';

import {Dimensions} from "react-native";

const Constants = {
    AppName: "Stir",
    URL: {
        root: 'http://beostore.io',
        logo: 'http://beostore.io/wp-content/uploads/2015/05/logoback.png'
    },
    foursquare : {
      clientID: 'BQOOYFADNSOBEVA5BOWFPZS05KUYTLRMA2OUWA33JUIDNC45',
      clientSecret: 'O03VZFY2DVAL2KDWICVQ0SHTXZUJ0ZZTHRGVT1DFB0LIR2XK',
      style: 'foursquare', // default: 'foursquare'
      version: '20140806' //  default: '20140806'
    },
    Post: {
        layout_one: 1,
        layout_two: 2,
        layout_three: 3
    },
    colors: [
        'rgba(58, 75, 133, 0.6)',
        'rgba(188, 59, 36, 0.6)',
        'rgba(57, 174, 84, 0.6)',
        'rgba(188, 59, 36, 0.6)',
        'rgba(141, 114, 91, 0.6)',
        'rgba(128, 140, 141, 0.6)'
    ],
    Keys: {
        ConsumeKey: 'ck_223378193c406cd3fa5124fb4532a0cc7c22bf66',
        ConsumerSecret: 'cs_0eaf41aedaf0bd40d074cf551cd53842e2f83853'
    },
    Menu: {
        Scale: 0,
        Flat: 1,
        FullSize: 2,
        MenuRightBlack: 3
    },
    Window: {
        get width() {
            return Dimensions.get('window').width;
        },
        get height() {
            return Dimensions.get('window').height;
        }
    }
}

module.exports = Constants;
