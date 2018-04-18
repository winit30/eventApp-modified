var defaultState = {
  inputs: {}
}

export default (state = defaultState, action) => {

  switch (action.type) {

      case 'MAP_INPUT':
          return {
            ...state,
            inputs: {
              ...state.inputs,
              [action.property]: action.node
            }
          }

      default:

  }
  return state;
}
