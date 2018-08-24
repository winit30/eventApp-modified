import {connect} from "react-redux";
import React, {Component} from "react";
import {TouchableOpacity, Text} from "react-native";

import componentStyles from "./../../styles/componentStyles";

class LinkButton extends Component<{}> {

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <Text style={componentStyles.buttonComponentStyle.linkButton}>{this.props.text}</Text>
            </TouchableOpacity>
          );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LinkButton);
