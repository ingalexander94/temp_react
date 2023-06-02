import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checking: true,
  photographer: null,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setPhotographer: (state, action) => {
      state.error = "";
      state.photographer = { ...action.payload };
    },
    unsetPhotographer: (state) => {
      state.error = "";
      state.photographer = null;
    },
  },
});

export const { setPhotographer, unsetPhotographer } = authSlice.actions;
