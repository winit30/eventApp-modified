import {connect} from "react-redux";
import React, {Component} from "react";
import {View} from "react-native";
import {Button, List, ListItem, Icon} from "react-native-elements";

import styles from "./../../../styles/styles";

class UserProfile extends Component<{}> {

    render() {
        return (
            <View style={styles.mainContainer}>
                <Text>User Profile</Text>
            </View>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
