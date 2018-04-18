import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import styles from './../styles/styles';
import { Actions } from 'react-native-router-flux';
import Toolbar from './../components/toolbar/Toolbar';

class Dashboard extends Component<{}> {

  render() {
    return (
      <View style={styles.mainContainer}>
            <Toolbar title="Dashboard"/>
      </View>
      )
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
