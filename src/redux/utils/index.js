/* eslint-disable import/prefer-default-export */

// const BaseAction = {
//   type: "string"
// }

export const createReducer = (initialState, handlers) => {
  return (state = initialState, action) => {
    const handler = handlers[action.type];
    let updatedState = state;

    if (handler) {
      updatedState = handler(state, action);
    }
    return updatedState;
  };
};
