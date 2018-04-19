import {Actions} from "react-native-router-flux";
import {connect} from "react-redux";
import React, {Component} from "react";
import {Text, View} from "react-native";

import {Button, LinkButton} from "./../components/buttons";
import {Email, Password, Select, TextField} from "./../components/inputs";
import {fetchPostApi} from "./../services/api";
import {REGISTER_URL} from "./../constants/urls";
import {redirectTo} from "./../components/navigation/navigate";

import styles from "./../styles/styles";

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
            const response = await fetchPostApi(REGISTER_URL, body);
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
            } else if (response === "Request timeout") {
                throw new Error(response);
            }
        } catch (e) {
              setLoader(false);
              console.log(e.message);
        }
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.authCont}>
                    <Select />
                    <TextField onSubmitEditing={this.onNameSubmitEditing} />
                    <Email onSubmitEditing={this.onEmailSubmitEditing} mapElement={this.onMapEmail} />
                    <Password mapElement={this.onMapPassword} />
                    <Button text="Register" onPress={this.registerRequest}/>
                </View>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Already have an account? </Text>
                    <LinkButton text="Login" onPress={Actions.pop}/>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    elements: state.element.elements,
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
