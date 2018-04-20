import {connect} from "react-redux";
import React, {Component} from "react";
import {ToolbarAndroid} from "react-native";

import styles from "./../../styles/styles";

defaultProps = {
  title: "",
  navIcon: "",
  onIconClicked: ""
}

class Toolbar extends Component<{}> {

    render() {
        return (
          <ToolbarAndroid
              style={styles.toolbar}
              navIcon={this.props.navIcon}
              title={this.props.title}
              onIconClicked={this.props.onIconClicked}/>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps )(Toolbar);

Toolbar.defaultProps = defaultProps;
