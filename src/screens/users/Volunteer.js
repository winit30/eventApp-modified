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
        let {onChangeSelect, city} = this.props;
        return (
          <View style={styles.mainContainer}>
              <DrawerContainer mapElement={this.mapElement}>
                  <Toolbar title="Dashboard" onIconClicked={this.onIconClicked} navIcon={require("./../../assets/menu.png")}/>

                  <View style={[styles.pickerCont, styles.selectCityCont]}>
                      <Picker
                          selectedValue={city ? city : "option"}
                          style={[styles.selectPicker, styles.selectCityPicker]}
                          onValueChange={(itemValue, itemIndex) => onChangeSelect(itemValue)}>
                          <Picker.Item label="Select your city" value="options" />
                          <Picker.Item label="Bangalore" value="bangalore" />
                          <Picker.Item label="Pune" value="pune" />
                      </Picker>
                      <View style={[styles.pickerBorderBottom, styles.selectCityBorder]} />
                  </View>

              </DrawerContainer>
          </View>
        );
    }
}

const mapStateToProps = state => ({
    city: state.event.city
});

const mapDispatchToProps = dispatch => ({
    onChangeSelect: city => dispatch({type: "SET_CITY", city})
});

export default connect(mapStateToProps, mapDispatchToProps)(Volunteer);
