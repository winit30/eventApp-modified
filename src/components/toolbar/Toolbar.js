import {connect} from "react-redux";
import {Icon} from "react-native-elements";
import React, {Component} from "react";
import {ToolbarAndroid, View, Text, TouchableNativeFeedback} from "react-native";

import componentStyles from "./../../styles/componentStyles";

defaultProps = {
    title: "",
    navIcon: "",
    onIconClicked: ""
}

class Toolbar extends Component<{}> {

    render() {
        return (
          // <ToolbarAndroid
          //     style={componentStyles.toolBarComponentStyle}
          //     navIcon={this.props.navIcon}
          //     title={this.props.title}
          //     titleColor="#ffffff"
          //     onIconClicked={this.props.onIconClicked}/>
          <View style={componentStyles.toolBarComponentStyle.toolbarContainer}>
              <TouchableNativeFeedback onPress={this.props.onIconClicked}>
                  <View style={componentStyles.toolBarComponentStyle.iconContainer}>
                      <Icon
                          name="bars"
                          type="font-awesome"
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

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps )(Toolbar);

Toolbar.defaultProps = defaultProps;
