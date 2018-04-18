import React, { Component } from 'react';
import {connect} from 'react-redux';
import { ToolbarAndroid  } from 'react-native';
import styles from './../../styles/styles';


class Toolbar extends Component<{}> {

  constructor(props) {
    super(props)
    this.openDrawer = this.openDrawer.bind(this);
  }

  openDrawer() {
      this.props.drawer.openDrawer();
   }

  render() {
    return (
      <ToolbarAndroid
          style={styles.toolbar}
          navIcon={require('../../assets/menu.png')}
          title={this.props.title}
          onIconClicked={()=>{
              this.openDrawer();
        }}/>
    )
  }

}


const mapStateToProps = state => ({
    drawer: state.input.inputs.drawer
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps )(Toolbar);
