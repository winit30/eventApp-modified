import {connect} from "react-redux";
import {ListItem} from 'react-native-elements';
import React, {Component} from "react";
import {TextInput, View, Text} from "react-native";

import styles from "./../../styles/styles";

const defaultProps = {
    data: {
        predictions: []
    }
}

class Autocomplete extends Component<{}> {

    handleSelectItem = (data) => {
        this.autoComplete.blur();
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
                          }
                        />
                    );
                }
            });
        }
    }

    render() {
        return (
            <View style={styles.formCont}>
                <TextInput ref={input => this.autoComplete = input} style={styles.eventTextInput} value={this.props.value} onChangeText={this.props.onVenueChange} />
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
