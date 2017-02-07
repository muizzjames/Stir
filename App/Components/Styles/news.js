import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "color": {
        "position": "absolute",
        "top": 0,
        "bottom": 0,
        "left": 0,
        "right": 0,
        "backgroundColor": "#fff"
    },
    "card": {
        "width": width,
        "flexDirection": "row"
    },
    "box": {
        "width": vw * 40,
        "height": 100,
        "backgroundColor": "#ccc",
        "marginLeft": 20,
        "marginTop": 20,
        "marginBottom": 20
    },
    "body": {
        "width": width,
        "flex": 1
    },
    "image": {
        "width": vw * 30,
        "height": 70,
        "resizeMode": "cover",
        "marginLeft": 20,
        "marginTop": 30,
        "marginBottom": 30,
        "borderRadius": 3
    },
    "content": {
        "width": vw * 60,
        "marginLeft": 20,
        "marginTop": 30,
        "marginBottom": 30
    },
    "greyRow": {
        "backgroundColor": "#eee"
    },
    "menuView": {
        "backgroundColor": "rgba(255,255,255,0.8)",
        "height": 40
    },
    "menuItemView": {
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10,
        "height": 20
    },
    "menuItem": {
        "marginTop": 2,
        "marginRight": 16,
        "marginBottom": 2,
        "marginLeft": 16,
        "fontSize": 11,
        "fontWeight": "500"
    },
    "menuItemActive": {
        "backgroundColor": "#4382D0",
        "borderRadius": 16
    },
    "menuActiveText": {
        "color": "white"
    },
    "bannerImage": {
        "flex": 1,
        "width": width,
        "height": width / 2 + 20
    },
    "bannerText": {
        "position": "absolute",
        "bottom": 20,
        "backgroundColor": "rgba(0,0,0,0.3)",
        "width": vw * 60
    },
    "bannerTitle": {
        "marginTop": 12,
        "marginRight": 12,
        "marginBottom": 2,
        "marginLeft": 12,
        "color": "white",
        "fontSize": 15
    },
    "bannerDate": {
        "color": "rgba(255,255,255,0.7)",
        "fontSize": 9,
        "fontWeight": "500",
        "marginLeft": 12,
        "marginBottom": 12
    },
    "time": {
        "color": "#787878",
        "fontSize": 11
    }
});