import {Button, List, ListItem, Icon} from "react-native-elements";
import {connect} from "react-redux";
import React, {Component} from "react";
import {View, Text} from "react-native";

import {fetchApi} from "./../../../services/api";
import {GET_USER_PROFILE_URL} from "./../../../constants/urls";

import styles from "./../../../styles/styles";

class UserProfile extends Component<{}> {

    componentDidMount() {
        this.props.setUserDetails(null);
        this._fetchUserProfile();
    }

    _fetchUserProfile = async () => {
        let {token, setLoader, profileId, setUserDetails} = this.props;
        try {
            setLoader(true);
            const headers = {"x-auth": token}
            const response = await fetchApi(`${GET_USER_PROFILE_URL}/${profileId}`, "GET", {}, headers);
            const res = await response.json();
            if(res._id && res._id === profileId) {
                setUserDetails(res);
                setLoader(false);
            } else {
                throw new Error("Unable to fetch profile.");
            }
        } catch (e) {
            setLoader(false);
            alert(e.message);
        }
    }

    render() {
        let {userDetails} = this.props;
        return (
            <View style={styles.mainContainer}>
                {userDetails &&
                    <View>
                        <Text>{userDetails.name}</Text>
                    </View>
                }
            </View>
        );
    }
}

const mapStateToProps = state => ({
    token: state.auth.token,
    userDetails: state.userProfile.userDetails
});

const mapDispatchToProps = dispatch => ({
    setLoader: status => dispatch({type: "LOADER", status}),
    setUserDetails: userDetails => dispatch({type: "SET_USER_DETAILS", userDetails})
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
