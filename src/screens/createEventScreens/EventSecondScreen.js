import {Button} from 'react-native-elements';
import {connect} from "react-redux";
import MapView , {Marker} from 'react-native-maps';
import React, {Component} from "react";
import {View, Text, TouchableWithoutFeedback, DatePickerAndroid, TextInput} from "react-native";

import Autocomplete from "./../../components/eventInputs/Autocomplete";
import {CREATE_EVENT_URL} from "./../../constants/urls";
import {fetchGoogleApi, fetchApi} from "./../../services/api";
import {redirectTo, navigateBack} from "./../../components/navigation/navigate";

import styles from "./../../styles/styles";

class EventSecondScreen extends Component<{}> {
    constructor(props) {
        super(props)
        this.state = {
            location: {},
            value: "",
            isValueSelected: false,
            locationDetails: {}
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
                    this.props.onChange("venue", venue)
                    this.setState({
                        locationDetails: response,
                        value: data.description,
                        location: {},
                        isValueSelected: true
                    });
                }
            } catch (e) {
                console.log(e);
            }
        }
    }

    handleRemoveValue = () => {
        this.setState({
            value: "",
            location: {},
            isValueSelected: false,
            locationDetails: {}
        });
    }

    createEvent = async () => {
        let {setLoader, token, events, setEvent} = this.props;
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
                    const eventArray = events.slice();
                    eventArray.push(event);
                    setEvent(eventArray);
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

    render() {
        return (
          <View style={styles.mainContainer}>
            {!this.state.isValueSelected ?
                <Autocomplete
                    onVenueChange={this.onVenueChange}
                    value={this.state.value}
                    handleSelectItem={this.handleSelectItem}
                    mapElement={this.mapAutocomplete}
                    data={this.state.location} /> :
                <View style={[styles.formCont, styles.autocompleteHight]}>
                    <Text style={[styles.eventTextInput, styles.eventSelectedText]} numberOfLines={1} onPress={this.handleRemoveValue}>{this.state.value}</Text>
                    <MapView style={styles.drawer}
                        initialRegion={{
                            latitude: this.state.locationDetails.result.geometry.location.lat,
                            longitude: this.state.locationDetails.result.geometry.location.lng,
                            latitudeDelta: 0.0900,
                            longitudeDelta: 0.0500,
                        }}>
                        <Marker
                          coordinate={{
                            latitude: this.state.locationDetails.result.geometry.location.lat,
                            longitude: this.state.locationDetails.result.geometry.location.lng,
                          }}
                          title={this.state.locationDetails.result.name}
                          description={this.state.locationDetails.result.formatted_address}
                        />
                    </MapView>
                </View>
            }

            <View style={styles.rowContainer}>
                <View style={styles.rowContainerChild}>
                    <Button
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title="BACK" onPress={navigateBack}/>
                </View>
                {this.state.isValueSelected &&
                    <View style={styles.rowContainerChild}>
                        <Button
                          backgroundColor='#03A9F4'
                          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                          title="NEXT" onPress={this.createEvent} />
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

export default connect(mapStateToProps, mapDispatchToProps)(EventSecondScreen);
