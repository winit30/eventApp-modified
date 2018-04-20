import {connect} from "react-redux";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React, {Component} from "react";
import {Text, View, TouchableNativeFeedback} from "react-native";

import styles from "./../../styles/styles";

export default class FloatingButton extends Component<{}> {
    render() {
        return(
            <View style={styles.floatingButtonCont}>
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.Ripple("#fff", true)}
                    onPress={this.props.onPress}>
                    <View style={styles.floatingButton}>
                      <Icon  name="plus" size={30} color="#fff" />
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}
