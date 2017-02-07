import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "container": {
        "flex": 1
    },
    "box": {
        "flex": 1,
        "marginBottom": 55,
        "backgroundColor": "transparent"
    },
    "color": {
        "position": "absolute",
        "top": 0,
        "bottom": 0,
        "left": 0,
        "right": 0,
        "backgroundColor": "#fff"
    },
    "mail": {
        "borderBottomColor": "white",
        "borderTopWidth": 0,
        "borderLeftWidth": 0,
        "borderRightWidth": 0,
        "borderBottomWidth": 0.3,
        "position": "relative",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "flexDirection": "row",
        "justifyContent": "flex-start"
    },
    "list": {
        "flex": 1,
        "backgroundColor": "#F2F2F2",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "hlist": {
        "flex": 1,
        "backgroundColor": "white",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "senderName": {
        "color": "rgba(255,255,255,0.6)",
        "fontSize": 18
    },
    "body": {
        "marginTop": 3,
        "color": "#fff",
        "lineHeight": 20
    },
    "details": {
        "marginLeft": 15
    },
    "name": {
        "textAlign": "center",
        "fontSize": 13,
        "width": (width/3)-15,
        "paddingLeft": 6,
        "paddingTop": 6
    },
    "price": {
        "color": "#999",
        "fontSize": 12,
        "textAlign": "center",
        "paddingTop": 6
    },
    "toolbar": {
        "height": 60,
        "backgroundColor": "#fff",
        "justifyContent": "space-between",
        "alignItems": "center",
        "flexDirection": "row",
        "paddingLeft": 15,
        "paddingTop": 13,
        "paddingRight": 15,
        "shadowColor": "#000",
        "shadowOffset": {width: 0, height: 2},
        "shadowOpacity": 0.3,
        "shadowRadius": 1.5
    },
    "title": {
        "color": "#333",
        "fontSize": 13,
        "textAlign": "center",
        "fontWeight": "600",
        "paddingTop": 14,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "subtitle": {
        "color": "#fff",
        "fontSize": 16,
        "height": 0
    },
    "panel": {
        "alignItems": "center",
        "justifyContent": "center",
        "marginTop": 5,
        "marginRight": 5,
        "marginBottom": 5,
        "marginLeft": 5,
        "position": "relative",
        "width": (width/3)-10,
        "height": (width/3)
    },
    "imagePanel": {
        "position": "absolute",
        "width": (width/3)-10,
        "height": (width/3),
        "top": 0
    },
    "scrollView": {
        "height": 220,
        "borderBottomColor": "#eee",
        "borderBottomWidth": 1
    },
    "block": {
        "alignItems": "center",
        "justifyContent": "center",
        "marginTop": 5,
        "marginRight": 5,
        "marginBottom": 5,
        "marginLeft": 5,
        "position": "relative",
        "width": (width/2)-20,
        "height": (width/3)
    },
    "imageBlock": {
        "position": "absolute",
        "width": (width/2)-20,
        "height": (width/3),
        "top": 0
    },
    "image": {
        "width": width,
        "height": width / 2
    },
    "imageFull": {
        "width": width - 30,
        "height": width / 4,
        "position": "absolute",
        "top": 0
    },
    "blockFull": {
        "alignItems": "center",
        "justifyContent": "center",
        "marginTop": 5,
        "marginRight": 5,
        "marginBottom": 5,
        "marginLeft": 5,
        "position": "relative",
        "width": width-30,
        "height": width/4
    }
});
