import { createSlice } from "@reduxjs/toolkit";

const getBreakpoint = (width) => {
  if (width >= 768) return "lg";
  if (width >= 576) return "md";
  return "sm";
};

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    screenSize: getBreakpoint(window.innerWidth),
  },
  reducers: {
    setScreenSize: (state, action) => {
      state.screenSize = action.payload;
    },
  },
});

export const { setScreenSize } = uiSlice.actions;
export default uiSlice.reducer;
