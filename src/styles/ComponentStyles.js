import {Dimensions} from 'react-native';
import theme from "./theme";

const componentStyles = {
    inputComponentStyles: {
        width: "100%",
        fontSize: 18,
        color: "#ffffff",
        borderBottomWidth: 2,
        borderBottomColor: theme.input.borderColor,
        paddingVertical: 8,
        fontFamily: "Roboto-Regular"
    },

    buttonComponentStyle: {
        primaryButton: {
            width: "100%",
            backgroundColor: theme.button.primary,
            paddingVertical: 12,
            borderRadius: 45
        },
        primaryButtonText: {
            textAlign: "center",
            fontSize: 18,
            color: theme.button.primaryTextColor,
            fontFamily: "Roboto-Medium"
        },
        linkButton: {
            color: "#ffffff",
            fontSize: 18,
            paddingHorizontal:5,
            fontFamily: "Roboto-Medium"
        },
        floatingButtonContainer: {
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: "#ffffff",
            position: 'absolute',
            bottom: 15,
            right: 15,
            alignItems:'center',
            justifyContent :'center',
            elevation:4
        },
        floatingButton: {
            width: 60,
            height: 60,
            borderRadius: 30,
            alignItems:'center',
            justifyContent :'center'
        }
    },

    eventInputStyle: {
        textfield: {
            backgroundColor:'rgba(255, 255,255,1)',
            paddingHorizontal:16,
            fontSize:16,
            color:'#000000',
            elevation:0.7,
            fontFamily: "Roboto-Regular"
        }
    },

    selectComponentStyle: {
        selectPicker: {
            height: 45,
            width: "100%",
            color: "#dedede",
            fontFamily: "Roboto-Regular",
            fontSize: 18
        },
        selectPickerContainer: {
            width: "100%",
            height: "auto",
            marginVertical: 16,
            paddingVertical: 8
        },
        pickerBorderBottom: {
            width: "100%",
            height:2.2,
            backgroundColor: theme.input.borderColor
        },
    },

    emptyDashboardStyle: {
        emptyDashboard: {
            flexGrow:1,
            alignItems:'center',
            justifyContent :'center',
        },

        emptyDashboardText: {
            fontSize:24,
            color:'#ffffff',
            fontWeight:'500',
            marginVertical: 8
        }
    },

    toolBarComponentStyle: {
        toolbarContainer: {
            height:56,
            backgroundColor: theme.primary.main,
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
        },
        iconContainer: {
            flexDirection: "row",
            paddingHorizontal: 16
        },
        titleContainer: {
            flexDirection: "row"
        },
        utilityContainer: {
            flexDirection: "row",
            justifyContent: "space-around",
        }
    },

    cardComponentStyle: {
        containerStyle: {
            backgroundColor: theme.primary.main,
            borderColor: theme.primary.main,
            elevation: 0,
            marginTop: 16,
            marginHorizontal: 16,
            padding: 16,
            flex: 1,
            flexDirection: "row"
        },
        iconStyle: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        contentStyle: {
          flex: 4
        },
        titleStyle: {
            textAlign: "left",
            color: "#fff",
            fontFamily: "Roboto-Bold",
            marginVertical: 0,
            paddingHorizontal: 8,
            paddingTop: 4,
            paddingBottom: 4,
            fontSize: 20
        },
        subTitleStyle: {
            color: "#fff",
            fontFamily: "Roboto-Regular",
            paddingHorizontal: 8,
            paddingBottom: 4,
            fontSize: 16
        }
    },

    BottomToolBar: {
        wrapper: {
            backgroundColor: '#ffffff',
            flexDirection: 'row',
            alignItems: 'stretch',
            flex: 1,
            elevation:4
        },

        columnWrap: {
            flex: 1,
            paddingHorizontal: 8,
        },
    },

    commentComponentStyle: {
        commentContainer: {
            flexDirection: "row",
            flex: 1,
            alignItems: 'stretch',
            padding:16,
            backgroundColor: "#ffffff",
            marginHorizontal: 8,
            marginTop: 8,
            borderRadius: 4
        },
        avatarContainer: {},
        commentTextContainer: {
            flex: 1
        },
        textContainer: {
            flex: 1,
            marginLeft: 16,
            paddingTop:4,
            paddingBottom:8
        },
        commentedbyStyle: {
            fontFamily: "Roboto-Bold",
            paddingBottom: 2,
            fontSize: 16
        },
        commentTextStyle: {
            fontFamily: "Roboto-Regular",
            fontSize: 16
        },

        utilityContStyle: {
            utilityContainer: {
                flexDirection: "row",
                flex: 1,
                marginTop: 8,
                marginLeft: 16,
                justifyContent: "space-between"
            },
            utilityToolStyle: {
                color: theme.primary.light
            }
        },

        replyComponentStyle: {
            replyContainer: {
                flex: 1,
                flexDirection: "row",
                marginLeft: 16,
                marginTop: 16
            },
            replyTextfieldContainer: {
                flex:1,
                marginRight: 8
            },
            replyTextFieldStyle: {
                paddingTop: 8,
                paddingBottom: 4,
                borderBottomWidth: 1,
                fontSize: 16,
                borderRadius: 30
            },
            replyIconButton: {
                width: 43,
                height: 43,
                backgroundColor: theme.primary.light,
                borderRadius: 30,
                justifyContent: "center",
                alignItems: "center"
            },
            replyCloseButton: {
                paddingTop: 16,
                color: theme.primary.light,
                marginLeft: 16,
            }
        },

        repliesContainer: {
            flex: 1,
            paddingTop:16,
            borderTopWidth: 1,
            borderTopColor: "#dddddd",
            flexDirection: "row",
            alignItems: 'stretch',
            backgroundColor: "#ffffff",
            marginHorizontal: 8,
            marginTop: 16
        }
    },

    dropdownComponentStyle: {
        dropdownContainer: {
            width: Dimensions.get('window').width/2,
            position: "absolute",
            backgroundColor: "#fefefe",
            top: 0,
            right: 25,
            zIndex: 1,
            borderRadius: 2,
            elevation: 6
        },
        dropdownItemStyle: {
            flex: 1,
            paddingVertical: 16,
            paddingHorizontal:16
        },
        dropdownTextStyle: {
            color: "#000000",
            fontSize: 18,
            fontFamily: "Roboto-Medium"
        }
    },

    sidebarComponentStyle: {
        sidebarHeaderContainer: {
            flex: 1,
            padding: 16,
            backgroundColor: theme.secondary.main,
            flexDirection: "row"
        },
        headerIconStyle: {
            width: 56,
            height: 56,
            borderRadius: 45,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme.secondary.dark,
            marginRight: 16,
        },
        headerInfoStyle: {
            height: 56
        },
        headerTitleStyle: {
            color: "#000000",
            fontSize: 24,
            fontFamily: "Roboto-Bold"
        },
        headerUserTypeStyle: {
            color: "#333333",
            fontFamily: "Roboto-Medium",
            fontSize: 16
        },
        sidebarContentStyle: {
            flex: 3,
            backgroundColor: theme.secondary.light,
            paddingVertical: 16
        },
        listItemStyle: {
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            height: 50,
            paddingHorizontal: 16
        },
        listItemTitleStyle: {
            fontSize: 18,
            flexShrink: 1,
            fontFamily: "Roboto-Medium",
            color: "#333333"
        },
    }
}

export default componentStyles;
