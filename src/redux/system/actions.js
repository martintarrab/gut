export const Types = {
  SYSTEM_CONFIG_LOADED: "SYSTEM_CONFIG_LOADED",
  SYSTEM_CONFIG_FAILED: "SYSTEM_CONFIG_FAILED",
  SYSTEM_ERROR: "SYSTEM_ERROR",
  RESET_SYSTEM_ERROR: "RESET_SYSTEM_ERROR",
  UPDATE_DEVICE_INFO: "UPDATE_DEVICE_INFO",
};

export const Actions = {
  updateDeviceInfo: (info) => ({
    type: Types.UPDATE_DEVICE_INFO,
    payload: info,
  }),
  resetSystemError: () => ({ type: Types.RESET_SYSTEM_ERROR }),
  setSystemError: (code, errorMsg) => ({
    type: Types.SYSTEM_ERROR,
    payload: { code, errorMsg },
  }),
};
