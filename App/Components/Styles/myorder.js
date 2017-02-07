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
        "paddingTop": 16,
        "paddingRight": 12,
        "paddingBottom": 4,
        "paddingLeft": 12,
        "marginLeft": 10,
        "marginRight": 10,
        "marginBottom": 0,
        "borderRadius": 9,

        "shadowColor": "#000",
        "shadowOffset": {width: 1, height: 1},
        "shadowOpacity": 0.1,
        "shadowRadius": 4
    },
    "row": {
        "flexDirection": "row",
        "justifyContent": "space-between"
    },
    "image": {
        "resizeMode": "contain",
        "width": width/4 + 30,
        "height": 150,
        "borderRadius": 3,
        "overflow": "hidden"
    },
    "content": {
        "width": 3 * width/4 - 70,
        "paddingLeft": 12,
        "paddingTop": 4
    },
    "buttons": {
        "width": 3 * width/4 - 90,
        "flexDirection": "row",
        "justifyContent": "flex-end",
        "position": "absolute",
        "bottom": 0
    },
    "name": {
        "fontSize": 13,
        "color": "#333",
        "fontWeight": "600",
        "paddingBottom": 12
    },
    "status": {
        "fontSize": 11,
        "color": "#333",
        "paddingBottom": 8
    },
    "line": {
        "borderTopWidth": 2,
        "borderColor": "#ddd",
        "width": width - 20,
        "position": "relative",
        "alignSelf": "center",
        "marginTop": 30
    },
    "lineFinishHalf": {
        "borderTopWidth": 2,
        "borderColor": "#1CAADE",
        "width": width/2 - 20,
        "position": "absolute",
        "left": 0,
        "marginTop": -2
    },
    "lineFinish": {
        "borderTopWidth": 2,
        "borderColor": "#1CAADE",
        "width": width - 20,
        "position": "absolute",
        "left": 0,
        "marginTop": -2
    },
    "circel": {
        "height": 16,
        "width": 16,
        "backgroundColor": "#ddd",
        "borderRadius": 8,
        "marginTop": -8
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
        "borderColor": "#ddd",
        "marginLeft": -2
    },
    "statusIcons": {
        "flexDirection": "row",
        "alignSelf": "center",
        "alignItems": "center",
        "justifyContent": "space-between",
        "width": width-60,
        "top": -11,
        "paddingTop": 6
    },
    "icon": {
        "flexDirection": "column",
        "alignItems": "center",
        "paddingTop": 3
    },
    "iconLabel": {
        "fontSize": 10,
        "fontWeight": "500",
        "color": "#666",
        "paddingTop": 8
    },
    "detailBtn": {
        "alignItems": "center",
        "justifyContent": "center",
        "backgroundColor": "#dbdbdb",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "productDelivery": {
        "fontSize": 10,
        "color": "#595959",
        "fontWeight": "500"
    },
    "refresh": {
        "height": 18,
        "width": 15
    },
    "tick": {
        "resizeMode": "contain",
        "height": 20,
        "width": 17
    },
    "trackBtn": {
        "alignItems": "center",
        "justifyContent": "center",
        "backgroundColor": "#ddd",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "alignSelf": "flex-end"
    }
});