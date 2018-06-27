import {connect} from "react-redux";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React, {Component} from "react";
import {Text, View, TouchableNativeFeedback} from "react-native";

import componentStyles from "./../../styles/componentStyles";

export default class FloatingButton extends Component<{}> {
    render() {
        return(
            <View style={componentStyles.buttonComponentStyle.floatingButtonContainer}>
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.Ripple("#fff", true)}
                    onPress={this.props.onPress}>
                    <View style={componentStyles.buttonComponentStyle.floatingButton}>
                      <Icon  name="plus" size={40} color="#000" />
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}
