import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  useId: null,
  password: null,
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
  },
});

const { reducer, actions } = userSlice;
export const { setUsername, setPassword } = actions;
export default reducer;
