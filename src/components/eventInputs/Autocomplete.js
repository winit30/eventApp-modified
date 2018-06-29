import {connect} from "react-redux";
import {ListItem} from 'react-native-elements';
import React, {Component} from "react";
import {TextInput, View, Text} from "react-native";

import styles from "./../../styles/styles";
import componentStyles from "./../../styles/componentStyles";

const defaultProps = {
    data: {
        predictions: [],
        style: {},
        value: "",
        onVenueChange: () => {},
        selectionColor: "#666666",
        placeholder: "",
        placeholderColor: "#666666"
    }
}

class Autocomplete extends Component<{}> {

    mapElement = (node) => {
        this.props.mapElement(node);
    }

    handleSelectItem = (data) => {
        this.props.handleSelectItem(data);
    }

    loadListItem = () => {
        if (this.props.data.predictions && this.props.data.predictions.length) {
            return this.props.data.predictions.map((data, i) => {
                if (data) {
                    const discList = data.description.split(",");
                    return (
                        <ListItem
                          onPress={ () => this.handleSelectItem(data)}
                          containerStyle={{backgroundColor:"#ffffff"}}
                          key={i}
                          title={<Text style={styles.listTitle}>{discList[0]}</Text>}
                          hideChevron={true}
                          leftIcon={{name:'place'}}
                          subtitle={
                              <View style={[styles.row, styles.listSubTitle]}>
                                <Text numberOfLines={1}>
                                  {discList.map((disc, i) => {
                                    if(i>0) {
                                        return (
                                              <Text key={i}>{disc.trim()} </Text>
                                        );
                                    }
                                  })}
                                </Text>
                              </View>
                          }/>
                    );
                }
            });
        }
    }

    render() {
        return (
            <View>
                <TextInput
                    ref={this.mapElement}
                    style={[componentStyles.eventInputStyle.textfield, this.props.style]}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                    placeholderTextColor = {this.props.placeholderColor}
                    onChangeText={this.props.onVenueChange}
                    underlineColorAndroid='rgba(0,0,0,0)' />
                {this.loadListItem()}
            </View>
        );
    }
}

const mapStateToProps = state => ({
    event: state.form.event
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Autocomplete);

Autocomplete.defaultProps = defaultProps;
