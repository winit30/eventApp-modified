import {connect} from "react-redux";
import React, {Component} from "react";
import {View, Text} from "react-native";

import DrawerContainer from "./../components/drawer/DrawerContainer";
import {FloatingButton} from "./../components/buttons";
import Toolbar from "./../components/toolbar/Toolbar";
import {navigateTo} from "./../components/navigation/navigate";

import styles from "./../styles/styles";

class Dashboard extends Component<{}> {

    mapElement = (node) => {
        this.drawer = node && node;
    }

    onIconClicked = () => {
        this.drawer && this.drawer.openDrawer();
    }

    render() {
        return (
          <View style={styles.mainContainer}>
              <DrawerContainer mapElement={this.mapElement}>
                  <Toolbar title="Dashboard" onIconClicked={this.onIconClicked} navIcon={require("./../assets/menu.png")}/>
                  <FloatingButton onPress={() => navigateTo("createEvent")}/>
              </DrawerContainer>
          </View>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
