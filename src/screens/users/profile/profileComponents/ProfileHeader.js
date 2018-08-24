import {Button, List, ListItem, Icon, Avatar} from "react-native-elements";
import {connect} from "react-redux";
import React, {Component} from "react";
import {View, Text} from "react-native";

import styles from "./../../../../styles/styles";
import screenStyles from "./../../../../styles/screenStyles";

class ProfileHeader extends Component<{}> {

    render() {
        const {details} = this.props;
        return (
            <View>
                <View style={screenStyles.userProfileStyle.headerContainer}>
                    <Avatar
                        large
                        rounded
                        source={require("./../../../../assets/profile.jpg")}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}/>
                    <Text style={screenStyles.userProfileStyle.profileName}>{details.name}</Text>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileHeader);
