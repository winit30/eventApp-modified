import {Button} from 'react-native-elements';
import {connect} from "react-redux";
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import React, {Component} from "react";
import {View, Text, TouchableWithoutFeedback, DatePickerAndroid, TextInput} from "react-native";

import Autocomplete from "./../../components/eventInputs/Autocomplete";
import {fetchAutoComplete, fetchDetails} from "./../../services/api";
import {navigateTo, navigateBack} from "./../../components/navigation/navigate";

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
            let response = await fetchAutoComplete(text);
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
                const response = await fetchDetails(data.place_id);
                if(typeof response === "object" && response.status === "OK") {
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
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
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
                          title="NEXT" onPress={() => {console.log("boom");}} />
                    </View>
                }
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
