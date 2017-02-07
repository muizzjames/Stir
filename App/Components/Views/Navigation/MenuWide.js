'use strict';
import React, {Component} from "react";
import AppEventEmitter from "./../../../Services/AppEventEmitter";
import {Router} from "react-native-router-flux";
import Drawer from "./../../Custom/react-native-drawer";
import SideMenu from "./SideMenuBackGround";
import css from "./style";

export default class MenuWide extends Component {
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
                tweenHandler={Drawer.tweenPresets.parallax}
                tapToClose={true}
                backgroundColor="rgba(45, 47, 59, 1)"
                panCloseMask={0.2}
                panThreshold={0.2}
                openDrawerOffset={0.2}

                content={<SideMenu
                textColor={{color: '#fff', backgroundColor: 'transparent'}}
                rowStyle={css.menuRowWide}
                iconStyle={css.iconWide}
                menuBody={css.menuColorWide}/>}>

                <Router hideNavBar={true} dispatch={this.closeSideMenu.bind(this)} scenes={this.props.scenes}/>
            </Drawer>
        );
    }

}
