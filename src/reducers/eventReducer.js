var initialState = {
    events: [],
    city: ""
}

export default (state = initialState, action) => {

    switch (action.type) {

        case "SET_EVENTS":
            return {
                ...state,
                events: action.events
            }

        case "SET_CITY":
            return {
                ...state,
                city: action.city
            }

        default:

    }

    return state;
}
