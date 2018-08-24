import {INIT, SET_EVENTS, UPDATE_EVENT, SET_CITY, SET_COMMENTS} from "./../constants/action-types";

var initialState = {
    events: [],
    city: "",
    comments: []
}

export default (state = initialState, action) => {

    switch (action.type) {

        case INIT:
            return initialState

        case SET_EVENTS:
            return {
                ...state,
                events: action.events
            }

        case UPDATE_EVENT:
            return {
                ...state,
                events: updatedEvents(state.events, action.event)
            }

        case SET_CITY:
            return {
                ...state,
                city: action.city
            }

        case SET_COMMENTS:
            return {
                ...state,
                comments: action.comments
            }

        default:
            return state;
    }

}

function updatedEvents(array, event) {
    return array.map((item) => {
        if(item._id !== event._id) {
            return item;
        }
        return {
            ...item,
            ...event
        };
    });
}
