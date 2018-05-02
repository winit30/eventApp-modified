import {Button} from 'react-native-elements';
import {connect} from "react-redux";
import React, {Component} from "react";
import {View, Text, TouchableWithoutFeedback, DatePickerAndroid, TextInput} from "react-native";

import Autocomplete from "./../../components/eventInputs/Autocomplete";
import {fetchAutoComplete} from "./../../services/api";
import {navigateTo, navigateBack} from "./../../components/navigation/navigate";

import styles from "./../../styles/styles";

class EventSecondScreen extends Component<{}> {
    constructor(props) {
        super(props)
        this.state = {
            location: {},
            value: "",
            isValueSelected: false
        }
    }

    onVenueChange = async (text) => {
        try {
            this.setState({
                value: text
            });
            let response = await fetchAutoComplete(text);
            if(typeof response === "object") {
                this.setState({
                    location: response
                });
            }
        } catch (e) {
            console.log(e);
        }
    }

    handleSelectItem = (data) => {
        if (data) {
          this.setState({
              value: data.description,
              location: [],
              isValueSelected: true
          });
        }
    }

    handleRemoveValue = () => {
        this.setState({
            value: "",
            location: [],
            isValueSelected: false
        });
    }

    render() {
        return (
          <View style={styles.mainContainer}>
            <View style={styles.autocompleteHight}>
                {!this.state.isValueSelected ?
                    <Autocomplete
                        onVenueChange={this.onVenueChange}
                        value={this.state.value}
                        handleSelectItem={this.handleSelectItem}
                        data={this.state.location} /> :
                    <View style={styles.formCont}>
                        <Text style={[styles.eventTextInput, styles.eventSelectedText]} numberOfLines={1} onPress={this.handleRemoveValue}>{this.state.value}</Text>
                    </View>
                }
            </View>
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
                          title="NEXT" onPress={() => navigateTo("thirdScreen")} />
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
