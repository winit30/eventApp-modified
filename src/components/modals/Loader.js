import {ActivityIndicator, Modal, Text, StatusBar, View} from "react-native";
import {connect} from "react-redux";
import React, {Component} from "react";

import styles from "../../styles/styles";

class Loader extends Component<{}> {

    render() {
        return(
            <Modal animationType="fade" transparent={true} visible={this.props.loader} onRequestClose={() => {
              console.log("modal closed");
            }}>
                <View style={styles.modalDesign}>
                    <View style={styles.modalCont}>
                        <ActivityIndicator size="large" />
                    </View>
                </View>
            </Modal>
        );
    }
}

const mapStateToProps = state => ({
    loader: state.utils.loader
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Loader);
