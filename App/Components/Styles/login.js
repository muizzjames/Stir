import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "panel": {
        "paddingTop": 12,
        "paddingRight": 12,
        "paddingBottom": 12,
        "paddingLeft": 12,
        "backgroundColor": "white"
    },
    "shadow2": {
        "flex": 1,
        "width": width,
        "height": height,
        "backgroundColor": "transparent",
        "marginTop": -35
    },
    "textInput": {
        "height": 40,
        "backgroundColor": "transparent",
        "color": "rgba(255,255,255,0.9)",
        "paddingLeft": 40
    },
    "container": {
        "flex": 1,
        "marginTop": 40,
        "paddingTop": 30,
        "paddingRight": 30,
        "paddingBottom": 30,
        "paddingLeft": 30,
        "backgroundColor": "white"
    },
    "loginLogo": {
        "width": 100
    },
    "background": {
        "flex": 1,
        "resizeMode": "stretch"
    },
    "logo": {
        "marginBottom": 50,
        "marginTop": -20,
        "height": 150,
        "width": 150,
        "alignSelf": "center"
    },
    "navbar": {
        "borderBottomColor": "transparent"
    },
    "registerLink": {
        "color": "rgba(255,255,255,0.9)",
        "alignSelf": "center",
        "fontSize": 15,
        "textDecorationLine": "underline"
    }
});