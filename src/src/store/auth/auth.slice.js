import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checking: true,
  photographer: { name: "alexander" },
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
});

// export const {} = authSlice.actions;
