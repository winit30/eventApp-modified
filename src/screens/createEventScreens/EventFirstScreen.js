import {connect} from "react-redux";
import React, {Component} from "react";
import {View, Text, TouchableWithoutFeedback, DatePickerAndroid} from "react-native";

import {Button} from "./../../components/buttons";
import {navigateBack, navigateTo} from "./../../components/navigation/navigate";
import TextField from "./../../components/eventInputs/TextField";
import Toolbar2 from "./../../components/toolbar/Toolbar2";

import styles from "./../../styles/styles";
import screenStyles from "./../../styles/screenStyles";

class EventFirstScreen extends Component<{}> {

    mapDatePicker = (node) => {
        this.datePicker = node;
    }

    openDatePicker = async () => {
        let {onChange} = this.props;
        try {
            const {action, year, month, day} = await DatePickerAndroid.open({
                date: new Date()
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                onChange('date', `${month}/${day}/${year}`);
                this.datePicker.blur();
            } else if(action === DatePickerAndroid.dismissedAction) {
                this.datePicker.blur();
            }
        } catch ({code, message}) {
              console.warn('Cannot open date picker', message);
        }
    }

    render() {
        return (
          <View style={[styles.flex_1, screenStyles.createEventStyle.eventFromBackgroundColor]}>
            <Toolbar2 onIconClicked={navigateBack} />
            <View style={screenStyles.createEventStyle.eventFormContainer}>
                <View style={screenStyles.createEventStyle.eventInputContainer}>
                    <TextField property="title" placeholder="Title" placeholderColor="#ffffff" style={screenStyles.createEventStyle.eventInputStyle} />
                </View>
                <View style={screenStyles.createEventStyle.eventInputContainer}>
                    <TextField property="category" placeholder="Category" placeholderColor="#ffffff" style={screenStyles.createEventStyle.eventInputStyle} />
                </View>
                <View style={screenStyles.createEventStyle.eventInputContainer}>
                    <TouchableWithoutFeedback  onPress={this.openDatePicker}>
                        <View style={styles.relativeDateCont}>
                            <TextField property="date" placeholder="Date" style={screenStyles.createEventStyle.eventInputStyle} placeholderColor="#ffffff" keyboardType="numeric" mapElement={this.mapDatePicker}/>
                            <View style={styles.dateOverlay} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={screenStyles.createEventStyle.eventInputContainer}>
                    <TextField property="description" placeholder="Event Description" placeholderColor="#ffffff" multiline={true} numberOfLines={4} style={[screenStyles.createEventStyle.eventInputStyle, screenStyles.createEventStyle.eventTextareaStyle]} />
                </View>
                <View style={[screenStyles.createEventStyle.eventInputContainer, styles.pullRight]}>
                    <Button onPress={() => navigateTo("secondScreen")} style={screenStyles.createEventStyle.eventInputButton} text="Next" />
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

export default connect(mapStateToProps, mapDispatchToProps)(EventFirstScreen);
