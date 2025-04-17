import { configureStore, createSlice } from "@reduxjs/toolkit";

// Admin store start
const adminSlice = createSlice({
    name: "admin",
    initialState: {
        isAdmin: false,
        loading: false,
    },
    reducers: {
        setAdminStatus(state, action) {
            state.isAdmin = action.payload;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
    },
});

export const { setAdminStatus, setLoading } = adminSlice.actions;

export const store = configureStore({
    reducer: {
        admin: adminSlice.reducer,
    },
});
// Admin store end