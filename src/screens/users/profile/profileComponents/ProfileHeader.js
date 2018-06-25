import {Button, List, ListItem, Icon, Avatar} from "react-native-elements";
import {connect} from "react-redux";
import React, {Component} from "react";
import {View, Text} from "react-native";

import styles from "./../../../../styles/styles";

class ProfileHeader extends Component<{}> {

    render() {
        const {details} = this.props;
        return (
            <View>
                <View style={styles.displayPicCont}>
                    <Avatar
                        large
                        rounded
                        source={require("./../../../../assets/thumbnail.png")}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}/>
                    <Text style={styles.profileName}>{details.name}</Text>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileHeader);
