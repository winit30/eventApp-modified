import {Avatar, Icon} from 'react-native-elements';
import {connect} from "react-redux";
import React, {Component} from "react";
import {View, Text, TouchableNativeFeedback, UIManager, LayoutAnimation} from "react-native";

import TextField from "./../../../../components/eventInputs/TextField";

import styles from "./../../../../styles/styles";
import componentStyles from "./../../../../styles/componentStyles";

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
        const {userComment} = this.props;
        this.props.deleteComment(userComment._id, userComment.eventId);
        this._animate();
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
        const {userComment} = this.props;
        this.props.replyToComment(userComment._id, (params) => {
            if(params) {
                this.closeReplyTextField();
            }
        });
    }

    deleteReply = (commentId, replyId) => {
        this.props.handleDeleteReply(commentId, replyId);
        this._animate();
    }

    render() {
        const {userComment, user, selectedEvent} = this.props;
        return (
          <View style={styles.flex_1}>
              <View style={componentStyles.commentComponentStyle.commentContainer}>
                  <View style={componentStyles.commentComponentStyle.avatarContainer}>
                      <Avatar
                          medium
                          rounded
                          source={require("./../../../../assets/thumbnail.png")}
                          onPress={() => console.log("Works!")}
                          activeOpacity={0.7}
                          />
                  </View>
                  <View style={componentStyles.commentComponentStyle.commentTextContainer}>
                      <View style={componentStyles.commentComponentStyle.textContainer}>
                          <Text style={componentStyles.commentComponentStyle.commentedbyStyle}>{userComment ? userComment.commenter : ""}</Text>
                          <Text style={componentStyles.commentComponentStyle.commentTextStyle}>{userComment ? userComment.comment : ""}</Text>
                      </View>
                      {!this.state.isReply ?
                          <View style={componentStyles.commentComponentStyle.utilityContStyle.utilityContainer}>
                              {(this.props.showDelete || user._id === selectedEvent.organizerId) &&
                                  <Text style={componentStyles.commentComponentStyle.utilityContStyle.utilityToolStyle} onPress={this.deleteComment}>Delete</Text>
                              }
                              <Text style={componentStyles.commentComponentStyle.utilityContStyle.utilityToolStyle} onPress={this.openReplyTextField}>Reply</Text>
                              <Text style={componentStyles.commentComponentStyle.utilityContStyle.utilityToolStyle}>Report</Text>
                          </View>
                            :
                          <View style={componentStyles.commentComponentStyle.replyComponentStyle.replyContainer}>
                              <View style={componentStyles.commentComponentStyle.replyComponentStyle.replyTextfieldContainer}>
                                  <TextField style={componentStyles.commentComponentStyle.replyComponentStyle.replyTextFieldStyle} mapElement={this.mapElement} property="reply" placeholder="Reply" />
                              </View>
                              <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple("#fff", true)} onPress={this.replyToComment}>
                                  <View style={componentStyles.commentComponentStyle.replyComponentStyle.replyIconButton}>
                                      <Icon name='reply' type='material-community' color='#ffffff' />
                                  </View>
                              </TouchableNativeFeedback>
                          </View>
                      }
                      {this.state.isReply && <Text style={componentStyles.commentComponentStyle.replyComponentStyle.replyCloseButton} onPress={this.closeReplyTextField}>Cancel</Text>}
                      {(userComment && userComment.replies.length>0) && userComment.replies.map((r) => {
                          return(
                              <View style={componentStyles.commentComponentStyle.repliesContainer} key={r._id}>
                                  <View style={componentStyles.commentComponentStyle.avatarContainer}>
                                      <Avatar
                                          small
                                          rounded
                                          source={require("./../../../../assets/thumbnail.png")}
                                          onPress={() => console.log("Works!")}
                                          activeOpacity={0.7}
                                          />
                                  </View>
                                  <View style={componentStyles.commentComponentStyle.commentTextContainer}>
                                      <View style={componentStyles.commentComponentStyle.textContainer}>
                                          <Text style={componentStyles.commentComponentStyle.commentedbyStyle}>{r.replied}</Text>
                                          <Text style={componentStyles.commentComponentStyle.commentTextStyle}>{r.reply}</Text>
                                      </View>
                                      <View style={componentStyles.commentComponentStyle.utilityContStyle.utilityContainer}>
                                          {(r.repliedby === user._id || user._id === selectedEvent.organizerId) &&
                                              <Text style={componentStyles.commentComponentStyle.utilityContStyle.utilityToolStyle} onPress={() => this.deleteReply(userComment._id, r._id)}>Delete</Text>
                                          }
                                          <Text style={componentStyles.commentComponentStyle.utilityContStyle.utilityToolStyle} onPress={this.openReplyTextField}>Reply</Text>
                                          <Text style={componentStyles.commentComponentStyle.utilityContStyle.utilityToolStyle}>Report</Text>
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
    user: state.auth.user
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);

Comments.defaultProps = defaultProps;
