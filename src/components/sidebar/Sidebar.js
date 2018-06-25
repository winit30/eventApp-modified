import {connect} from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import {Image, ScrollView, Text, TouchableOpacity, View, TouchableNativeFeedback} from "react-native";
import React, {Component, PropTypes} from "react";

import {fetchApi} from "./../../services/api";
import {LOGOUT_URL} from "./../../constants/urls";
import {redirectTo, navigateTo} from "./../../components/navigation/navigate";
import {url} from "./../../config/settings";

import styles from "./../../styles/styles";

class Sidebar extends Component {

    logout = async () => {
        let {setLoader, resetStore} = this.props;
        try {
            const headers = {
                "x-auth": this.props.token
            }
            setLoader(true);
            const response = await fetchApi(LOGOUT_URL, "DELETE", {}, headers);
            resetStore();
            redirectTo("auth");
            setLoader(false);
        } catch (e) {
            setLoader(false);
            alert(e.message);
        }
    }

    showUserProfile = () => {
        let {user} = this.props;
        this.props.onCloseDrawer();
        navigateTo("viewProfile", {profileId: user._id});
    }

    render() {

        let {user} = this.props;

        return(
            <ScrollView style={styles.drawer}>
                <TouchableNativeFeedback onPress={this.showUserProfile}>
                    <View style={styles.header} key={0}>
                        <View style={styles.headerIcon} key={0}>
                            <Icon name="md-boat" size={35} color="#fff" />
                        </View>
                        <View style={styles.headerInfo} key={1}>
                            <Text style={styles.headerTitle} key={0}>
                                {user ? user.name[0].toUpperCase() + user.name.slice(1) : ""}
                            </Text>
                            <Text style={styles.headerUserType} key={1}>
                                {user ? user.userType === "organizer" ? "Organizer" : "Volunteer" : ""}
                            </Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>
                <View style={styles.content} key={1}>
                    <View>
                        <TouchableOpacity
                            style={styles.listItem}>
                            <Text style={styles.listItemTitle}>Link</Text>
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
    setLoader: status => dispatch({type: "LOADER", status}),
    resetStore: () => dispatch({type: "INIT"})
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
