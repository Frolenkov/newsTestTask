import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../common/models";
import { getFromStorage, removeFromStorage, saveToStorage } from "../../common/utils/helpers";
import { mockedUser } from "../../common/utils/mockedData";

interface AuthState {
    isAuth: boolean;
    currentUser: IUser | null;
}

const initialState: AuthState = {
    isAuth: !!getFromStorage("authToken") || false,
    currentUser: null
};

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state: AuthState, action: PayloadAction<string>) => {
            state.currentUser = { name: action.payload }
            state.isAuth = true
            saveToStorage<string>("authToken", mockedUser.authToken, true);
        },
        logout: (state: AuthState) => {
            state.currentUser = null
            removeFromStorage("authToken");
        },
    }
}
);

export default AuthSlice.reducer;
export const { login, logout } = AuthSlice.actions;