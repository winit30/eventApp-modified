import {DrawerLayoutAndroid} from "react-native";
import React, {Component} from "react";

import Sidebar from "./../sidebar/Sidebar";

export default DrawerContainer = (props) => {
    const navigationView = (<Sidebar/>);
    return (
        <DrawerLayoutAndroid
            drawerWidth={290}
            ref={node => props.mapElement(node)}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => navigationView}>
            {props.children}
        </DrawerLayoutAndroid>
    );
}
