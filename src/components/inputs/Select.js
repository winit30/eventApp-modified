import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker } from 'react-native';
import styles from './../../styles/styles';

class Select extends Component<{}> {

  render() {

    let {mapInput, onChangeText, userType} = this.props;

    return (
      <Picker
        selectedValue={userType ? userType : "options"}
        style={{ height: 50, width: "88%", color: "#dedede"}}
        mode="dropdown"
        onValueChange={(itemValue, itemIndex) => onChangeText("userType", itemValue) }>
        <Picker.Item label="Select type" value="options" />
        <Picker.Item label="Organizer" value="organizer" />
        <Picker.Item label="Volunteer" value="volunteer" />
      </Picker>
      );
  }
}

const mapStateToProps = state => ({
    userType: state.form.form.userType
});

const mapDispatchToProps = dispatch => ({
    mapInput: (property, node) => dispatch({
        type:'MAP_INPUT',
        property,
        node
    }),

    onChangeText: (property, value) => dispatch({
        type:'ON_CHANGE_TEXT',
        property,
        value,
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(Select);
