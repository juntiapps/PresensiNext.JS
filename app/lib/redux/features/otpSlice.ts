import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: '',
  isOtpSent: false,
  isOtpVerified: false,
};

const setCookie = (name: any, value: any, minutes = 30) => {
  if (typeof window !== 'undefined') {
    const expires = new Date();
    expires.setTime(expires.getTime() + minutes * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }
};

const deleteCookie = (name: any) => {
  if (typeof window !== 'undefined') {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
  }
};

const otpSlice = createSlice({
  name: 'otp',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
      setCookie('otp-email', action.payload, 30);
    },
    setOtpSent: (state, action) => {
      state.isOtpSent = action.payload;
    },
    setOtpVerified: (state, action) => {
      state.isOtpVerified = action.payload;
      if (action.payload) {
        // Jika OTP berhasil diverifikasi, hapus email dari cookie
        deleteCookie('otp-email');
      }
    },
    // resetOtp: () => initialState,
    resetOtp: (state) => {
      // Reset state ke initial
      state.email = '';
      state.isOtpSent = false;
      state.isOtpVerified = false;
      // Hapus cookie
      deleteCookie('otp-email');
    },
  },
});

export const { setEmail, setOtpSent, setOtpVerified, resetOtp } = otpSlice.actions;
export default otpSlice.reducer;
