import {DrawerLayoutAndroid} from "react-native";
import React, {Component} from "react";

import Sidebar from "./../sidebar/Sidebar";

export default DrawerContainer = (props) => {
    handleDrawerClose = () => {}
    const navigationView = (<Sidebar onCloseDrawer={props.onCloseDrawer}/>);
    return (
        <DrawerLayoutAndroid
            drawerWidth={300}
            onDrawerClose={this.handleDrawerClose}
            ref={node => props.mapElement(node)}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => navigationView}>
            {props.children}
        </DrawerLayoutAndroid>
    );
}
