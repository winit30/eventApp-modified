import {connect} from "react-redux";
import {Card, ListItem, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {Component} from "react";
import {View, Text, ScrollView} from "react-native";

import DrawerContainer from "./../../components/drawer/DrawerContainer";
import {FloatingButton} from "./../../components/buttons";
import {fetchApi} from "./../../services/api";
import {GET_EVENT_URL} from "./../../constants/urls";
import {navigateTo} from "./../../components/navigation/navigate";
import Toolbar from "./../../components/toolbar/Toolbar";

import styles from "./../../styles/styles";

class Organizer extends Component<{}> {

    componentDidMount(){
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
            const response = await fetchApi(GET_EVENT_URL, "GET", {}, headers);
            if (response.status === 200) {
                const events = await response.json();
                setEvent(events);
            }
        } catch (e) {
            console.log(e);
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
                                <Text>
                                  {event.date}
                                </Text>
                                <Text>
                                  {event.category}
                                </Text>
                                <Text style={styles.eventDescription}>
                                  {event.description}
                                </Text>
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
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(Organizer);
