import {connect} from "react-redux";
import {Card, ListItem, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {Component} from "react";
import {View, Text, Picker, ScrollView} from "react-native";

import DrawerContainer from "./../../components/drawer/DrawerContainer";
import {fetchApi} from "./../../services/api";
import {GET_EVENT_URL} from "./../../constants/urls";
import Toolbar from "./../../components/toolbar/Toolbar";

import styles from "./../../styles/styles";

class Volunteer extends Component<{}> {

    componentDidMount() {
        const {city} = this.props;
        console.log("here");
        if(city) {
            this.loadEventsForSelectedCity(city);
        }
    }

    mapElement = (node) => {
        this.drawer = node && node;
    }

    onIconClicked = () => {
        this.drawer && this.drawer.openDrawer();
    }

    loadEventsForSelectedCity = async (city) => {
        let {token, setLoader, setEvent} = this.props;
        try {
            const headers = {"x-auth": token}
            setLoader(true);
            const response = await fetchApi(`${GET_EVENT_URL}/${city}`, "GET", {}, headers);
            if (response.status === 200) {
                const events = await response.json();
                console.log(events);
                activeEvents = events.filter((event) => event.isActive);
                console.log(activeEvents);
                setEvent(activeEvents);
                setLoader(false);
            } else {
              throw new Error("Error");
            }
        } catch (e) {
            setLoader(false);
            alert(e.message);
        }
    }

    onChangeSelect = (value) => {
        this.props.onChangeSelect(value);
        this.loadEventsForSelectedCity(value);
    }

    render() {
        let {city, events} = this.props;
        return (
          <View style={styles.mainContainer}>
              <DrawerContainer mapElement={this.mapElement}>
                  <Toolbar title="Dashboard" onIconClicked={this.onIconClicked} navIcon={require("./../../assets/menu.png")}/>
                  {!events.length ?
                  <View style={[styles.pickerCont, styles.selectCityCont]}>
                      <Picker
                          selectedValue={city ? city : "option"}
                          style={[styles.selectPicker, styles.selectCityPicker]}
                          onValueChange={(itemValue, itemIndex) => this.onChangeSelect(itemValue)}>
                          <Picker.Item label="Select your city" value="options" />
                          <Picker.Item label="Bangalore" value="bangalore" />
                          <Picker.Item label="Pune" value="pune" />
                      </Picker>
                      <View style={[styles.pickerBorderBottom, styles.selectCityBorder]} />
                  </View> :
                  <ScrollView >
                      {events.map((event, index) => {
                        return(
                          <Card
                            key={index}
                            title={event.title}
                            image={require('./../../assets/default-thumbnail.jpg')}>
                            <Text>{event.date}</Text>
                            <Text>{event.category}</Text>
                            <Text style={styles.eventDescription}>{event.description}</Text>
                            <Button
                              backgroundColor='#03A9F4'
                              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                              title='VIEW NOW' />
                          </Card>
                        )
                      })}
                      <View style={{paddingBottom:15}} />
                  </ScrollView>
                  }
              </DrawerContainer>
          </View>
        );
    }
}

const mapStateToProps = state => ({
    city: state.event.city,
    token: state.auth.token,
    events: state.event.events
});

const mapDispatchToProps = dispatch => ({
    onChangeSelect: city => dispatch({type: "SET_CITY", city}),
    setEvent: events => dispatch({
        type: "SET_EVENTS",
        events
    }),
    setLoader:(status) => dispatch({type:"LOADER", status})
});

export default connect(mapStateToProps, mapDispatchToProps)(Volunteer);
