var initialState = {
    events: []
}

export default (state = initialState, action) => {

    switch (action.type) {

        case "SET_EVENTS":
            return {
                ...state,
                events: action.events
            }

        default:

    }

    return state;
}
