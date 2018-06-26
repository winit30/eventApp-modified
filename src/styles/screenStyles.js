import theme from "./theme";

const screenStyles = {
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
    appBackgroundColor: {
        backgroundColor: theme.primary.light
    },
}

export default screenStyles;
