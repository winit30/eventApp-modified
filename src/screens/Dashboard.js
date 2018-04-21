import {connect} from "react-redux";
import React, {Component} from "react";
import {View, Text} from "react-native";

import {Organizer} from "./users";

import styles from "./../styles/styles";

class Dashboard extends Component<{}> {

    render() {
        return (
          <View style={styles.mainContainer}>
              <Organizer/>
          </View>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
