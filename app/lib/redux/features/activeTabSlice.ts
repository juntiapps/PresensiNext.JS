// store/tabSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  activeTab: 'menu', // Default active tab
};

const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTab } = tabSlice.actions;
export default tabSlice.reducer;