import {Button} from 'react-native-elements';
import {connect} from "react-redux";
import React, {Component} from "react";
import {View, Text, TouchableWithoutFeedback, DatePickerAndroid} from "react-native";

import TextField from "./../../components/eventInputs/TextField";
import {navigateTo} from "./../../components/navigation/navigate";

import styles from "./../../styles/styles";

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
          <View style={styles.mainContainer}>
            <View style={styles.formCont}>
              <TextField property="title" placeholder="Title" />
              <TextField property="category" placeholder="Category" />
              <TouchableWithoutFeedback  onPress={this.openDatePicker}>
                  <View style={styles.relativeDateCont}>
                      <TextField property="date" placeholder="Date" keyboardType="numeric" mapElement={this.mapDatePicker}/>
                      <View style={styles.dateOverlay}/>
                  </View>
              </TouchableWithoutFeedback>
              <TextField property="description" placeholder="Event Description" multiline={true} numberOfLines={4} />
            </View>
            <View style={[styles.formContRow]}>
                <View style={styles.formContRowChild}>
                    <Button
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title="NEXT"  onPress={() => navigateTo("secondScreen")} />
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
