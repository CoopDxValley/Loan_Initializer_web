import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./Slices/loadingSlice";
import userReducer from "./Slices/userSlice";

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
