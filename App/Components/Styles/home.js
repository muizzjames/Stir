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
    "menu": {
        "flex": 1,
        "backgroundColor": "#fff"
    },
    "color": {
        "position": "absolute",
        "top": 0,
        "bottom": 0,
        "left": 0,
        "right": 0,
        "backgroundColor": "#fff"
    },
    "listContainer": {
        "borderBottomColor": "white",
        "borderTopWidth": 0,
        "borderLeftWidth": 0,
        "borderRightWidth": 0,
        "borderBottomWidth": 0.6,
        "marginLeft": 22,
        "marginRight": 22,
        "flexDirection": "row"
    },
    "list": {
        "color": "#fff",
        "fontSize": 18,
        "marginBottom": 20,
        "marginTop": 20,
        "flex": 1
    },
    "time": {
        "alignItems": "flex-end",
        "justifyContent": "flex-end",
        "marginTop": 20,
        "color": "rgba(255,255,255,0.7)"
    },
    "title": {
        "alignSelf": "center"
    },
    "header": {
        "alignSelf": "center",
        "fontSize": 20,
        "color": "#fff",
        "top": -2
    },
    "day": {
        "alignSelf": "center",
        "fontSize": 26,
        "letterSpacing": 1,
        "color": "rgba(255,255,255,0.7)"
    },
    "subTitle": {
        "color": "rgba(255,255,255,0.7)",
        "fontSize": 10,
        "alignSelf": "center"
    },
    "subtitle": {
        "color": "#fff",
        "fontSize": 16,
        "alignSelf": "center"
    },
    "search": {
        "paddingLeft": 10,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "borderRadius": 9,
        "overflow": "hidden",
        "height": 0
    },
    "searchIcon": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "backgroundColor": "#eee",
        "paddingTop": 9,
        "paddingBottom": 6,
        "paddingLeft": 12,
        "paddingRight": 6,
        "borderTopLeftRadius": 10,
        "borderBottomLeftRadius": 10,
        "borderColor": "transparent",
        "borderWidth": 1,
        "color": "#C8C8C8",
        "fontSize": 26
    },
    "searchBar": {
        "height": 40,
        "borderColor": "transparent",
        "borderWidth": 1,
        "backgroundColor": "#eee",
        "fontSize": 15,
        "marginLeft": 36
    },
    "textInputAndroid": {
        "height": 38,
        "borderColor": "transparent",
        "borderWidth": 1,
        "backgroundColor": "#fff",
        "fontSize": 15,
        "paddingLeft": 34
    },
    "searchIconAndroid": {
        "position": "absolute",
        "top": 7,
        "left": 10,
        "backgroundColor": "transparent"
    },
    "logo": {
        "height": 20,
        "width": 94,
        "marginLeft": 20
    },
    "homeIcon1": {
        "height": 19,
        "width": 21,
        "marginLeft": 10,
        "marginRight": 10
    },
    "homeIcon2": {
        "height": 19,
        "width": 5,
        "marginLeft": 10,
        "marginRight": 0
    },
    "picker": {
        "position": "absolute",
        "right": 10,
        "color": "transparent",
        "backgroundColor": "transparent",
        "top": 20,
        "width": 20
    }
});