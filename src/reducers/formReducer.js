var defaultState = {
  form: {}
}

export default (state = defaultState, action) => {
  switch (action.type) {
    //init state
    case 'INIT':
        return {
          ...defaultState
        }
    //set on input field value change
    case 'ON_CHANGE_TEXT':
        return {
          ...state,
          form: {
            ...state.form,
            [action.property]: action.value
          }
        }
    //init form
    case 'INIT_FORM':
        return {
          form:{},
          validateFields: {
            required: {
                    current: [],
                    required: []
                },
                pattern: {
                    current: [],
                    required: []
                }
          }
        }

    default:

  }
  return state;
}
