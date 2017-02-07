import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "layout": {
        "backgroundColor": "white",
        "flex": 1
    },
    "card": {
        "backgroundColor": "#fff",
        "width": width-20,
        "marginLeft": 10,
        "marginRight": 10,
        "marginTop": 5,
        "marginBottom": 5
    },
    "cardConfirm": {
        "width": width-20,
        "marginLeft": 10,
        "marginRight": 10,
        "borderTopWidth": 1,
        "borderTopColor": "#ddd"
    },
    "statusContainer": {
        "width": width-80,
        "alignSelf": "center",
        "flexDirection": "row",
        "height": 120,
        "position": "relative"
    },
    "status": {
        "borderTopWidth": 2,
        "borderColor": "#eee",
        "width": width-80,
        "position": "relative",
        "alignSelf": "center",
        "marginTop": 20,
        "marginBottom": 30,
        "flexDirection": "row",
        "justifyContent": "space-between"
    },
    "statusHalf": {
        "width": (width-80)/2 - 2,
        "borderTopWidth": 2,
        "borderColor": "#1CAADE",
        "position": "absolute",
        "top": 0,
        "left": 0
    },
    "statusFull": {
        "width": (width-100),
        "borderTopWidth": 2,
        "borderColor": "#1CAADE",
        "position": "absolute",
        "top": 28,
        "left": 50
    },
    "statusComplete": {
        "left": 0
    },
    "tabName": {
        "position": "absolute",
        "left": -8,
        "fontSize": 10,
        "width": 80,
        "top": 16,
        "color": "#999"
    },
    "tabNameActive": {
        "color": "#1CAADE",
        "fontWeight": "600",
        "fontSize": 11
    },
    "tabNameFinish": {
        "color": "#333"
    },
    "statusIcon": {
        "height": 20,
        "width": 20,
        "paddingTop": 6,
        "paddingRight": 6,
        "paddingBottom": 6,
        "paddingLeft": 6,
        "backgroundColor": "#eee",
        "borderRadius": 20,
        "marginTop": -14,
        "borderWidth": 6,
        "borderColor": "transparent"
    },
    "statusActive": {
        "backgroundColor": "#1CAADE",
        "borderWidth": 6,
        "borderColor": "#eee",
        "borderRadius": 30
    },
    "statusFinish": {
        "backgroundColor": "#1CAADE",
        "borderWidth": 6,
        "borderColor": "#1CAADE",
        "borderRadius": 20
    },
    "input": {
        "height": 40,
        "borderColor": "#ddd",
        "borderWidth": 1,
        "fontSize": 14,
        "paddingTop": 4,
        "paddingRight": 4,
        "paddingBottom": 4,
        "paddingLeft": 8,
        "borderRadius": 4,
        "marginLeft": 20,
        "marginRight": 20,
        "marginBottom": 8,
        "color": "#333"
    },
    "inputContainer": {
        "flex": 1,
        "flexDirection": "row",
        "justifyContent": "space-between",
        "width": width - 60,
        "marginLeft": 20,
        "marginRight": 20
    },
    "inputHalf": {
        "width": width/2 - 40,
        "alignSelf": "flex-start",
        "height": 40,
        "borderColor": "#ddd",
        "borderWidth": 1,
        "fontSize": 14,
        "paddingTop": 4,
        "paddingRight": 4,
        "paddingBottom": 4,
        "paddingLeft": 8,
        "borderRadius": 4,
        "marginBottom": 8,
        "color": "#333"
    },
    "bankImage": {
        "resizeMode": "contain",
        "width": 100,
        "height": 60
    },
    "cardContainer": {
        "flexDirection": "row",
        "alignItems": "center",
        "justifyContent": "space-between",
        "marginTop": 0,
        "marginBottom": 12,
        "width": width,
        "paddingLeft": 30,
        "paddingRight": 30
    },
    "successView": {
        "flex": 1,
        "justifyContent": "center",
        "paddingTop": 30,
        "paddingRight": 30,
        "paddingBottom": 30,
        "paddingLeft": 30
    },
    "body": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "fontSize": 13,
        "lineHeight": 26,
        "textAlign": "center",
        "color": "#666"
    },
    "checkIcon": {
        "textAlign": "center",
        "fontSize": 200,
        "color": "#1CAADE"
    },
    "h1": {
        "color": "#222",
        "fontSize": 22,
        "paddingBottom": 20,
        "paddingTop": 20,
        "textAlign": "center"
    }
});