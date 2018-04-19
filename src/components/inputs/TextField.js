import {connect} from "react-redux";
import React, {Component} from "react";
import {TextInput} from "react-native";

import styles from "./../../styles/styles";

class TextField extends Component<{}> {

    onSubmitEditing() {
        this.props.onSubmitEditing();
    }

    render() {

        let {mapInput, onChangeText, name} = this.props;

        return (
            <TextInput style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Name"
                placeholderTextColor = "#ffffff"
                selectionColor="#fff"
                autoCapitalize="words"
                keyboardType="default"
                returnKeyType="next"
                value={name ? name : ""}
                onSubmitEditing={this.onSubmitEditing}
                ref={name => mapInput("name", name)}
                onChangeText={(value)=> {
                    onChangeText("name", value);
                }}/>
        );
    }
}

const mapStateToProps = state => ({
    name: state.form.form.name
});

const mapDispatchToProps = dispatch => ({
    mapInput: (property, node) => dispatch({
        type:"MAP_INPUT",
        property,
        node
    }),
    onChangeText: (property, value) => dispatch({
        type:"ON_CHANGE_TEXT",
        property,
        value
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(TextField);
