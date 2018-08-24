import {INIT, LOADER} from "./../constants/action-types";

var initialState = {
    loader: false
}

export default (state = initialState, action) => {

    switch (action.type) {

        case INIT:
            return initialState

        case LOADER:
            return {
                ...state,
                loader: action.status
            }

        default:
            return state;
    }
    
}
