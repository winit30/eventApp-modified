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

class Toolbar2 extends Component<{}> {

    render() {
        return (
          <View style={componentStyles.toolBarComponentStyle.toolbarContainer}>
              <TouchableNativeFeedback onPress={this.props.onIconClicked}>
                  <View style={componentStyles.toolBarComponentStyle.iconContainer}>
                      <Icon
                          name="arrow-left"
                          type="material-community"
                          color='#ffffff'/>
                  </View>
              </TouchableNativeFeedback>
          </View>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps )(Toolbar2);

Toolbar2.defaultProps = defaultProps;
