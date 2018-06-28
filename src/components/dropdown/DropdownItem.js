import React, {Component} from "react";
import {TouchableOpacity, Text, View, Modal} from "react-native";

import componentStyles from "./../../styles/componentStyles";

const defaultProps = {}

class DropdownItem extends Component<{}> {
    render() {
        return (
              <Text onPress={this.props.onPress}>{this.props.children}</Text>
        );
    }
}

export default DropdownItem;

DropdownItem.defaultProps = defaultProps;
