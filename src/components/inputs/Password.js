import {connect} from "react-redux";
import React, {Component} from "react";
import {TextInput} from "react-native";

import styles from "./../../styles/styles";

class Password extends Component<{}> {

    render() {

        let {mapInput, onChangeText, password} = this.props;

        return (
            <TextInput style={styles.inputBox}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Password"
                value={password ? password : ""}
                secureTextEntry={true}
                placeholderTextColor = "#ffffff"
                ref={password => mapInput("password", password)}
                onChangeText={(value)=> {
                  onChangeText('password', value);
                }}/>
        );
    }
}

const mapStateToProps = state => ({
    password: state.form.form.password
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

export default connect(mapStateToProps, mapDispatchToProps)(Password);
