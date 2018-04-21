import {connect} from "react-redux";
import React, {Component} from "react";
import {View, Text, Picker} from "react-native";

import DrawerContainer from "./../../components/drawer/DrawerContainer";
import Toolbar from "./../../components/toolbar/Toolbar";

import styles from "./../../styles/styles";

class Volunteer extends Component<{}> {

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
                  <Toolbar title="Dashboard" onIconClicked={this.onIconClicked} navIcon={require("./../../assets/menu.png")}/>

                  <View style={styles.pickerCont}>
                      <Picker
                          selectedValue={userType ? userType : "options"}
                          style={styles.selectPicker}
                          onValueChange={(itemValue, itemIndex) => onChangeText("userType", itemValue) }>
                          <Picker.Item label="Select user type" value="options" />
                          <Picker.Item label="Organizer" value="organizer" />
                          <Picker.Item label="Volunteer" value="volunteer" />
                      </Picker>
                      <View style={styles.pickerBorderBottom} />
                  </View>

              </DrawerContainer>
          </View>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Volunteer);
