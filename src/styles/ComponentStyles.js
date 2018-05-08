const style = {
    viewEvent: {
        titleCont: {
            backgroundColor: "#ffffff",
            padding: 16
        },

        title: {
            fontWeight: "500",
            color: "#333333"
        },

        info : {
          backgroundColor: "#ffffff",
          padding: 16
        },

        date: {
          fontSize:10,
          paddingVertical:8,
          color: "#333333"
        },

        category: {
          paddingVertical:8,
          color: "#333333"
        },

        description: {
          paddingVertical:8,
          color: "#333333"
        },

        commentBox: {
            flex: 1,
            flexDirection: "row"
        },

        marginLeft16: {
          marginLeft: 16,
          marginTop: 8
        },

        textField: {
            flex:1,
            marginRight:8
        },

        cancelReply: {
            paddingTop: 4,
            color:"#03A9F4",
            marginLeft: 16,
        },

        sendIcon: {
          flex:0,
          width:54,
          height:54,
          backgroundColor:"#03A9F4",
          borderRadius:30,
          justifyContent:"center",
          alignItems:"center",
          marginVertical:8
        },

        replyIcon: {
          flex:0,
          width:43,
          height:43,
          backgroundColor:"#03A9F4",
          borderRadius:30,
          justifyContent:"center",
          alignItems:"center",
          marginVertical:8
        },

        replyTextField: {
          paddingTop: 8,
          paddingBottom: 4,
          borderBottomWidth: 1,
          fontSize: 14
        },

        showComments: {
            padding:16,
            backgroundColor: "#fefefe"
        }
    },

    BottomToolBar: {
        wrapper: {
            backgroundColor: '#ffffff',
            flexDirection: 'row',
            bottom: 0,
            left: 0,
            right: 0,
            position:"absolute",
            alignItems: 'stretch',
            flex: 1,
            elevation:4
        },

        columnWrap: {
            flex: 1,
            paddingHorizontal: 8,
        },
    },

    Comments: {
        commentsCont: {
            flexDirection: "row",
            flex: 1,
            backgroundColor: "#eeeeee",
            alignItems: 'stretch',
            padding:16,
            borderBottomWidth: 1,
            borderBottomColor: "#ffffff"
        },

        repliesCont: {
            flexDirection: "row",
            flex: 1,
            backgroundColor: "#eeeeee",
            alignItems: 'stretch',
            paddingVertical:16,
            borderBottomWidth: 1,
            borderBottomColor: "#ffffff"
        },

        avatar: {
          flex: 0,
        },

        textCommentCont: {
          flex: 1
        },

        textCont: {
          flex: 1,
          backgroundColor: "#ffffff",
          marginLeft: 16,
          borderRadius: 3,
          paddingHorizontal:8,
          paddingTop:4,
          paddingBottom:8
        },

        commentedby: {
            fontWeight:"500",
            paddingBottom:2
        },

        toolsCont: {
          flexDirection: "row",
          flex: 1,
          marginLeft: 16,
          marginTop: 8,
          alignItems:"stretch"
        },

        tools: {
          flex: 1,
          paddingTop: 8,
          color:"#03A9F4",
          textAlign: "right"
        },

        replyCont: {
          flexDirection: "row",
          flex: 1,
          marginLeft: 16,
          marginTop: 8,
        },
    }
}

export default style;
