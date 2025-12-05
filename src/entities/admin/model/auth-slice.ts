// store/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
    isAuth: boolean;
    userId: number | null;
    name: string | null;
};

const initialState: AuthState = {
    isAuth: false,
    userId: null,
    name: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth(state, action: PayloadAction<AuthState>) {
            state.isAuth = action.payload.isAuth;
            state.userId = action.payload.userId;
            state.name = action.payload.name;
        },
        logout(state) {
            state.isAuth = false;
            state.userId = null;
            state.name = null;
        },
    },
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;