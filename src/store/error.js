import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: "ErrorValues",
  initialState: { errorVal: false, errorMessage: "", errorTitle: "" },
  reducers: {
    updateErrorVal: (state, action) => {
      state.errorVal = action.payload;
    },
    updateErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    updateErrorTitle: (state, action) => {
      state.errorTitle = action.payload;
    },
  },
});

export const errorActions = errorSlice.actions;
export default errorSlice.reducer;
