import React, {Component} from "react";
import {TouchableNativeFeedback, Text, View} from "react-native";

import componentStyles from "./../../styles/componentStyles";

const defaultProps = {}

class DropdownItem extends Component<{}> {
    render() {
        return (
          <TouchableNativeFeedback  onPress={this.props.onPress}>
              <View style={componentStyles.dropdownComponentStyle.dropdownItemStyle}>
                  <Text style={componentStyles.dropdownComponentStyle.dropdownTextStyle}>{this.props.children}</Text>
              </View>
          </TouchableNativeFeedback>
        );
    }
}

export default DropdownItem;

DropdownItem.defaultProps = defaultProps;
