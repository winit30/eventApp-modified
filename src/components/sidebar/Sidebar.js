import {connect} from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import {Image, ScrollView, Text, TouchableOpacity, View, TouchableNativeFeedback} from "react-native";
import React, {Component, PropTypes} from "react";

import {fetchApi} from "./../../services/api";
import {LOGOUT_URL} from "./../../constants/urls";
import {redirectTo, navigateTo} from "./../../components/navigation/navigate";
import {url} from "./../../config/settings";

import styles from "./../../styles/styles";
import componentStyles from "./../../styles/componentStyles";

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
            <ScrollView style={styles.flex_1}>
                <TouchableNativeFeedback onPress={this.showUserProfile}>
                    <View style={componentStyles.sidebarComponentStyle.sidebarHeaderContainer}>
                        <View style={componentStyles.sidebarComponentStyle.headerIconStyle}>
                            <Icon name="md-boat" size={35} color="#fff" />
                        </View>
                        <View style={componentStyles.sidebarComponentStyle.headerInfoStyle}>
                            <Text style={componentStyles.sidebarComponentStyle.headerTitleStyle}>
                                {user ? user.name[0].toUpperCase() + user.name.slice(1) : ""}
                            </Text>
                            <Text style={componentStyles.sidebarComponentStyle.headerUserTypeStyle}>
                                {user ? user.userType === "organizer" ? "Organizer" : "Volunteer" : ""}
                            </Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>
                <View style={componentStyles.sidebarComponentStyle.sidebarContentStyle}>
                    <View>
                        <TouchableOpacity style={componentStyles.sidebarComponentStyle.listItemStyle}>
                            <Text style={componentStyles.sidebarComponentStyle.listItemTitleStyle}>Filter Events</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={componentStyles.sidebarComponentStyle.listItemStyle} onPress={this.logout}>
                            <Text style={componentStyles.sidebarComponentStyle.listItemTitleStyle}>Logout</Text>
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
