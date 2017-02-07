'use strict';
import React, {Component} from "react";
import AppEventEmitter from "./../../../Services/AppEventEmitter";
import {Router} from "react-native-router-flux";
import Drawer from "./../../Custom/react-native-drawer";
import SideMenu from "./SideMenuIcons";
import css from "./style";

export default class MenuSmall extends Component {
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
                backgroundColor="#34BC99"
                panCloseMask={0.6}
                panThreshold={0.6}
                openDrawerOffset={0.6}

                content={<SideMenu textColor={{color: '#fff'}} menuBody={css.menuColor}/>}>

                <Router dispatch={this.closeSideMenu.bind(this)} hideNavBar={true} scenes={this.props.scenes}/>
            </Drawer>
        );
    }

}
