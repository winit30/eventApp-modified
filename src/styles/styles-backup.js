import { StyleSheet , Dimensions} from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#ededed'
    },

    row: {
      flexDirection: 'row'
    },

    authCont: {
        flexGrow: 4,
        alignItems:'center',
        justifyContent :'center',
        backgroundColor: "#880e4f"
    },

    backButton: {
        flexGrow: 1,
        alignItems:'center',
        justifyContent :'center',
        backgroundColor: '#303f9f'
    },

    inputBox: {
        width:'85%',
        fontSize:18,
        color:'#dedede',
        marginVertical: 16,
        borderBottomWidth:2,
        borderBottomColor:"#dedede",
        paddingVertical: 8
    },

    button: {
        width:'85%',
        backgroundColor:'#dedede',
        marginVertical: 32,
        paddingVertical: 16,
        elevation: 4
    },

    buttonText: {
        fontSize:18,
        fontWeight:'500',
        color:'#001970',
        textAlign:'center'
    },

    modalDesign: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    modalCont: {
        width:90,
        height: 70,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'rgba(255,255,255, 1)',
        borderRadius: 5
    },

    signupTextCont : {
        flexGrow: 1,
        alignItems:'flex-end',
        justifyContent :'center',
        paddingVertical:30,
        flexDirection:'row',
        backgroundColor: '#880e4f'
    },

    signupText: {
        color:'rgba(255,255,255,0.8)',
        fontSize:18
    },

    linkButton: {
        color:'#dedede',
        fontSize:18,
        fontWeight:'500',
        paddingHorizontal:5
    },

    toolbar: {
        height:54,
        backgroundColor:'#dedede',
        elevation: 3
    },

    divider: {
        backgroundColor: 'rgba(255,255,255, 0.4)',
    },

    emptyDashboard: {
        flexGrow:1,
        alignItems:'center',
        justifyContent :'center',
    },

    emptyDashboardText: {
        fontSize:24,
        color:'#bbb',
        fontWeight:'500'
    },

    floatingButtonCont: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#303f9f',
        position: 'absolute',
        bottom: 15,
        right: 15,
        alignItems:'center',
        justifyContent :'center',
        elevation:4
    },

    iconButtonCont: {
        backgroundColor: '#03A9F4',
        alignSelf: "flex-end",
        padding: 6,
        borderRadius: 3
    },

    iconNotificationCont: {
        backgroundColor: '#ffffff',
        alignSelf: "flex-end",
        padding:2,
        borderRadius: 3
    },

    floatingButton:{
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems:'center',
        justifyContent :'center'
    },

    formCont: {
        alignItems: 'stretch',
        paddingVertical:15,
        paddingHorizontal:20
    },

    eventTextInput: {
        backgroundColor:'rgba(255, 255,255,1)',
        paddingHorizontal:16,
        fontSize:16,
        color:'#000000',
        marginVertical: 10,
        borderBottomWidth:1,
        borderColor:'#ddd',
        textAlignVertical:'top',
        elevation:0.7
    },

    autocompleteHight: {
        flex: 2
    },

    eventSelectedText : {
      paddingTop:11,
      paddingBottom:17
    },

    formContRow: {
        flex:1,
        flexDirection:'row',
        alignItems: 'stretch',
        paddingHorizontal:10
    },

    eventTextInputLast: {
        marginBottom: 0,
    },

    formContRowChild: {
        flex: 1,
        paddingVertical:0,
        paddingHorizontal:10
    },

    buttonGap: {
        marginTop:15,
        marginBottom:35
    },

    relativeDateCont: {
        position:'relative'
    },

    dateOverlay: {
        position:'absolute',
        zIndex:1,
        top:10,
        left:0,
        right:0,
        bottom:10,
    },

    drawer: {
        flex: 1
    },

    header: {
        flex: 1,
        padding: 16,
        backgroundColor: '#6a0080',
        flexDirection:'row'
    },

    content: {
        flex: 3,
        padding: 16,
        backgroundColor: '#303f9f'
    },

    headerInfo: {
        height: 56
    },

    headerIcon: {
        width: 56,
        height: 56,
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#303f9f',
        marginRight: 16,
    },

    headerTitle: {
        color: '#dedede',
        fontSize: 20,
        fontWeight: "500"
    },

    headerEmail: {
        color: '#dedede',
        fontSize: 14
    },

    headerUserType: {
        color: '#dedede',
        fontSize: 14
    },

    listItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: 50,
        marginBottom: 10,
    },

    listItemTitle: {
        fontSize: 18,
        flexShrink: 1,
        color: '#dedede'
    },

    listItemImage: {
        width: 80,
        height: 80,
        borderRadius: 7,
        marginRight: 10,
    },

    eventDescription:{
        marginBottom: 10
    },

    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },

    capture: {
       flex: 0,
       backgroundColor: '#dedede',
       borderRadius: 5,
       color: '#000',
       padding: 10,
       margin: 40
    },

    pickerCont: {
        width: "85%",
        height: "auto",
        marginVertical: 16,
        paddingVertical: 8
    },

    selectCityCont: {
        width: "100%",
        paddingHorizontal:16
    },

    pickerBorderBottom: {
        width: "100%",
        height:2,
        backgroundColor: "#dedede"
    },

    selectCityBorder: {
        backgroundColor: "#666666"
    },

    selectPicker: {
        height: 50,
        width: "100%",
        color: "#dedede"
    },

    selectCityPicker: {
        color: "#666666"
    },

    rowContainer: {
        flex:1,
        flexDirection:'row',
        alignItems: 'stretch'
    },

    rowContainerChild: {
        flex: 1
    },

    mapContainer: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    map: {
        ...StyleSheet.absoluteFillObject,
    },

    listTitle: {
      paddingHorizontal: 5,
      fontSize: 14,
      color: "#000000"
    },

    listSubTitle: {
      paddingHorizontal: 5
    },

    eventTitleCont: {
      flexGrow: 3,
      justifyContent:"center"
    },

    eventTitle: {
      fontWeight: "500",
      color: "#333333"
    },

    profileHeader: {
        flex: 1
    },

    displayPicCont: {
        height:200,
        backgroundColor: "#5e0f49",
        padding: 16,
        justifyContent:"center",
        alignItems: 'center',
    },

    profileName: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "500",
        padding: 16
    },

    profileActionCont: {
        flex: 1,
        flexDirection: "row",
        justifyContent:'flex-end'
    },

    paddingVertical32: {
        paddingVertical: 16
    }
});

export default styles;
