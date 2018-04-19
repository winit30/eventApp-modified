import {connect} from "react-redux";
import React, {Component} from "react";
import {TextInput} from "react-native";

import styles from "./../../styles/styles";

const defaultProps = {
    mapElement: (n) => {}
}

class Password extends Component<{}> {
    constructor(props) {
        super(props);
    }

    mapElement = (node) => {
        this.props.mapElement(node);
    }

    render() {

        let {onChangeText, password} = this.props;

        return (
            <TextInput style={styles.inputBox}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Password"
                value={password ? password : ""}
                secureTextEntry={true}
                placeholderTextColor = "rgba(255,255,255,0.5)"
                ref={this.mapElement}
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
    onChangeText: (property, value) => dispatch({
        type:"ON_CHANGE_TEXT",
        property,
        value
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(Password);

Password.defaultProps = defaultProps;
