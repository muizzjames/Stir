import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "backgroundColor": "#F2F2F2",
        "flex": 1
    },
    "card": {
        "flex": 1,
        "backgroundColor": "#fff",
        "width": width - 20,
        "marginTop": 18,
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "marginLeft": 10,
        "marginRight": 10,
        "marginBottom": 18,
        "borderRadius": 9,
        "shadowColor": "#000",
        "shadowOffset": {width: 1, height: 1},
        "shadowOpacity": 0.1,
        "shadowRadius": 4
    },
    "line": {
        "borderLeftWidth": 2,
        "borderLeftColor": "#ddd",
        "position": "absolute",
        "height": 420,
        "top": 40,
        "left": 13
    },
    "lineFinish": {
        "borderLeftWidth": 2,
        "borderLeftColor": "#1CAADE",
        "position": "absolute",
        "height": 200,
        "top": 40,
        "left": 13
    },
    "content": {
        "marginLeft": 6,
        "paddingLeft": 30
    },
    "label": {
        "fontSize": 12,
        "paddingTop": 10,
        "paddingBottom": 2
    },
    "date": {
        "fontSize": 11,
        "color": "#aaa"
    },
    "row": {
        "flexDirection": "row",
        "alignItems": "center",
        "marginTop": 30,
        "paddingLeft": 6
    },
    "circel": {
        "height": 16,
        "width": 16,
        "backgroundColor": "#eee",
        "borderRadius": 8
    },
    "finish": {
        "backgroundColor": "#1CAADE"
    },
    "going": {
        "height": 20,
        "width": 20,
        "borderRadius": 10,
        "backgroundColor": "#1CAADE",
        "borderWidth": 6,
        "borderColor": "#eee",
        "marginLeft": -2
    },
    "title": {
        "fontSize": 13,
        "fontWeight": "400",
        "color": "#666",
        "marginLeft": 14,
        "marginRight": 10
    },
    "titleFinish": {
        "color": "#1CAADE"
    }
});