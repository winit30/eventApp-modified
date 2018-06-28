import React, {Component} from "react";
import {TouchableOpacity, Text, View, Modal} from "react-native";

import DropdownItem from "./DropdownItem";

import componentStyles from "./../../styles/componentStyles";

const defaultProps = {
  showDropdown: false,
  topPosition: 0
}

class Dropdown extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            topPosition: {
                top: 0
            }
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.topPosition === prevState.topPosition) return null;
        return {
          topPosition: {
              top: nextProps.topPosition,
              flex: 1
          }
        }
    }

    renderChildren = () => {
        return React.Children.map(this.props.children, child => {
          return (
            <DropdownItem onPress={child.props.onPress}>{child.props.children}</DropdownItem>
          );
        });
    }

    render() {
        return (
          <Modal animationType="fade" transparent={true} visible={this.props.showDropdown} onRequestClose={() => {console.log("modal closed");}}>
              <TouchableOpacity onPress={this.props.onHandleDowndownMenu}>
                  <View style={{width: "100%", height: "100%"}} />
              </TouchableOpacity>
              <View style={[componentStyles.dropdownComponentStyle.dropdownContainer, this.state.topPosition]}>
                  {this.renderChildren()}
              </View>
          </Modal>
        );
    }
}

export default Dropdown;

Dropdown.defaultProps = defaultProps;
