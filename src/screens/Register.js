import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import styles from './../styles/styles';
import { Email, Password, Select, TextField } from './../components/inputs';
import { Button, LinkButton } from './../components/buttons';
import { Actions } from 'react-native-router-flux';

class Register extends Component<{}> {

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.authCont}>
          <Select />
          <TextField />
          <Email />
          <Password />
          <Button text="Register" />
        </View>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Already have an account? </Text>
          <LinkButton text="Login" onPress={Actions.pop}/>
        </View>
      </View>
      )
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
