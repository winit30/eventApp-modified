import {Avatar, Icon} from 'react-native-elements';
import {connect} from "react-redux";
import React, {Component} from "react";
import {View, Text, TouchableNativeFeedback, UIManager, LayoutAnimation} from "react-native";

import TextField from "./../../components/eventInputs/TextField";

import styles from "./../../styles/styles";
import style from "./../../styles/ComponentStyles";

const defaultProps = {
    id: "",
    replyToComment: () => {},
    comments: "",
    commentBy: "",
    replies: [],
    deleteComment: () => {},
    deleteIcon: false
}

class Comments extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            isReply: false
        };
    }

    componentDidMount() {
        this._animate();
    }

    _animate = () => {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.easeInEaseOut();
    }

    deleteComment = () => {
        this.props.deleteComment(this.props.id);
    }

    openReplyTextField = () => {
        this.setState({
            isReply: true
        });
        this._animate();
    }

    closeReplyTextField = () => {
        this.setState({
            isReply: false
        });
        this._animate();
    }

    replyToComment = () => {
        const {id} = this.props;
        this.props.replyToComment(id, (params) => {
            if(params) {
                this.closeReplyTextField();
            }
        });
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
                      {this.state.isReply ?
                          <View style={[style.viewEvent.commentBox, style.viewEvent.marginLeft16]}>
                              <View style={style.viewEvent.textField}>
                                  <TextField style={style.viewEvent.replyTextField} mapElement={this.mapElement} property="reply" placeholder="Reply" />
                              </View>
                              <View style={style.viewEvent.replyIcon}>
                                  <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple("#fff", true)} onPress={this.replyToComment}>
                                      <Icon name='reply' type='material-community' color='#ffffff' />
                                  </TouchableNativeFeedback>
                              </View>
                          </View> :
                          <View style={style.Comments.toolsCont}>
                              {this.props.deleteIcon &&
                                  <Text style={style.Comments.tools} onPress={this.deleteComment}>Delete</Text>
                              }
                              <Text style={style.Comments.tools} onPress={this.openReplyTextField}>Reply</Text>
                              <Text style={style.Comments.tools}>Report</Text>
                          </View>
                      }
                      {this.state.isReply && <Text style={style.viewEvent.cancelReply} onPress={this.closeReplyTextField}>Cancel</Text>}
                      {(this.props.replies.length>0) && this.props.replies.map((r) => {
                          return(
                              <View style={style.Comments.repliesCont} key={r._id}>
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
                                          <Text style={style.Comments.commentedby}>{r.repliedby}</Text>
                                          <Text>{r.reply}</Text>
                                      </View>
                                  </View>
                              </View>
                          );
                      })}
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

Comments.defaultProps = defaultProps;
