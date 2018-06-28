import theme from "./theme";

const screenStyles = {
    appBackgroundColor: {
        backgroundColor: theme.primary.light
    },
    authScreenStyles: {
        loginContainer: {
            flexGrow: 4,
            alignItems: "center",
            justifyContent : "center",
            backgroundColor: theme.primary.main
        },

        signupTextContainer: {
            flexGrow: 1,
            alignItems:'flex-end',
            justifyContent :'center',
            paddingVertical:32,
            flexDirection:'row',
            backgroundColor: theme.primary.main
        },

        signupText: {
            color:'#ffffff',
            fontSize:18,
            fontFamily: "Roboto-Light"
        },
    },

    viewEventScreenStyle: {
        viewEventContainer: {
            backgroundColor: theme.primary.main
        },
        viewEventHeader: {
            flex: 1,
            flexDirection:'row',
            justifyContent: "space-between",
            height: 56,
            alignItems: "center"
        },
        rowContainer: {
            flexDirection:'row'
        },
        iconContainer: {
            paddingHorizontal: 16
        },
        eventTitle: {
            color: "#ffffff",
            fontFamily: "Roboto-Bold",
            fontSize: 18
        },

        viewEventDetails: {

        },

        viewEventMetaDesc: {
            flexDirection:'row',
            justifyContent: "space-between",
            paddingHorizontal: 16
        },

        eventCategory: {
            color: "#ffffff",
            fontSize: 16,
            fontFamily: "Roboto-Medium",
        },

        eventCreatedDate: {
            color: "#ffffff",
            fontSize: 12,
            fontFamily: "Roboto-Regular",
        },

        eventDate: {
            color: "#ffffff",
            fontSize: 12,
            fontFamily: "Roboto-Regular",
            paddingTop: 4
        },

        eventDescription: {
            color: "#ffffff",
            fontSize: 16,
            fontFamily: "Roboto-Regular",
            paddingBottom: 8
        },

        eventCommentStyle: {
            commentContainer: {
                flex: 1,
                flexDirection: "row",
                backgroundColor: "#fff",
                padding: 12,
                borderRadius:3
            },
            textInputContainer: {
                flex:1,
                marginRight:12
            },
            sendIconButton: {
              flex:0,
              width:54,
              height:54,
              backgroundColor:theme.primary.light,
              borderRadius:30,
              justifyContent:"center",
              alignItems:"center"
            },
        }
    }
}

export default screenStyles;
