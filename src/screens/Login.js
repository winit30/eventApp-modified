import {Actions, ActionConst} from "react-native-router-flux";
import {connect} from "react-redux";
import React, {Component} from "react";
import {View, Text} from "react-native";

import {Button, LinkButton} from "./../components/buttons";
import {Email, Password} from "./../components/inputs";
import {fetchPostApi} from "./../services/api";
import {redirectTo} from "./../components/navigation/navigate";
import {url} from "./../config/settings";

import styles from "./../styles/styles";

class Login extends Component<{}> {

    loginRequest = async () => {
        let {setUserAuth, setLoader} = this.props;
        let {email, password} = this.props.form;
        try {
            const body = {email, password};
            setLoader(true);
            const response = await fetchPostApi(`${url}/user/login`, body);
            if (response.status === 200 && response.headers.map.hasOwnProperty("x-auth")) {
                const token = response.headers.get("x-auth");
                const user = await response.json();
                setUserAuth(token, user, true);
                redirectTo("user");
                setLoader(false);
            } else if (response.status === 400) {
                throw new Error("Wrong credentials");
            } else if (response === "Request timeout") {
                throw new Error(response);
            }
        } catch (e) {
              setLoader(false);
              console.log(e.message);
        }
    }

    onSubmitEditing = () => {
      this.props.inputs.password.focus();
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.authCont}>
                    <Email onSubmitEditing={this.onSubmitEditing}/>
                    <Password />
                    <Button text="Login" onPress={this.loginRequest}/>
                </View>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Do not have an account yet? </Text>
                    <LinkButton text="Register" onPress={Actions.signup} />
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    inputs: state.input.inputs,
    form: state.form.form
});

const mapDispatchToProps = dispatch => ({
    setUserAuth: (token, user, loggedIn) => dispatch({
      type: "SET_USER_AUTH",
      token,
      user,
      loggedIn
    }),
    setLoader:(status)=>dispatch({type:'LOADER', status})
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
