import React, { Component } from 'react';
import { Text, View, StatusBar, Modal, ActivityIndicator } from 'react-native';

import styles from '../../styles/styles';

export default class Loader extends Component<{}> {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Modal animationType="fade" transparent={true} visible={this.props.loader} onRequestClose={()=>{
        console.log('modal closed');
      }}>
        <View style={styles.modalDesign}>
          <View style={styles.modalCont}>
            <ActivityIndicator size="large" />
          </View>
        </View>
      </Modal>
    )
  }
}
