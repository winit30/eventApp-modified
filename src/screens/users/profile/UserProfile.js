import {connect} from "react-redux";
import React, {Component} from "react";
import {View, Text} from "react-native";
import {Button, List, ListItem, Icon} from "react-native-elements";

import {GET_USER_PROFILE_URL} from "./../../../constants/urls";

import styles from "./../../../styles/styles";

class UserProfile extends Component<{}> {

    componentDidMount() {
        this._fetchUserProfile();
    }

    _fetchUserProfile = async () => {
        let {token, setLoader, profileId} = this.props;
        try {
            const headers = {"x-auth": token}
            setLoader(true);
            const response = await fetchApi(`${GET_USER_PROFILE_URL}/${profileId}`, "GET", {}, headers);
            const res = response.json();
            console.log(res);
            setLoader(false);
        } catch (e) {
            setLoader(false);
            alert(e.message);
        }
    }

    render() {

        const {profileId} = this.props;

        return (
            <View style={styles.mainContainer}>
                <Text>User Profile</Text>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    token: state.auth.token
});

const mapDispatchToProps = dispatch => ({
    setLoader: status => dispatch({type:"LOADER", status})
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
