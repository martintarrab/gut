
export const selectDeviceInfo = (state) => {
  return {
    height: state.systemReducer.height,
    width: state.systemReducer.width,
    landscape: state.systemReducer.landscape,
    layout: state.systemReducer.layout,
  };
};
