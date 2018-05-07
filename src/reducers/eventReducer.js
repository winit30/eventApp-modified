var initialState = {
    events: [],
    city: "",
    comments: []
}

export default (state = initialState, action) => {

    switch (action.type) {

        case "INIT":
            return initialState

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

        case "SET_COMMENTS":
            return {
                ...state,
                comments: action.comments
            }

        default:

    }

    return state;
}
