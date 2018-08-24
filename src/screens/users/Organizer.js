import {connect} from "react-redux";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MapView , {Marker} from 'react-native-maps';
import React, {Component} from "react";
import {View, Text, ScrollView, TouchableNativeFeedback} from "react-native";

import DrawerContainer from "./../../components/drawer/DrawerContainer";
import {FloatingButton} from "./../../components/buttons";
import {fetchApi} from "./../../services/api";
import {GET_EVENT_URL, DELETE_EVENT_URL, UPDATE_EVENT_URL, GET_APPLICATION_COUNT_URL} from "./../../constants/urls";
import {LOADER, ON_CHANGE_EVENT, SET_EVENTS} from "./../../constants/action-types";
import {navigateTo} from "./../../components/navigation/navigate";
import Toolbar from "./../../components/toolbar/Toolbar";

import theme from "./../../styles/theme";
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

    render() {

        let {events} = this.props;

        return (
          <View style={[styles.flex_1, screenStyles.appBackgroundColor]}>
              <DrawerContainer mapElement={this.mapElement} onCloseDrawer={this.closeDrawer}>
                  <Toolbar title="Dashboard" onIconClicked={this.onIconClicked} navIcon={require("./../../assets/menu.png")}/>
                  {!events.length ?
                      <View style={componentStyles.emptyDashboardStyle.emptyDashboard}>
                        <Icon name="flask-empty-outline" size={70} color="#ffffff" />
                        <Text style={componentStyles.emptyDashboardStyle.emptyDashboardText}>You have no events</Text>
                      </View> :
                      <ScrollView>
                          {events.map((event, index) => {
                            return(
                              <TouchableNativeFeedback key={index} onPress={() => navigateTo("viewEvent", {selectedEvent: event})}>
                                  <View style={componentStyles.cardComponentStyle.containerStyle}>
                                      <View style={componentStyles.cardComponentStyle.iconStyle}>
                                          <Icon name="music" size={46} color={theme.primary.light} />
                                      </View>
                                      <View style={componentStyles.cardComponentStyle.contentStyle}>
                                          <Text numberOfLines={1} style={componentStyles.cardComponentStyle.titleStyle}>{event.title}</Text>
                                          <Text numberOfLines={1} style={componentStyles.cardComponentStyle.subTitleStyle}>{event.description}</Text>
                                      </View>
                                  </View>
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
    onChange: (property, value)=> dispatch({
        type: ON_CHANGE_EVENT,
        property,
        value,
    }),
    resetEvent: () => dispatch({type:"RESET_EVENT"}),
    setEvent: events => dispatch({
        type: SET_EVENTS,
        events
    }),
    setLoader:(status) => dispatch({type: LOADER, status})
});

export default connect(mapStateToProps, mapDispatchToProps)(Organizer);
