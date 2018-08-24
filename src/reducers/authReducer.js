import {INIT, SET_USER_AUTH} from "./../constants/action-types";

var initialState = {
    user: null,
    token:null,
    loggedIn: false
}

export default (state = initialState, action) => {

    switch (action.type) {

        case INIT:
            return initialState;

        case SET_USER_AUTH:
            return {
                ...state,
                token: action.token,
                user: action.user,
                loggedIn: action.loggedIn
            }

        default:
            return state;
    }

}
