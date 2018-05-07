import {connect} from "react-redux";
import {Button, List, ListItem} from 'react-native-elements';
import React, {Component} from "react";
import {View, Text, ScrollView, KeyboardAvoidingView} from "react-native";

import {ADD_COMMENT_URL, GET_COMMENT_URL} from "./../../../constants/urls";
import BottomToolBar from "./../../../components/toolbar/BottomToolBar";
import {fetchApi} from "./../../../services/api";
import TextField from "./../../../components/eventInputs/TextField";

import styles from "./../../../styles/styles";
import style from "./../../../styles/ComponentStyles";

class ViewEvent extends Component<{}> {

    componentDidMount() {
        this.loadComments();
    }

    loadComments = async () => {
        const {selectedEvent, token, setLoader, setComments} = this.props;
        try {
            setLoader(true);
            const headers = {"x-auth": token}
            const response = await fetchApi(`${GET_COMMENT_URL}/${selectedEvent._id}`, "GET", {}, headers);
            if(response.status === 200) {
                const comments = await response.json();
                setComments(comments);
                setLoader(false);
            } else {
              throw new Error("Unable to fetch comments");
            }
            console.log(response);
            setLoader(false);
        } catch (e) {
            console.log(e.message);
            setLoader(false);
        }
    }

    addComment = async () => {
        const {selectedEvent, user, token, setLoader} = this.props;
        const {comment} = this.props.event;
        try {
            const body = {
                eventId: selectedEvent._id,
                commentedby: user._id,
                comment
            };
            setLoader(true);
            const headers = {"x-auth": token}
            const response = await fetchApi(ADD_COMMENT_URL, "POST", body, headers);
            if (response.status === 200) {
                const res = await response.json();
                setLoader(false);
            } else {
                throw new Error("Unable to comment");
            }
        } catch (e) {
            console.log(e.message);
            setLoader(false);
        }
    }

    _createCommentList = () => {
        const {comments} = this.props;
        if(comments.length) {
            return comments.map(c => {
                return (
                  <ListItem
                    key={c._id}
                    title={c.eventId}
                    subtitle={c.comment}
                  />
                );
            }).reverse();
        }
    }

    render() {
        const {selectedEvent, comments} = this.props;
        console.log(comments);
        return (
          <View style={styles.mainContainer}>
              <ScrollView>
                  <KeyboardAvoidingView behavior="padding" enabled>
                      <View style={style.viewEvent.titleCont}>
                          <Text style={style.viewEvent.title}>{selectedEvent.title}</Text>
                      </View>
                      <View style={style.viewEvent.info}>
                          <Text style={style.viewEvent.date}>{selectedEvent.date}</Text>
                          <Text style={style.viewEvent.category}>{selectedEvent.category}</Text>
                          <Text style={style.viewEvent.date}>{selectedEvent.venue.description}</Text>
                          <Text style={style.viewEvent.description}>{selectedEvent.description}</Text>
                      </View>

                      <View style={style.viewEvent.commentBox}>
                          <TextField property="comment" placeholder="Comment" multiline={true} numberOfLines={4}  />
                          <Button
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='Submit' onPress={this.addComment} />
                      </View>
                      <List containerStyle={{marginBottom: 20}}>
                          {this._createCommentList()}
                      </List>
                      <View style={{marginBottom:60}}></View>
                  </KeyboardAvoidingView>
              </ScrollView>
              <BottomToolBar>
                  <Button
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='Apply Now' />
              </BottomToolBar>
          </View>
        );
    }
}

const mapStateToProps = state => ({
    event: state.form.event,
    user: state.auth.user,
    token: state.auth.token,
    comments: state.event.comments
});

const mapDispatchToProps = dispatch => ({
    setLoader: status => dispatch({type:"LOADER", status}),
    setComments: comments => dispatch({type:"SET_COMMENTS", comments})
});

export default connect(mapStateToProps, mapDispatchToProps )(ViewEvent);
