import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  useId: null,
  password: null,
  kyc: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername: (state, { payload }) => {
      state.username = payload;
    },
    setPassword: (state, { payload }) => {
      state.password = payload;
    },
    setKyc: (state, { payload }) => {
      state.kyc = payload;
    },
  },
});

const { reducer, actions } = userSlice;
export const { setUsername, setPassword, setKyc } = actions;
export default reducer;
