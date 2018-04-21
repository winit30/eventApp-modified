import {connect} from "react-redux";
import {Card, ListItem, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {Component} from "react";
import {View, Text, ScrollView} from "react-native";

import DrawerContainer from "./../../components/drawer/DrawerContainer";
import {FloatingButton} from "./../../components/buttons";
import {fetchApi} from "./../../services/api";
import {GET_EVENT_URL, DELETE_EVENT_URL, UPDATE_EVENT_URL} from "./../../constants/urls";
import {navigateTo} from "./../../components/navigation/navigate";
import Toolbar from "./../../components/toolbar/Toolbar";

import styles from "./../../styles/styles";

class Organizer extends Component<{}> {

    componentDidMount() {
        this.loadEvents();
    }

    mapElement = (node) => {
        this.drawer = node && node;
    }

    onIconClicked = () => {
        this.drawer && this.drawer.openDrawer();
    }

    loadEvents = async () => {
        let {token, setLoader, setEvent} = this.props;
        try {
            const headers = {"x-auth": token}
            setLoader(true);
            const response = await fetchApi(GET_EVENT_URL, "GET", {}, headers);
            if (response.status === 200) {
                const events = await response.json();
                setEvent(events);
                setLoader(false);
            } else {
              throw new Error("Error");
            }
        } catch (e) {
            setLoader(false);
            console.log(e.message);
        }
    }

    deleteEvent = async (id) => {
        let {token, setLoader, setEvent, events} = this.props;
        try {
            const headers = {"x-auth": token}
            setLoader(true);
            const response = await fetchApi(`${DELETE_EVENT_URL}/${id}`, "DELETE", {}, headers);
            const res = await response.json();
            if(res.n === 1 && res.ok ===1) {
              const eventArray = events.filter((event) => {
                  return event._id !== id;
              });
              setEvent(eventArray);
              setLoader(false);
            } else {
               throw new Error("Unable to delete event.");
            }
        } catch (e) {
            setLoader(false);
            console.log(e.message);
        }
    }

    activateDeactivateEvent = async (isActive, id) => {
        let {token, setLoader, setEvent, events} = this.props;
        try {
            const body = {isActive}
            const headers = {"x-auth": token}
            setLoader(true);
            const response = await fetchApi(`${UPDATE_EVENT_URL}/${id}`, "PUT", body, headers);
            const res = await response.json();
            if(res.nModified === 1 && res.ok ===1) {
                const eventArray = events.map((event) => {
                    if(event._id === id) event.isActive = isActive;
                    return event;
                });
                setEvent(eventArray);
                setLoader(false);
            } else {
              throw new Error("Unable to activate event.");
            }
        } catch (e) {
            setLoader(false);
            console.log(e.message);
        }
    }

    render() {

        let {events} = this.props;

        return (
          <View style={styles.mainContainer}>
              <DrawerContainer mapElement={this.mapElement}>
                  <Toolbar title="Dashboard" onIconClicked={this.onIconClicked} navIcon={require("./../../assets/menu.png")}/>
                  {!events.length ?
                      <View style={styles.emptyDashboard}>
                        <Icon name="flask-empty-outline" size={70} color="#ccc" />
                        <Text style={styles.emptyDashboardText}>You have no events</Text>
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
                                <View style={styles.rowContainer}>
                                    <View style={styles.rowContainerChild}>
                                        <Button
                                          backgroundColor='#03A9F4'
                                          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                          title={event.isActive ? "INACTIVE" : "ACTIVE"} onPress={() => this.activateDeactivateEvent(!event.isActive, event._id)}/>
                                    </View>
                                    <View style={styles.rowContainerChild}>
                                        <Button
                                          backgroundColor='#03A9F4'
                                          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                          title='DELETE' onPress={() => this.deleteEvent(event._id)} />
                                    </View>
                                </View>
                              </Card>
                            )
                          })}
                          <View style={{paddingBottom:15}} />
                      </ScrollView>
                  }
                  <FloatingButton onPress={() => navigateTo("createEvent")}/>
              </DrawerContainer>
          </View>
        );
    }
}

const mapStateToProps = state => ({
    token: state.auth.token,
    events: state.event.events
});

const mapDispatchToProps = dispatch => ({
    setEvent: events => dispatch({
        type: "SET_EVENTS",
        events
    }),
    setLoader:(status) => dispatch({type:"LOADER", status})
});

export default connect(mapStateToProps, mapDispatchToProps)(Organizer);
