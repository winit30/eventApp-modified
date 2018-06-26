var initialState = {
    userDetails: null
}

export default (state = initialState, action) => {

    switch (action.type) {

        case "INIT":
            return initialState

        case "SET_USER_DETAILS":
            return {
                ...state,
                userDetails: action.userDetails
            }

        default:

    }

    return state;
}
