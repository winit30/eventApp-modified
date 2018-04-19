var defaultState = {
    form: {}
}

export default (state = defaultState, action) => {
    switch (action.type) {

        case "INIT":
            return {
                ...defaultState
            }

        case "ON_CHANGE_TEXT":
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.property]: action.value
                }
            }

        default:
    }

    return state;
}
