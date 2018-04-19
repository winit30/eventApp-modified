import {connect} from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import React, {Component, PropTypes} from "react";

import {logoutApi} from "./../../services/api";
import {LOGOUT_URL} from "./../../constants/urls";
import {redirectTo} from "./../../components/navigation/navigate";
import {url} from "./../../config/settings";

import styles from "./../../styles/styles";

class Sidebar extends Component {

    logout = async () => {
        let {setLoader, setUserAuth} = this.props;
        try {
            const headers = {
                "x-auth": this.props.token
            }
            setLoader(true);
            const response = await logoutApi(LOGOUT_URL, headers);
            setUserAuth(null, null, false);
            redirectTo("auth");
            setLoader(false);
        } catch (e) {
          setLoader(false);
          console.log(e);
        }
    }

    render() {

        let {user} = this.props;

        return(
            <ScrollView style={styles.drawer}>
                <View style={styles.header} key={0}>
                    <View style={styles.headerIcon} key={0}>
                        <Icon name="md-boat" size={50} color="#fff" />
                    </View>
                    <View style={styles.headerInfo} key={1}>
                        <Text style={styles.headerTitle} key={0}>
                            {user ? user.name : ""}
                        </Text>
                        <Text style={styles.headerUserType} key={1}>
                            {user ? user.userType === "organizer" ? "Organizer" : "Volunteer" : ""}
                        </Text>
                        <Text style={styles.headerEmail} key={2}>
                            {user ? user.email: ""}
                        </Text>
                    </View>
                </View>
                <View style={styles.content} key={1}>
                    <View>
                        <TouchableOpacity
                            style={styles.listItem}>
                            <Text style={styles.listItemTitle}>Menu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.listItem} onPress={this.logout}>
                            <Text style={styles.listItemTitle}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = state => ({
    token: state.auth.token,
    user: state.auth.user
})

const mapDispatchToProps = dispatch => ({
    setUserAuth: (token, user, loggedIn) => dispatch({
      type: "SET_USER_AUTH",
      token,
      user,
      loggedIn
    }),
    setLoader: status => dispatch({type: "LOADER", status})
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
