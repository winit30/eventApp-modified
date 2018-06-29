import {connect} from "react-redux";
import {Picker, View} from "react-native";
import React, { Component } from "react";

import componentStyles from "./../../styles/componentStyles";

class Select extends Component<{}> {

    render() {

        let {onChangeText, userType} = this.props;

        return (
            <View style={componentStyles.selectComponentStyle.selectPickerContainer}>
                <Picker
                    selectedValue={userType ? userType : "options"}
                    style={componentStyles.selectComponentStyle.selectPicker}
                    onValueChange={(itemValue, itemIndex) => onChangeText("userType", itemValue) }>
                    <Picker.Item label="Select user type" value="options" />
                    <Picker.Item label="Organizer" value="organizer" />
                    <Picker.Item label="Volunteer" value="volunteer" />
                </Picker>
                <View style={componentStyles.selectComponentStyle.pickerBorderBottom} />
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
