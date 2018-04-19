import {connect} from "react-redux";
import React, {Component} from "react";
import {ToolbarAndroid} from "react-native";

import styles from "./../../styles/styles";

class Toolbar extends Component<{}> {

    openDrawer() {
        this.props.drawer.openDrawer();
    }

    render() {
        return (
          <ToolbarAndroid
              style={styles.toolbar}
              navIcon={require("../../assets/menu.png")}
              title={this.props.title}
              onIconClicked={()=>{
                  this.openDrawer();
            }}/>
        );
    }
}

const mapStateToProps = state => ({
    drawer: state.input.inputs.drawer
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps )(Toolbar);
