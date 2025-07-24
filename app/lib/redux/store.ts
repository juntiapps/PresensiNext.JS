import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./features/sessionSlice";
import otpReducer from "./features/otpSlice";

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    otp: otpReducer, // Assuming otpReducer is defined in features/otpSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
