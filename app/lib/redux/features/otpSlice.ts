import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: '',
  isOtpSent: false,
  isOtpVerified: false,
};

const otpSlice = createSlice({
  name: 'otp',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setOtpSent: (state, action) => {
      state.isOtpSent = action.payload;
    },
    setOtpVerified: (state, action) => {
      state.isOtpVerified = action.payload;
    },
    resetOtp: () => initialState,
  },
});

export const { setEmail, setOtpSent, setOtpVerified, resetOtp } = otpSlice.actions;
export default otpSlice.reducer;
