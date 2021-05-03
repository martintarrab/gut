export const Types = {
  SET_CURRENT_OFFICE: "SET_CURRENT_OFFICE",
  SET_ACTIVE_HOME_SLIDE: "SET_ACTIVE_HOME_SLIDE",
};

export const Actions = {
  setCurrentOffice: (officeId) => ({
    type: Types.SET_CURRENT_OFFICE,
    payload: officeId,
  }),
  setActiveHomeSlide: (slideIdx) => ({
    type: Types.SET_ACTIVE_HOME_SLIDE,
    payload: slideIdx,
  }),
};
