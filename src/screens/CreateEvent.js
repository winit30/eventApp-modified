import {connect} from "react-redux";
import React, {Component} from "react";
import {View, TouchableWithoutFeedback,  DatePickerAndroid, ScrollView} from "react-native";

import {Button} from "./../components/buttons";
import {CREATE_EVENT_URL} from "./../constants/urls";
import {fetchApi} from "./../services/api";
import TextField from "./../components/eventInputs/TextField";
import Toolbar from "./../components/toolbar/Toolbar";
import {navigateBack} from "./../components/navigation/navigate";

import styles from "./../styles/styles";

class CreateEvent extends Component<{}> {

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

    createEvent = async () => {
        let {setLoader, token, events, setEvent} = this.props;
        let {title, category, date, description, venue, pincode, city, state, country} = this.props.event;
        try {
            const body = {title, category, date, description, venue, pincode, city, state, country};
            setLoader(true);
            const headers = {"x-auth": token}
            const response = await fetchApi(CREATE_EVENT_URL, "POST", body, headers);
            if (response.status === 200) {
                const event = await response.json();
                if (event.hasOwnProperty("errors")) {
                    throw new Error(event.message);
                } else {
                    const eventArray = events.slice();
                    eventArray.push(event);
                    setEvent(eventArray);
                    navigateBack();
                    setLoader(false);
                }
            } else {
                throw new Error("Something went wrong. Please try again");
            }
        } catch (e) {
              setLoader(false);
              console.log(e.message);
        }
    }

    render() {

        let {event} = this.props;

        return (
          <View style={styles.mainContainer}>
              <Toolbar title="Create Event" onIconClicked={navigateBack} navIcon={require("./../assets/back.png")}/>
                <ScrollView>
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
                      <TextField property="venue" placeholder="Venue" multiline={true} numberOfLines={2} style={styles.eventTextInputLast} />
                  </View>
                  <View style={styles.formContRow}>
                      <View style={styles.formContRowChild}>
                          <TextField property="pincode" placeholder="Pin code" />
                      </View>
                      <View style={styles.formContRowChild}>
                          <TextField property="city" placeholder="City" />
                      </View>
                  </View>
                  <View style={styles.formContRow}>
                      <View style={styles.formContRowChild}>
                          <TextField property="state" placeholder="State" />
                      </View>
                  </View>
                  <View style={styles.formContRow}>
                      <View style={styles.formContRowChild}>
                          <TextField property="country" placeholder="Country" />
                      </View>
                  </View>
                  <View style={[styles.formContRow]}>
                      <View style={styles.formContRowChild}>
                          <Button onPress={this.createEvent}
                                  textStyle={{color:"#ffffff"}}
                                  style={{width: "100%", elevation: 2, backgroundColor: "#303f9f"}}
                                  text="Create Event" />
                      </View>
                  </View>
              </ScrollView>
          </View>
        );
    }
}

const mapStateToProps = state => ({
    event: state.form.event,
    token: state.auth.token,
    events: state.event.events
});

const mapDispatchToProps = dispatch => ({
    onChange:(property, value)=> dispatch({
        type:"ON_CHANGE_EVENT",
        property,
        value,
    }),
    setLoader:(status) => dispatch({type:"LOADER", status}),
    setEvent: events => dispatch({
        type: "SET_EVENTS",
        events
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
