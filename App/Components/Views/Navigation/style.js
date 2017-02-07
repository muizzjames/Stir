import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "sideMenu": {
        "backgroundColor": "#fff",
        "flex": 1,
        "height": height,
        "alignItems": "center",
        "justifyContent": "center"
    },
    "noBorder": {
        "borderTopWidth": 0
    },
    "menuBadge": {
        "borderRadius": 9,
        "position": "absolute",
        "right": 0,
        "top": 17,
        "fontSize": 12,
        "color": "white"
    },
    "menuRow": {
        "flexDirection": "row",
        "alignItems": "center",
        "justifyContent": "center",
        "position": "relative",
        "paddingTop": 7,
        "paddingBottom": 7,
        "marginBottom": 20,
        "height": 48,
        "borderTopWidth": 1,
        "borderTopColor": "rgba(255,255,255,0.1)"
    },
    "menuLink": {
        "fontSize": 22,
        "color": "#111",
        "fontWeight": "300"
    },
    "fullname": {
        "marginTop": 8,
        "marginBottom": 6,
        "fontSize": 14,
        "color": "#151F41",
        "fontWeight": "600"
    },
    "email": {
        "color": "#999",
        "fontSize": 12
    },
    "profile": {
        "alignItems": "center",
        "width": width/2,
        "marginTop": -(vh * 10),
        "marginBottom": vh * 5
    },
    "avatar": {
        "width": width/2,
        "height": vh * 10,
        "resizeMode": "contain",
        "marginLeft": 10
    },
    "menuSignOut": {
        "borderTopWidth": 0,
        "position": "absolute",
        "bottom": vw * 10,
        "width": vw * 80
    },
    "logoutLink": {
        "fontSize": 15,
        "color": "#999"
    },
    "logo": {
        "width": width/2-20,
        "height": vh * 10,
        "resizeMode": "contain",
        "marginTop": -40,
        "marginBottom": 40,
        "marginLeft": 10
    },
    "menuOverlay": {
        "backgroundColor": "rgba(0,0,0,0.7)"
    },
    "menuColor": {
        "backgroundColor": "#34BC99"
    },
    "menuColorWide": {
        "backgroundColor": "#2d2f3b"
    },
    "sideMenuLeft": {
        "backgroundColor": "#fff",
        "flex": 1,
        "height": height,
        "alignItems": "flex-start",
        "justifyContent": "center"
    },
    "menuRowLeft": {
        "flexDirection": "row",
        "alignItems": "flex-start",
        "justifyContent": "flex-start",
        "position": "relative",
        "marginBottom": 7,
        "marginTop": 7,
        "marginLeft": 16,
        "height": 48
    },
    "menuRowWide": {
        "marginLeft": vw * 10
    },
    "menuLinkLeft": {
        "fontSize": 15,
        "color": "#f9f9f9",
        "fontWeight": "500",
        "marginTop": 24
    },
    "logoutLinkLeft": {
        "fontSize": 15,
        "color": "#f9f9f9"
    },
    "icon": {
        "fontSize": 24,
        "color": "white",
        "marginRight": 20,
        "marginTop": 20
    },
    "iconWide": {
        "marginRight": 40,
        "fontSize": 22,
        "marginTop": 21
    },
    "profileLeft": {
        "alignItems": "center",
        "width": vw * 40,
        "marginTop": -(vh * 30),
        "marginBottom": vh * 5
    },
    "avatarLeft": {
        "width": vw *50,
        "height": vh * 6,
        "resizeMode": "contain",
        "marginBottom": 4
    },
    "address": {
        "fontSize": 11
    },
    "iconSmall": {
        "fontSize": 16,
        "color": "white"
    },
    "badge": {
        "position": "absolute",
        "alignItems": "flex-end",
        "width": vw * 10,
        "right": -35,
        "bottom": 5
    },
    "badgeText": {
        "color": "#fff",
        "backgroundColor": "transparent",
        "fontSize": 11,
        "fontWeight": "600",
        "marginTop": 3,
        "marginRight": 3,
        "marginBottom": 3,
        "marginLeft": 5
    },
    "badgeIcon": {
        "width": vw * 5,
        "height": vw * 5,
        "resizeMode": "cover"
    },
    "menuBg": {
        "width": width,
        "height": vh * 25,
        "position": "absolute",
        "top": 0,
        "backgroundColor": "rgba(255,255,255,0.3)"
    },
    "profileCenter": {
        "alignItems": "center",
        "width": vw * 80,
        "marginTop": -(vh * 30),
        "marginBottom": vh * 5
    }
});