var defaultState = {
    drawer: null
}

export default (state = defaultState, action) => {

    switch (action.type) {

        case "MAP_ELEMENT":
            return {
                ...state,
                [action.property]: action.node
            }

        default:

    }

    return state;
}
