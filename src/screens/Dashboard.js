import {connect} from "react-redux";
import React, {Component} from "react";
import {View, Text} from "react-native";

import {Organizer, Volunteer} from "./users";

import styles from "./../styles/styles";

class Dashboard extends Component<{}> {

    render() {

        let {user} = this.props;

        return (
          <View style={styles.mainContainer}>
              {user && user.userType === "organizer" && <Organizer/>}
              {user && user.userType === "volunteer" && <Volunteer/>}
          </View>
        );
    }
}

const mapStateToProps = state => ({
    user: state.auth.user
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
