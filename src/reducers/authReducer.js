var initialState = {
    user: null,
    token:null,
    loggedIn: false
}

// var initialState = {
//     user: {
//        "_id": "5af2a711c50d5b00148abb5d",
//        "name": "vineet",
//        "email": "vineet@gmail.com",
//        "userType": "organizer"
//     },
//     token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWYyYTcxMWM1MGQ1YjAwMTQ4YWJiNWQiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTI5ODU2ODU4fQ.1WIRdmqabx8pgCxuvFxUw19G00sKgychqdXTUPnyMTk",
//     loggedIn: true
// }

export default (state = initialState, action) => {

    switch (action.type) {

        case "INIT":
            return initialState

        case "SET_USER_AUTH":
            return {
                ...state,
                token: action.token,
                user: action.user,
                loggedIn: action.loggedIn
            }

        default:

    }

    return state;
}
