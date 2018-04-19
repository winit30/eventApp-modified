import {connect} from "react-redux";
import React, {Component} from "react";
import {TextInput} from "react-native";

import styles from "./../../styles/styles";

const defaultProps = {
    mapElement: (n) => {}
}

class Email extends Component<{}> {
    constructor(props) {
        super(props);
    }

    mapElement = (node) => {
        this.props.mapElement(node);
    }

    onSubmitEditing = () => {
      this.props.onSubmitEditing();
    }

    render() {

        let {onChangeText, email} = this.props;

        return (
            <TextInput style={styles.inputBox}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Email"
                placeholderTextColor = "rgba(255,255,255,0.5)"
                selectionColor="#fff"
                keyboardType="email-address"
                autoCapitalize="none"
                returnKeyType="next"
                value={email ? email : ""}
                ref={this.mapElement}
                onSubmitEditing={this.onSubmitEditing}
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
    onChangeText: (property, value) => dispatch({
        type:"ON_CHANGE_TEXT",
        property,
        value
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(Email);

Email.defaultProps = defaultProps;
