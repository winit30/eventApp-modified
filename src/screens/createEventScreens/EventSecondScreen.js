import {connect} from "react-redux";
import MapView , {Marker} from 'react-native-maps';
import React, {Component} from "react";
import {View, Text, TouchableWithoutFeedback, DatePickerAndroid, TextInput} from "react-native";

import Autocomplete from "./../../components/eventInputs/Autocomplete";
import {Button} from "./../../components/buttons";
import {CREATE_EVENT_URL, UPDATE_EVENT_URL} from "./../../constants/urls";
import {ON_CHANGE_EVENT, LOADER} from "./../../constants/action-types";
import {fetchGoogleApi, fetchApi} from "./../../services/api";
import {redirectTo, navigateBack} from "./../../components/navigation/navigate";
import Toolbar2 from "./../../components/toolbar/Toolbar2";

import styles from "./../../styles/styles";
import screenStyles from "./../../styles/screenStyles";

class EventSecondScreen extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            location: {},
            value: ""
        }
    }

    mapAutocomplete = (node) => {
        this.autocomplete = node;
        if(this.autocomplete && node) {
            this.autocomplete.focus();
        }
    }

    onVenueChange = async (text) => {
        try {
            this.setState({
                value: text
            });
            let response = await fetchGoogleApi(text, "autocomplete");
            if(typeof response === "object" && response.status === "OK") {
                this.setState({
                    location: response
                });
            }
        } catch (e) {
            console.log(e);
        }
    }

    handleSelectItem = async (data) => {
        if (data) {
            try {
                this.autocomplete.blur();
                const response = await fetchGoogleApi(data.place_id, "details");
                if(typeof response === "object" && response.status === "OK") {
                    const venue = {
                        description: data.description,
                        place_id: data.place_id,
                        latlng: {
                            lat: response.result.geometry.location.lat,
                            lng: response.result.geometry.location.lng
                        }
                    };
                    this.props.onChangeEvent("venue", venue);
                    this.setState({
                        value: "",
                        location: {}
                    });
                }
            } catch (e) {
                console.log(e);
            }
        }
    }

    handleRemoveVenue = () => {
        this.props.onChangeEvent("venue", null)
    }

    createEvent = async () => {
        let {setLoader, token} = this.props;
        let {title, category, date, description, venue} = this.props.event;
        try {
            const body = {title, category, date, description, venue};
            setLoader(true);
            const headers = {"x-auth": token}
            const response = await fetchApi(CREATE_EVENT_URL, "POST", body, headers);
            if (response.status === 200) {
                const event = await response.json();
                if (event.hasOwnProperty("errors")) {
                    throw new Error(event.message);
                } else {
                    redirectTo("user");
                    setLoader(false);
                }
            } else {
                throw new Error("Something went wrong. Please try again");
            }
        } catch (e) {
              setLoader(false);
              alert(e.message);
        }
    }

    updateEvent = async () => {
        let {setLoader, token, event} = this.props;
        let {title, category, date, description, venue} = this.props.event;
        try {
            const body = {title, category, date, description, venue};
            setLoader(true);
            const headers = {"x-auth": token};
            const response = await fetchApi(`${UPDATE_EVENT_URL}/${event._id}`, "PUT", body, headers);
            if (response.status === 200) {
                const res = await response.json();
                if (event.hasOwnProperty("errors")) {
                    throw new Error(event.message);
                } else if (res.nModified === 1 && res.ok ===1) {
                    redirectTo("user");
                    setLoader(false);
                } else {
                    throw new Error("Unable to update. Please try again");
                }
            } else {
                throw new Error("Something went wrong. Please try again");
            }
        } catch (e) {
              setLoader(false);
              alert(e.message);
        }
    }

    render() {
        const {venue} = this.props.event;
        const {event} = this.props;
        return (
          <View style={[styles.flex_1, screenStyles.createEventStyle.eventFromBackgroundColor]}>
              <Toolbar2 onIconClicked={navigateBack} />
              <View style={[screenStyles.createEventStyle.eventFormContainer, styles.flex_1]}>
                  {!venue ?
                      <Autocomplete
                          onVenueChange={this.onVenueChange}
                          value={this.state.value}
                          handleSelectItem={this.handleSelectItem}
                          style={screenStyles.createEventStyle.eventInputStyle}
                          mapElement={this.mapAutocomplete}
                          placeholder="Enter Venue"
                          placeholderColor="#ffffff"
                          data={this.state.location} /> :
                      <View style={styles.flex_1}>
                          <Text style={[screenStyles.createEventStyle.eventInputStyle, screenStyles.createEventStyle.eventSelectedText]} numberOfLines={1} onPress={this.handleRemoveVenue}>{venue.description}</Text>
                          <View style={[screenStyles.createEventStyle.mapViewStyle, styles.flex_1]}>
                              <MapView style={styles.flex_1}
                                  initialRegion={{
                                      latitude: venue.latlng.lat,
                                      longitude: venue.latlng.lng,
                                      latitudeDelta: 0.0900,
                                      longitudeDelta: 0.0500,
                                  }}>
                                  <Marker
                                    coordinate={{
                                      latitude: venue.latlng.lat,
                                      longitude: venue.latlng.lng
                                    }}
                                    title={venue.description}/>
                              </MapView>
                          </View>
                          <View style={[styles.fullWidth, styles.pullRight]}>
                              {(event._id && venue) &&
                                  <Button
                                      onPress={this.updateEvent}
                                      style={screenStyles.createEventStyle.eventInputButton}
                                      text="Update" />
                              }
                              {(!event._id && venue) &&
                                  <Button
                                      onPress={this.createEvent}
                                      style={screenStyles.createEventStyle.eventInputButton}
                                      text="Create" />
                              }
                          </View>
                      </View>
                  }
              </View>
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
    onChangeEvent:(property, value)=> dispatch({
        type: ON_CHANGE_EVENT,
        property,
        value,
    }),
    setLoader:(status) => dispatch({type: LOADER, status})
});

export default connect(mapStateToProps, mapDispatchToProps)(EventSecondScreen);
