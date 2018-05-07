import {Avatar, Icon} from 'react-native-elements';
import {connect} from "react-redux";
import React, {Component} from "react";
import {View, Text} from "react-native";

import styles from "./../../styles/styles";
import style from "./../../styles/ComponentStyles";

class Comments extends Component<{}> {

    deleteComment = () => {
        console.log(this.props.id);
        this.props.deleteComment(this.props.id);
    }

    render() {
        return (
          <View style={styles.mainContainer}>
              <View style={style.Comments.commentsCont}>
                  <View style={style.Comments.avatar}>
                      <Avatar
                          medium
                          rounded
                          source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
                          onPress={() => console.log("Works!")}
                          activeOpacity={0.7}
                          />
                  </View>
                  <View style={style.Comments.textCommentCont}>
                      <View style={style.Comments.textCont}>
                          <Text style={style.Comments.commentedby}>{this.props.commentBy}</Text>
                          <Text>{this.props.comments}</Text>
                      </View>
                      <View style={style.Comments.toolsCont}>
                          {this.props.deleteIcon &&
                              <Text style={style.Comments.tools} onPress={this.deleteComment}>Delete</Text>
                          }
                          <Text style={style.Comments.tools}>Reply</Text>
                          <Text style={style.Comments.tools}>Report</Text>
                      </View>
                  </View>
              </View>
          </View>
        );
    }
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps )(Comments);
