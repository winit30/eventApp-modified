import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, Text} from 'react-native';
import styles from './../../styles/styles';

class LinkButton extends Component<{}> {

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text style={styles.linkButton}>{this.props.text}</Text>
      </TouchableOpacity>
      );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(LinkButton);
