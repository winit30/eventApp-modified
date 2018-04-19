var initialState = {
    loader: false
}

export default (state = initialState, action) => {

    switch (action.type) {

        case "LOADER":
            return {
                ...state,
                loader: action.status
            }

        default:
    }

    return state;

}
