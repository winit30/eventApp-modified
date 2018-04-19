import {connect} from "react-redux";
import React, {Component} from "react";
import {TextInput} from "react-native";

import styles from "./../../styles/styles";

class Email extends Component<{}> {

    onSubmitEditing = () => {
      this.props.onSubmitEditing();
    }

    render() {

        let {mapInput, onChangeText, email} = this.props;

        return (
            <TextInput style={styles.inputBox}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Email"
                placeholderTextColor = "#ffffff"
                selectionColor="#fff"
                keyboardType="email-address"
                autoCapitalize="none"
                returnKeyType="next"
                value={email ? email : ""}
                onSubmitEditing={this.onSubmitEditing}
                ref={email => mapInput("email", email)}
                onChangeText={(value)=> {
                    onChangeText("email", value);
                }}/>
        );
    }
}

const mapStateToProps = state => ({
    email: state.form.form.email
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

export default connect(mapStateToProps, mapDispatchToProps)(Email);
