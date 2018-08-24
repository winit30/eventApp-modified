import {connect} from "react-redux";
import React, {Component} from "react";
import {TextInput} from "react-native";

import {ON_CHANGE_TEXT} from "./../../constants/action-types";

import componentStyles from "./../../styles/componentStyles";

const defaultProps = {
    mapElement: (n) => {}
}

class TextField extends Component<{}> {

    mapElement = (node) => {
        this.props.mapElement(node);
    }

    onSubmitEditing = () => {
        this.props.onSubmitEditing();
    }

    render() {

        let {onChangeText, name} = this.props;

        return (
            <TextInput style={componentStyles.inputComponentStyles}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Name"
                placeholderTextColor = "rgba(255,255,255,0.8)"
                selectionColor= "#fff"
                autoCapitalize= "words"
                keyboardType= "default"
                returnKeyType= "next"
                value= {name ? name : ""}
                ref= {this.mapElement}
                onSubmitEditing= {this.onSubmitEditing}
                onChangeText= {(value)=> {
                    onChangeText("name", value);
                }}/>
        );
    }
}

const mapStateToProps = state => ({
    name: state.form.form.name
});

const mapDispatchToProps = dispatch => ({
    onChangeText: (property, value) => dispatch({
        type: ON_CHANGE_TEXT,
        property,
        value
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(TextField);

TextField.defaultProps = defaultProps;
