import {connect} from "react-redux";
import {Picker, View} from "react-native";
import React, { Component } from "react";

import styles from "./../../styles/styles";

class Select extends Component<{}> {

    render() {

        let {onChangeText, userType} = this.props;

        return (
            <View style={styles.pickerCont}>
                <Picker
                    selectedValue={userType ? userType : "options"}
                    style={styles.selectPicker}
                    onValueChange={(itemValue, itemIndex) => onChangeText("userType", itemValue) }>
                    <Picker.Item label="Select user type" value="options" />
                    <Picker.Item label="Organizer" value="organizer" />
                    <Picker.Item label="Volunteer" value="volunteer" />
                </Picker>
                <View style={styles.pickerBorderBottom} />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    userType: state.form.form.userType
});

const mapDispatchToProps = dispatch => ({
    onChangeText: (property, value) => dispatch({
        type:"ON_CHANGE_TEXT",
        property,
        value
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(Select);
