import {connect} from "react-redux";
import React, {Component} from "react";
import {TextInput} from "react-native";

import componentStyles from "./../../styles/componentStyles";

const defaultProps = {
    mapElement: (n) => {},
    onSubmitEditing: () => {},
    onTextInputFocus: () => {},
    property: "",
    placeholder: "",
    keyboardType: "default",
    returnKeyType: "done",
    multiline: false,
    numberOfLines:1,
    style: {}
}

class TextField extends Component<{}> {

    mapElement = (node) => {
        this.props.mapElement(node);
    }

    onSubmitEditing = () => {
        this.props.onSubmitEditing();
    }

    render() {

        let {onChangeText, event} = this.props;

        return (
            <TextInput style={[componentStyles.eventInputStyle.textfield, this.props.style]}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder={this.props.placeholder}
                placeholderTextColor = "#999"
                selectionColor="#333333"
                autoCapitalize="words"
                keyboardType={this.props.keyboardType}
                multiline = {this.props.multiline}
                numberOfLines = {this.props.numberOfLines}
                returnKeyType={this.props.returnKeyType}
                value={event ? event[this.props.property] ? event[this.props.property] : "" : ""}
                ref={this.mapElement}
                onFocus={this.props.onTextInputFocus}
                onSubmitEditing={this.onSubmitEditing}
                onChangeText={(value)=> {
                    onChangeText(this.props.property, value);
                }}/>
        );
    }
}

const mapStateToProps = state => ({
    event: state.form.event
});

const mapDispatchToProps = dispatch => ({
    onChangeText: (property, value) => dispatch({
        type:"ON_CHANGE_EVENT",
        property,
        value
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(TextField);

TextField.defaultProps = defaultProps;
