import { createReducer } from "redux/utils";
import { Types } from "./actions";
import { config } from "static/config";

const { breakpoints } = config;

const initState = {
  mainError: {
    code: null,
    errorMsg: null,
  },
  height: null,
  width: null,
  landscape: false,
  layout: null,

};

const handleUpdateDeviceInfo = (state, action) => ({
  ...state,
  height: action.payload.height,
  width: action.payload.width,
  landscape: action.payload.width > action.payload.height,
  layout: breakpoints.mobile.width >= action.payload.width ? breakpoints.mobile.key : breakpoints.desktop.key,
});

const handleSetSystemError = (state, action) => ({
  ...state,
  mainError: action.payload,
});

const handleResetSystemError = (state) => ({
  ...state,
  mainError: {
    code: null,
    errorMsg: null,
  },
});

const actionsHandler = {
  [Types.UPDATE_DEVICE_INFO]: handleUpdateDeviceInfo,
  [Types.SYSTEM_ERROR]: handleSetSystemError,
  [Types.RESET_SYSTEM_ERROR]: handleResetSystemError,
};

export default createReducer(initState, actionsHandler);
