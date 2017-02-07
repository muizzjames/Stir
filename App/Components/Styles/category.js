import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "image": {
        "width": width,
        "height": 200,
        "borderBottomWidth": 1,
        "borderBottomColor": "#fff"
    },
    "overlay": {
        "alignItems": "center",
        "justifyContent": "center",
        "backgroundColor": "rgba(0,0,0,0.3)"
    },
    "title": {
        "fontSize": 18,
        "textAlign": "center",
        "lineHeight": 25,
        "fontWeight": "400",
        "color": "white",
        "shadowOffset": {width: 0, height: 0},
        "shadowRadius": 1,
        "shadowColor": "black",
        "shadowOpacity": 0.8
    },
    "description": {
        "opacity": 0.9,
        "fontSize": 13,
        "textAlign": "center",
        "color": "white",
        "paddingTop": 6
    }
});