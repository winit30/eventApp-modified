import {INIT, ON_CHANGE_TEXT, RESET_EVENT, ON_CHANGE_EVENT, RESET_PROPERTY} from "./../constants/action-types";

var defaultState = {
    form: {},
    event: {}
}

export default (state = defaultState, action) => {
    switch (action.type) {

        case INIT:
            return defaultState

        case ON_CHANGE_TEXT:
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.property]: action.value
                }
            }

        case RESET_EVENT:
            return {
                ...state,
                event: {}
            }

        case ON_CHANGE_EVENT:
            return {
                ...state,
                event: {
                    ...state.event,
                    [action.property]: action.value
                }
            }

        case RESET_PROPERTY:
            return {
                ...state,
                event: {
                    ...state.event,
                    [action.property]: ""
                }
            }

        default:
            return state;
    }

}
