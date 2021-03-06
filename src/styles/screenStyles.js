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
            backgroundColor: theme.primary.main,
            padding: 16
        },
        authInputContainer: {
            width: "100%",
            paddingBottom: 16
        },
        authButtonContainer: {
            width: "100%",
            paddingTop: 16
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
            flexDirection:'row',
            justifyContent: "space-around",
        },
        iconContainer: {
            paddingHorizontal: 16,
            paddingVertical: 16
        },
        eventTitle: {
            color: "#ffffff",
            fontFamily: "Roboto-Bold",
            fontSize: 18,
            paddingVertical: 16
        },
        viewEventDetails: {

        },
        viewEventMetaDesc: {
            flexDirection:'row',
            justifyContent: "space-between",
            paddingHorizontal: 16
        },
        statusContainer: {
            paddingBottom: 16
        },
        statusTextStyle: {
            fontSize: 14,
            fontFamily: "Roboto-Regular",
            color: "#ffffff",
            paddingBottom: 4
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
              backgroundColor:theme.primary.main,
              borderRadius:30,
              justifyContent:"center",
              alignItems:"center"
            },
        }
    },

    createEventStyle: {
        eventFromBackgroundColor: {
            backgroundColor:theme.primary.light,
        },
        eventFormContainer: {
            padding: 16
        },
        eventInputContainer: {
            width: "100%",
            paddingBottom: 16
        },
        eventInputButton: {
            width: "50%"
        },
        eventInputStyle: {
            backgroundColor: theme.primary.main,
            color: "#ffffff",
            borderRadius: 3
        },
        eventTextareaStyle: {
            textAlignVertical:'top',
        },
        eventSelectedText: {
            paddingHorizontal: 16,
            paddingTop: 13,
            paddingBottom: 16,
            marginBottom: 16,
            fontSize: 16,
            fontFamily: "Roboto-Regular"
        },
        mapViewStyle: {
            borderBottomWidth: 3,
            borderTopWidth: 3,
            borderLeftWidth: 3,
            borderRightWidth: 3,
            borderColor: "#ffffff",
            marginBottom: 16
        }
    },

    userProfileStyle: {
        profileBackground: {
            backgroundColor: "#ffffff"
        },
        headerContainer: {
            height:250,
            backgroundColor: theme.primary.main,
            padding: 16,
            justifyContent:"center",
            alignItems: "center",
        },
        profileName: {
            color: "#fff",
            fontSize: 24,
            fontFamily: "Roboto-Medium",
            padding: 16
        }
    }
}

export default screenStyles;
