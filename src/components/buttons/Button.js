import {connect} from "react-redux";
import React, {Component} from "react";
import {TouchableNativeFeedback, Text, View} from "react-native";

import componentStyles from "./../../styles/componentStyles";

const defaultProps = {
    style: {},
    textStyle: {}
}

class Button extends Component<{}> {

    render() {
        return (
            <TouchableNativeFeedback onPress={this.props.onPress}>
                <View style={[componentStyles.buttonComponentStyle.primaryButton, this.props.style]} >
                  <Text style={[componentStyles.buttonComponentStyle.primaryButtonText, this.props.textStyle]}>{this.props.text}</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Button);

Button.defaultProps = defaultProps;
