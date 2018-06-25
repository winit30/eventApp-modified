import {connect} from "react-redux";
import React, {Component} from "react";
import {View} from "react-native";
import {Button, List, ListItem, Icon} from "react-native-elements";

import {navigateTo} from "./../../../components/navigation/navigate";

import styles from "./../../../styles/styles";

class AppliersList extends Component<{}> {

    render() {
        const {selectedEvent} = this.props;
        return (
            <View style={styles.mainContainer}>
                <List containerStyle={{marginBottom: 20}}>
                {selectedEvent.application && selectedEvent.application.appliers.map((applier, index) => {
                    return (
                        <ListItem
                          key={index}
                          roundAvatar
                          title={applier.applierName}
                          subtitle={applier.applierId}
                          onPress={() => {
                              navigateTo("viewProfile", {profileId: applier.applierId})
                          }}
                        />
                    );
                })}
                </List>
            </View>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AppliersList);
