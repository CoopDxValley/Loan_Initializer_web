import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    statusSuccess: false,
}

const loadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        setLoading: (state, { payload }) => {
            state.loading = payload;
        },
        setStatusSucess: (state, { payload }) => {
            state.statusSuccess = payload;
        }
    },
});

const { reducer, actions } = loadingSlice;
export const { setLoading, setStatusSucess } = actions;
export default reducer;

