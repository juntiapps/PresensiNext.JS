import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./features/sessionSlice";
import otpReducer from "./features/otpSlice";
import activeTabReducer from "./features/activeTabSlice";

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    otp: otpReducer,
    activeTab: activeTabReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
