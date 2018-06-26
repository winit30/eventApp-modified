import {connect} from "react-redux";
import {Card, ListItem, Button, Divider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MapView , {Marker} from 'react-native-maps';
import React, {Component} from "react";
import {View, Text, ScrollView, TouchableNativeFeedback} from "react-native";

import DrawerContainer from "./../../components/drawer/DrawerContainer";
import {FloatingButton} from "./../../components/buttons";
import {fetchApi} from "./../../services/api";
import {GET_EVENT_URL, DELETE_EVENT_URL, UPDATE_EVENT_URL, GET_APPLICATION_COUNT_URL} from "./../../constants/urls";
import {navigateTo} from "./../../components/navigation/navigate";
import Toolbar from "./../../components/toolbar/Toolbar";

import styles from "./../../styles/styles";
import screenStyles from "./../../styles/screenStyles";
import componentStyles from "./../../styles/componentStyles";

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

    closeDrawer = () => {
        this.drawer && this.drawer.closeDrawer();
    }

    navigateToCreateScreen = () => {
        this.props.resetEvent();
        navigateTo("createEvent");
    }

    loadEvents = async () => {
        let {token, setLoader, setEvent} = this.props;
        try {
            const headers = {"x-auth": token};
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
            alert(e.message);
        }
    }

    editEvent = (id) => {
        const {events, onChange} = this.props;
        let eventInstance = JSON.parse(JSON.stringify(events));
        eventInstance = eventInstance.filter(event => event._id === id)[0];
        for(const key in eventInstance) {
            onChange(key, eventInstance[key]);
        }
        navigateTo("createEvent");
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
            alert(e.message);
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
            alert(e.message);
        }
    }

    hasNotification = (event) => {
        if (event.application) {
            const notSeen = event.application.appliers.filter((applier, index) => {
                return applier.status === "notseen";
            });
            if(notSeen && notSeen.length) {
                return (
                    <View style={{position: "relative"}}>
                        <Icon style={{color: "#cccccc"}} name="bell" size={24} color="#333" />
                        <Text style={{color: "red", position: "absolute", bottom: 0, right: 0, zIndex:1, fontSize: 16, fontWeight: "500"}}>{notSeen.length}</Text>
                    </View>
                );
            }
        } else {
            return (
              <Icon style={{color: "#dddddd"}} name="bell" size={24} color="#333" />
            );
        }
    }

    render() {

        let {events} = this.props;

        return (
          <View style={[styles.flex_1, screenStyles.appBackgroundColor]}>
              <DrawerContainer mapElement={this.mapElement} onCloseDrawer={this.closeDrawer}>
                  <Toolbar title="Dashboard" onIconClicked={this.onIconClicked} navIcon={require("./../../assets/menu.png")}/>
                  {!events.length ?
                      <View style={styles.emptyDashboard}>
                        <Icon name="flask-empty-outline" size={70} color="#ccc" />
                        <Text style={styles.emptyDashboardText}>You have no events</Text>
                      </View> :
                      <ScrollView>
                          {events.map((event, index) => {
                            return(
                              <TouchableNativeFeedback onPress={() => navigateTo("viewEvent", {selectedEvent: event})}>
                                  <Card
                                    containerStyle={componentStyles.cardComponentStyle.containerStyle}
                                    key={index}>
                                      <Text style={componentStyles.cardComponentStyle.titleStyle}>{event.title.toUpperCase()}</Text>
                                      <Text style={componentStyles.cardComponentStyle.subTitleStyle}>{event.description}</Text>
                                  </Card>
                              </TouchableNativeFeedback>
                            )
                          }).reverse()}
                          <View style={{paddingBottom:15}} />
                      </ScrollView>
                  }
                  <FloatingButton onPress={this.navigateToCreateScreen}/>
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
    onChange:(property, value)=> dispatch({
        type:"ON_CHANGE_EVENT",
        property,
        value,
    }),
    resetEvent:() => dispatch({type:"RESET_EVENT"}),
    setEvent: events => dispatch({
        type: "SET_EVENTS",
        events
    }),
    setLoader:(status) => dispatch({type:"LOADER", status})
});

export default connect(mapStateToProps, mapDispatchToProps)(Organizer);
