import {connect} from "react-redux";
import React, {Component} from "react";
import {Text, View} from "react-native";

import {Button, LinkButton} from "./../components/buttons";
import {Email, Password, Select, TextField} from "./../components/inputs";
import {fetchApi} from "./../services/api";
import {REGISTER_URL} from "./../constants/urls";
import {redirectTo, navigateBack} from "./../components/navigation/navigate";

import styles from "./../styles/styles";
import screenStyles from "./../styles/screenStyles";

class Register extends Component<{}> {

    onMapEmail = (node) => {
        this.email = node && node;
    }

    onMapPassword = (node) => {
        this.password = node && node;
    }

    onNameSubmitEditing = () => {
        this.email && this.email.focus();
    }

    onEmailSubmitEditing = () => {
        this.password && this.password.focus();
    }

    registerRequest = async () => {
        let {setUserAuth, setLoader} = this.props;
        let {userType, name, email, password} = this.props.form;
        try {
            const body = {userType, name, email, password};
            setLoader(true);
            const response = await fetchApi(REGISTER_URL, "POST" ,body);
            if (response.status === 200 && response.headers.get("x-auth")) {
                const token = response.headers.get("x-auth");
                const user = await response.json();
                setUserAuth(token, user, true);
                redirectTo("user");
                setLoader(false);
            } else if (response.status === 200 && !response.headers.get("x-auth")) {
                throw new Error("Duplicate user.");
            } else if (response.status !== 200) {
                throw new Error("Something went wrong. Please try again.");
            } else {
                throw new Error(response);
            }
        } catch (e) {
              setLoader(false);
              alert(e.message);
        }
    }

    render() {
        return (
            <View style={styles.flex_1}>
                <View style={screenStyles.authScreenStyles.loginContainer}>
                    <Select />
                    <View style={screenStyles.authScreenStyles.authInputContainer}>
                        <TextField onSubmitEditing={this.onNameSubmitEditing} />
                    </View>
                    <View style={screenStyles.authScreenStyles.authInputContainer}>
                        <Email onSubmitEditing={this.onEmailSubmitEditing} mapElement={this.onMapEmail} />
                    </View>
                    <View style={screenStyles.authScreenStyles.authInputContainer}>
                        <Password mapElement={this.onMapPassword} />
                    </View>
                    <View style={screenStyles.authScreenStyles.authButtonContainer}>
                        <Button text="Register" onPress={this.registerRequest}/>
                    </View>
                </View>
                <View style={screenStyles.authScreenStyles.signupTextContainer}>
                    <Text style={screenStyles.authScreenStyles.signupText}>Already have an account? </Text>
                    <LinkButton text="Login" onPress={navigateBack} />
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    form: state.form.form
});

const mapDispatchToProps = dispatch => ({
    setUserAuth: (token, user, loggedIn) => dispatch({
        type: "SET_USER_AUTH",
        token,
        user,
        loggedIn
    }),
    setLoader:(status) => dispatch({type:"LOADER", status})
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
