import {connect} from "react-redux";
import React, {Component} from "react";
import {TouchableOpacity, Text} from "react-native";

import styles from "./../../styles/styles";

const defaultProps = {
    style: {},
    textStyle: {}
}

class Button extends Component<{}> {

    render() {
        return (
            <TouchableOpacity style={[styles.button, this.props.style]} onPress={this.props.onPress}>
                <Text style={[styles.buttonText, this.props.textStyle]}>{this.props.text}</Text>
            </TouchableOpacity>
          );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Button);

Button.defaultProps = defaultProps;
