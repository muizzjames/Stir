import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "backgroundColor": "#F2F2F2",
        "paddingBottom": 50
    },
    "card": {
        "borderBottomWidth": 1,
        "borderBottomColor": "#eee",
        "marginTop": 18,
        "backgroundColor": "white",
        "position": "relative",
        "shadowColor": "#333",
        "shadowOffset": {width: 1, height: 1},
        "shadowOpacity": 0.1,
        "shadowRadius": 4,
        "marginLeft": 10,
        "marginRight": 10,
        "width": width-20,
        "borderRadius": 9
    },
    "row": {
        "flex": 1,
        "flexDirection": "row",
        "justifyContent": "space-between",
        "alignItems": "center",
        "width": width-20,
        "paddingTop": 2,
        "paddingRight": 2,
        "paddingBottom": 4,
        "paddingLeft": 2,
        "position": "relative",
        "overflow": "hidden"
    },
    "lastRow": {
        "marginBottom": 20
    },
    "description": {
        "fontSize": 11,
        "color": "#aaa",
        "marginTop": 4
    },
    "label": {
        "width": 3*width/4 - 40,
        "marginLeft": 30,
        "marginTop": 12,
        "paddingBottom": 12,
        "fontSize": 12,
        "color": "#666",
        "backgroundColor": "transparent"
    },
    "subLabel": {
        "fontSize": 12,
        "color": "#333"
    },
    "labelView": {
        "width": 3*width/4 - 10,
        "paddingLeft": 30,
        "paddingTop": 12,
        "paddingBottom": 12
    },
    "header": {
        "fontWeight": "500",
        "fontSize": 14,
        "color": "#333",
        "paddingBottom": 0
    },
    "value": {
        "width": width/4 - 40,
        "textAlign": "right",
        "marginRight": 40,
        "fontSize": 12,
        "fontWeight": "500"
    },
    "linebreak": {
        "borderTopWidth": 1,
        "borderTopColor": "#eee",
        "marginTop": 8
    },
    "total": {
        "fontSize": 14,
        "color": "#000"
    },
    "fullWidth": {
        "width": width-60,
        "paddingBottom": 30,
        "lineHeight": 20
    }
});