import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export interface CounterState {
  user: any;
  token: string;
}

const initialState: CounterState = {
  user: "",
  token: "",
};

const persistConfig = {
  key: "auth",
  storage,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logOut: (state, action) => {
      state.user = "";
      state.token = "";
    },
  },
});

export const { setUser, logOut } = authSlice.actions;

export const persistAuthReducer = persistReducer(persistConfig, authSlice.reducer);
export default authSlice.reducer;
