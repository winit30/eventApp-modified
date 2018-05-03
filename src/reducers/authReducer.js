var initialState = {
    user: null,
    token:null,
    loggedIn: false
}

// var initialState = {
//     user: {
//         "_id": "5ad90c5b19a5cf001495cf30",
//         "name": "Rahul",
//         "email": "rahuls@gmail.com",
//         "userType": "organizer"
//     },
//     token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWQ5MGM1YjE5YTVjZjAwMTQ5NWNmMzAiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTI1Mjk1ODY5fQ.TNdrLvxcHxXU9u9DiLEeH88G4TXma5vp_luDbSRI6tU",
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
