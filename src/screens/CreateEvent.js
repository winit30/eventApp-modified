import {connect} from "react-redux";
import React, {Component} from "react";
import {View, Text} from "react-native";

import Toolbar from "./../components/toolbar/Toolbar";
import {navigateBack} from "./../components/navigation/navigate";

import styles from "./../styles/styles";

class CreateEvent extends Component<{}> {

    render() {
        return (
          <View style={styles.mainContainer}>
              <Toolbar title="Create Event" onIconClicked={navigateBack} navIcon={require("./../assets/back.png")}/>
          </View>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
