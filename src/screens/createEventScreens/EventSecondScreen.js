import {Button} from 'react-native-elements';
import {connect} from "react-redux";
import React, {Component} from "react";
import {View, Text, TouchableWithoutFeedback, DatePickerAndroid} from "react-native";

import TextField from "./../../components/eventInputs/TextField";
import {navigateTo, navigateBack} from "./../../components/navigation/navigate";

import styles from "./../../styles/styles";

class EventSecondScreen extends Component<{}> {

    render() {
        return (
          <View style={styles.mainContainer}>
            <View style={styles.formCont}>
                <TextField property="venue" placeholder="Venue" multiline={true} numberOfLines={2} style={styles.eventTextInputLast} />
            </View>
            <View style={styles.rowContainer}>
                <View style={styles.rowContainerChild}>
                    <Button
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title="BACK" onPress={navigateBack}/>
                </View>
                <View style={styles.rowContainerChild}>
                    <Button
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title="NEXT" onPress={() => navigateTo("thirdScreen")} />
                </View>
            </View>
          </View>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    onChange:(property, value)=> dispatch({
        type:"ON_CHANGE_EVENT",
        property,
        value,
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(EventSecondScreen);
