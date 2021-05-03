import { createReducer } from "redux/utils";
import { Types } from "./actions";

const initState = {
  currentOffice: null,
  homeSlide:{
    activeSlide: null,
  }
};

const handleSetCurrentOffice = (state, action) => ({
  ...state,
  currentOffice: action.payload,
});

const handleSetActiveHomeSlide = (state, action) => ({
  ...state,
  homeSlide: {...state.homeSlide, activeSlide: action.payload }
});


const actionsHandler = {
  [Types.SET_CURRENT_OFFICE]: handleSetCurrentOffice,
  [Types.SET_ACTIVE_HOME_SLIDE]: handleSetActiveHomeSlide,
};

export default createReducer(initState, actionsHandler);
