import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "button": {
        "backgroundColor": "#fff",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "borderColor": "transparent",
        "borderWidth": 2,
        "alignSelf": "stretch",
        "borderRadius": 23,
        "height": 45,
        "marginTop": 18,
        "marginLeft": 10,
        "marginRight": 10
    },
    "small": {
        "backgroundColor": "#fff",
        "paddingTop": 6,
        "paddingRight": 12,
        "paddingBottom": 4,
        "paddingLeft": 12,
        "borderColor": "#ddd",
        "borderWidth": 1,
        "alignSelf": "center",
        "textAlign": "center",
        "borderRadius": 3,
        "marginRight": 8,
        "fontSize": 11
    },
    "link": {
        "backgroundColor": "#fff",
        "paddingTop": 6,
        "paddingRight": 12,
        "paddingBottom": 4,
        "paddingLeft": 12,
        "alignSelf": "center",
        "textAlign": "center",
        "borderRadius": 3,
        "marginRight": 8,
        "fontSize": 11,
        "textDecorationLine": "underline"
    },
    "buttonRound": {
        "backgroundColor": "#fff",
        "paddingTop": 12,
        "paddingRight": 12,
        "paddingBottom": 12,
        "paddingLeft": 12,
        "borderColor": "#ddd",
        "borderWidth": 1,
        "alignSelf": "center",
        "borderRadius": 20,
        "marginTop": 12,
        "marginLeft": 10,
        "marginRight": 10,
        "width": width-30
    },
    "buttonRoundText": {
        "color": "#333",
        "alignSelf": "center",
        "fontSize": 14
    },
    "buttonRoundBlue": {
        "backgroundColor": "rgba(60,135,217,0.8)",
        "paddingTop": 12,
        "paddingRight": 12,
        "paddingBottom": 12,
        "paddingLeft": 12,
        "borderColor": "transparent",
        "alignSelf": "center",
        "borderRadius": 20,
        "marginTop": 12,
        "marginLeft": 10,
        "marginRight": 10,
        "width": width-30
    },
    "buttonRectangularText": {
        "color": "#fff",
        "alignSelf": "center",
        "fontSize": 14
    },
    "buttonColor": {
        "backgroundColor": "#ccc",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "borderColor": "transparent",
        "borderWidth": 2,
        "alignSelf": "stretch",
        "borderRadius": 23,
        "height": 45,
        "marginLeft": 10,
        "marginRight": 10,
        "marginTop": 10
    },
    "buttonRectangularColor": {
        "backgroundColor": "#ccc",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "borderColor": "transparent",
        "borderWidth": 2,
        "alignSelf": "stretch",
        "borderRadius": 23,
        "height": 45,
        "marginLeft": 10,
        "marginRight": 10,
        "marginTop": 10
    },
    "buttonText": {
        "color": "#ccc",
        "alignSelf": "center",
        "fontSize": 18
    },
    "buttonColorText": {
        "color": "#fff",
        "alignSelf": "center",
        "fontSize": 17
    },
    "buttonRectangularColorText": {
        "color": "#fff",
        "alignSelf": "center",
        "fontSize": 17
    }
});