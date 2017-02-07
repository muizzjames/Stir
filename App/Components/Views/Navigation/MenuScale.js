'use strict';
import React, {Component} from "react";
import AppEventEmitter from "./../../../Services/AppEventEmitter";
import {Router} from "react-native-router-flux";
import Drawer from "./../../Custom/react-native-drawer";
import SideMenu from "./SideMenu";

export default class MenuScale extends Component {
    componentDidMount() {
        AppEventEmitter.addListener('hamburger.click', this.openSideMenu.bind(this));
    }

    closeSideMenu() {
        if (typeof this.refs.drawer != 'undefined') {
          this.refs.drawer.close();
        }
    }

    openSideMenu() {
        this.refs.drawer.open();
    }

    render() {
        return (
            <Drawer
                ref="drawer"
                type="static"
                isScale={true}
                backgroundColor="#FFFFFF"
                tweenHandler={Drawer.tweenPresets.parallax}
                tapToClose={true}
                panCloseMask={0.4}
                openDrawerOffset={0.4}
                content={<SideMenu />}>

                <Router hideNavBar={true} dispatch={this.closeSideMenu.bind(this)} scenes={this.props.scenes}/>
            </Drawer>
        );
    }

}
