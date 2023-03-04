import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { newsAPI } from "./github/news.api";
import authSlice from "./auth/authSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  [newsAPI.reducerPath]: newsAPI.reducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(newsAPI.middleware)
  });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = AppStore["dispatch"];
