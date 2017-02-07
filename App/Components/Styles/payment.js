import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "card": {
        "backgroundColor": "#fff",
        "width": width-20,
        "marginLeft": 10,
        "marginRight": 10,
        "marginTop": 5,
        "marginBottom": 5
    }
});