import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "position": "absolute",
        "top": 0,
        "bottom": 0,
        "left": 0,
        "right": 0,
        "backgroundColor": "white"
    },
    "cards": {
        "position": "relative",
        "backgroundColor": "#fff",
        "width": width-20,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 36,
        "marginLeft": 10,
        "marginRight": 10,
        "borderTopColor": "#dddddd",
        "borderTopWidth": 1
    },
    "image": {
        "resizeMode": "contain",
        "width": width/4,
        "height": 120
    },
    "name": {
        "fontSize": 12,
        "fontWeight": "300",
        "color": "#333"
    },
    "namePanel": {
        "width": 3*width/4 - 104,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "buttonPanel": {
        "alignItems": "flex-end",
        "justifyContent": "center",
        "paddingBottom": 6,
        "width": 46
    },
    "buttons": {
        "borderWidth": 0.8,
        "borderColor": "#ddd",
        "borderRadius": 4,
        "overflow": "hidden",
        "width": 38
    },
    "close": {
        "left": -2,
        "top": 60,
        "position": "absolute"
    },
    "active": {
        "color": "#1CAADE"
    },
    "iconClose": {
        "color": "#999",
        "fontSize": 30
    },
    "price": {
        "fontSize": 14,
        "fontWeight": "500",
        "marginTop": 2,
        "marginRight": 2,
        "marginBottom": 2,
        "marginLeft": 2,
        "paddingTop": 10
    },
    "size": {
        "fontSize": 12,
        "fontWeight": "300",
        "marginTop": 2,
        "marginRight": 2,
        "marginBottom": 2,
        "marginLeft": 2,
        "color": "#999"
    },
    "numberItem": {
        "fontSize": 15,
        "color": "#666",
        "fontWeight": "300",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": 34,
        "height": 26,
        "paddingTop": 4,
        "textAlign": "center"
    },
    "numberText": {
        "color": "#333",
        "fontWeight": "500",
        "backgroundColor": "white",
        "paddingTop": 6,
        "paddingBottom": 6
    },
    "total": {
        "flexDirection": "row",
        "paddingTop": 10,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 20,
        "borderTopWidth": 1,
        "borderTopColor": "#ddd",
        "width": width
    },
    "totalText": {
        "color": "#999",
        "fontSize": 12,
        "paddingTop": 6,
        "justifyContent": "center",
        "width": width/2 - 10
    },
    "totalPrice": {
        "color": "#333",
        "alignItems": "center",
        "textAlign": "right",
        "paddingRight": 30,
        "fontWeight": "600",
        "width": width/2
    },
    "totalPriceAndroid": {
        "color": "#333",
        "alignItems": "center",
        "textAlign": "right",
        "paddingRight": 60,
        "fontWeight": "600",
        "width": width/2 - 30
    }
});