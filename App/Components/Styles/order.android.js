import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "backgroundColor": "#F2F2F2",
        "paddingBottom": 40
    },
    "card": {
        "width": width,
        "borderBottomWidth": 1,
        "borderBottomColor": "#eee",
        "marginTop": 18,
        "backgroundColor": "white",
        "position": "relative"
    },
    "row": {
        "flex": 1,
        "flexDirection": "row",
        "justifyContent": "space-between",
        "alignItems": "center",
        "width": width-8,
        "marginTop": 4,
        "marginRight": 4,
        "marginBottom": 4,
        "marginLeft": 4,
        "paddingBottom": 4,
        "position": "relative"
    },
    "linebreak": {
        "borderTopWidth": 1,
        "borderTopColor": "#eee",
        "marginTop": 8
    },
    "header": {
        "fontWeight": "500",
        "fontSize": 14,
        "color": "#333"
    },
    "hide": {
        "color": "white"
    },
    "link": {
        "width": width/4 - 30,
        "textAlign": "right",
        "marginRight": 30,
        "fontSize": 12,
        "color": "#bbb"
    },
    "label": {
        "width": 3*width/4 - 40,
        "marginLeft": 30,
        "marginTop": 12,
        "paddingBottom": 12,
        "fontSize": 12,
        "color": "#666",
        "position": "relative"
    },
    "total": {
        "fontSize": 14,
        "color": "#000"
    },
    "labelView": {
        "width": 3*width/4 - 10,
        "paddingLeft": 30,
        "paddingTop": 12,
        "paddingBottom": 12
    },
    "subLabel": {
        "fontSize": 12,
        "color": "#333"
    },
    "fullWidth": {
        "width": width-40
    },
    "description": {
        "fontSize": 11,
        "color": "#aaa",
        "width": width,
        "marginTop": 4
    },
    "value": {
        "width": width/4 - 30 ,
        "textAlign": "right",
        "marginRight": 30,
        "fontSize": 12,
        "fontWeight": "500"
    }
});