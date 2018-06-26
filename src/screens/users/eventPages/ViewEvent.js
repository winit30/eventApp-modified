import {connect} from "react-redux";
import {Button, List, ListItem, Icon} from "react-native-elements";
import MapView , {Marker} from "react-native-maps";
import React, {Component} from "react";
import {View, Text, ScrollView, TouchableNativeFeedback, Keyboard} from "react-native";
import _ from "lodash";

import {ADD_COMMENT_URL, GET_COMMENT_URL, DELETE_COMMENT_URL, REPLY_COMMENT_URL, DELETE_REPLY_URL, APPLY_EVENT_URL} from "./../../../constants/urls";
import BottomToolBar from "./../../../components/toolbar/BottomToolBar";
import Comments from "./../../../components/comments/Comments";
import {fetchApi} from "./../../../services/api";
import TextField from "./../../../components/eventInputs/TextField";

import styles from "./../../../styles/styles";
import style from "./../../../styles/ComponentStyles";

class ViewEvent extends Component<{}> {

    componentDidMount() {
        this.loadComments();
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    }

    componentWillUnmount() {
        this.keyboardDidShowListener = Keyboard.removeListener('keyboardDidShow', this._keyboardDidShow);
    }

    _keyboardDidShow = () => {
        this.scrollView.scrollToEnd({animated: true});
     }

    loadComments = async () => {
        const {selectedEvent, token, setLoader, setComments} = this.props;
        try {
            setLoader(true);
            const headers = {"x-auth": token}
            const response = await fetchApi(`${GET_COMMENT_URL}/${selectedEvent._id}`, "GET", {}, headers);
            if(response.status === 200) {
                const comments = await response.json();
                if(comments.hasOwnProperty("errors")) {
                    throw new Error("Unable to fetch comment");
                }
                setComments(comments);
                setLoader(false);
            } else {
              throw new Error("Unable to fetch comments");
            }
            setLoader(false);
        } catch (e) {
            alert(e.message);
            setLoader(false);
        }
    }

    addComment = async () => {
        const {selectedEvent, user, token, setLoader, comments, setComments, resetProperty} = this.props;
        const {comment} = this.props.event;
        try {
            const body = {
                eventId: selectedEvent._id,
                commentedby: user._id,
                commenter: user.name,
                comment
            };
            setLoader(true);
            const headers = {"x-auth": token};
            const response = await fetchApi(ADD_COMMENT_URL, "POST", body, headers);
            if (response.status === 200) {
                const res = await response.json();
                if(res.hasOwnProperty("errors")) {
                    throw new Error("Unable to comment");
                }
                const commentsArray = JSON.parse(JSON.stringify(comments));
                commentsArray.push(res);
                setComments(commentsArray);
                resetProperty("comment");
                setLoader(false);
            } else {
                throw new Error("Unable to comment");
            }
        } catch (e) {
            alert(e.message);
            setLoader(false);
        }
    }

    _deleteComment = async (id, eventId) => {
        const {selectedEvent, user, token, setLoader, comments, setComments} = this.props;
        try {
            const body = {eventId};
            setLoader(true);
            const headers = {"x-auth": token}
            const response = await fetchApi(`${DELETE_COMMENT_URL}/${id}`, "PUT", body, headers);
            const res = await response.json();
            if(res && res.n === 1) {
                let commentsArray = JSON.parse(JSON.stringify(comments));
                commentsArray = commentsArray.filter(c => c._id !== id);
                setComments(commentsArray);
                setLoader(false);
            } else {
               throw new Error("Unable to delete comment");
            }
        } catch (e) {
            alert(e.message);
            setLoader(false);
        }
    }

    replyToComment = async (commentId, cb) => {
        const {selectedEvent, user, token, setLoader, comments, setComments, resetProperty} = this.props;
        const {reply} = this.props.event;
        try {
            const body = {
                repliedby: user._id,
                replied: user.name,
                reply
            };
            setLoader(true);
            const headers = {"x-auth": token};
            const response = await fetchApi(`${REPLY_COMMENT_URL}/${commentId}`, "PUT", body, headers);
            const res = await response.json();
            if (res.hasOwnProperty("errors")) {
                throw new Error("Unable to reply");
            } else {
                let commentsArray = JSON.parse(JSON.stringify(comments));
                commentsArray = commentsArray.map(c => {
                    if (c._id === res._id) {
                      return res;
                    } else {
                      return c;
                    }
                });
                setComments(commentsArray);
                cb(true);
                resetProperty("reply");
                setLoader(false);
            }
        } catch (e) {
            console.log(e.message);
            setLoader(false);
        }
    }

    handleDeleteReply = async (commentId, replyId) => {
        const {token, setLoader, comments, setComments} = this.props;
        try {
            const body = {
                _id: replyId
            };
            setLoader(true);
            const headers = {"x-auth": token};
            const response = await fetchApi(`${DELETE_REPLY_URL}/${commentId}`, "PUT", body, headers);
            const res = await response.json();
            if(res && res.n === 1 && res.nModified === 1) {
                let commentsArray = JSON.parse(JSON.stringify(comments));
                commentsArray = commentsArray.map(c => {
                    if(c.replies.length) {
                      c.replies = c.replies.filter(r => {
                          if(r._id !== body._id) {
                            return true;
                          }
                      });
                    }
                    return c;
                });
                setComments(commentsArray);
                setLoader(false);
            } else {
                throw new Error("Unable to delete reply");
            }
        } catch (e) {
            console.log(e.message);
            setLoader(false);
        }
    }

    _createCommentList = () => {
        const {comments, user, selectedEvent} = this.props;
        if(comments.length) {
            return comments.map(c => {
                if (c) {
                    return (
                        <Comments key={c._id} selectedEvent={selectedEvent} userComment={c} handleDeleteReply={this.handleDeleteReply} replyToComment={this.replyToComment} deleteComment={this._deleteComment} showDelete={(user._id === c.commentedby)} />
                    );
                }
            });
        }
    }

    applyEvent = async () => {
        const {selectedEvent, setLoader, token, addApplierToEvent} = this.props;
        let event = JSON.parse(JSON.stringify(selectedEvent));
        try {
            const body = {eventId: selectedEvent._id};
            setLoader(true);
            const headers = {"x-auth": token};
            const response = await fetchApi(APPLY_EVENT_URL, "POST", body, headers);
            const res = await response.json();
            if(res.applier && Object.keys(res.applier).length > 0) {
                event.applier = res.applier;
            }
            addApplierToEvent(event);
            setLoader(false);
        } catch (e) {
            setLoader(false);
            console.log(e);
        }
    }

    renderApplyButton = (event) => {
        if(event.applier && Object.keys(event.applier).length > 0) {
            return (
              <View>
                  <Text>You have applied for this event.</Text>
                  <Text>Status: {event.applier.status}</Text>
              </View>
            )
        } else {
            return (
                <Button
                  backgroundColor="#03A9F4"
                  buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                  title="Apply Now" onPress={this.applyEvent} />
            )
        }
    }

    render() {
        const {selectedEvent, comments, user, events} = this.props;
        const event = _.find(events, {_id: selectedEvent._id});
        return (
          <View style={styles.mainContainer}>
              <ScrollView ref={scrollView => this.scrollView = scrollView}>
                  <MapView style={{height: 200, width: "100%", marginBottom: 16}}
                      initialRegion={{
                          latitude: event.venue.latlng.lat,
                          longitude: event.venue.latlng.lng,
                          latitudeDelta: 0.0900,
                          longitudeDelta: 0.0500,
                      }}>
                      <Marker
                        coordinate={{
                            latitude: event.venue.latlng.lat,
                            longitude: event.venue.latlng.lng
                        }}
                        title={event.venue.description}
                      />
                  </MapView>
                  <View style={style.viewEvent.info}>
                      <Text style={style.viewEvent.title}>{event.title}</Text>
                      <Text style={style.viewEvent.date}>{event.date}</Text>
                      <Text style={style.viewEvent.date}>{event.applyCount} people are going</Text>
                      <Text style={style.viewEvent.category}>{event.category}</Text>
                      <Text style={style.viewEvent.description}>{event.description}</Text>
                      {(user && user.userType !== "organizer") && this.renderApplyButton(event)}
                  </View>
                  {this._createCommentList()}
                  <View style={{marginBottom:70}}></View>
              </ScrollView>
              <BottomToolBar>
                  <View style={style.viewEvent.commentBox}>
                    <View style={style.viewEvent.textField}>
                        <TextField mapElement={this.mapElement} property="comment" placeholder="Comment" />
                    </View>
                    <View style={style.viewEvent.sendIcon}>
                        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple("#fff", true)} onPress={this.addComment}>
                            <Icon name='send' type='material-community' color='#ffffff' />
                        </TouchableNativeFeedback>
                    </View>
                  </View>
              </BottomToolBar>
          </View>
        );
    }
}

const mapStateToProps = state => ({
    event: state.form.event,
    user: state.auth.user,
    token: state.auth.token,
    comments: state.event.comments,
    events: state.event.events
});

const mapDispatchToProps = dispatch => ({
    setLoader: status => dispatch({type:"LOADER", status}),
    setComments: comments => dispatch({type:"SET_COMMENTS", comments}),
    resetProperty: property => dispatch({type: "RESET_PROPERTY", property}),
    addApplierToEvent: event => dispatch({type: "UPDATE_EVENT", event})
});

export default connect(mapStateToProps, mapDispatchToProps )(ViewEvent);
