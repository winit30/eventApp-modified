import {connect} from "react-redux";
import {Icon} from "react-native-elements";
import React, {Component} from "react";
import {View, Text, TouchableNativeFeedback} from "react-native";

import componentStyles from "./../../styles/componentStyles";

defaultProps = {
    title: "",
    navIcon: "",
    onIconClicked: ""
}

class Toolbar extends Component<{}> {

    render() {
        return (
          <View style={componentStyles.toolBarComponentStyle.toolbarContainer}>
              <TouchableNativeFeedback onPress={this.props.onIconClicked}>
                  <View style={componentStyles.toolBarComponentStyle.iconContainer}>
                      <Icon
                          name="menu"
                          type="material-community"
                          size={28}
                          color='#ffffff'/>
                  </View>
              </TouchableNativeFeedback>
              <View style={componentStyles.toolBarComponentStyle.utilityContainer}>
                  <View style={componentStyles.toolBarComponentStyle.iconContainer}>
                      <Icon
                          name="comment"
                          type="font-awesome"
                          color='#ffffff'/>
                  </View>
                  <View style={componentStyles.toolBarComponentStyle.iconContainer}>
                      <Icon
                          name="bell"
                          type="font-awesome"
                          color='#ffffff'/>
                  </View>
              </View>
          </View>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);

Toolbar.defaultProps = defaultProps;
