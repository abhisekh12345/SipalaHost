import { createSlice } from '@reduxjs/toolkit';
import { getInitialState } from '@/utils/getInitialState'; // Import the utility function

const initialState = {
  userInfo: getInitialState(), // Use the utility function to get initial state
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      if (typeof window !== 'undefined') {
        localStorage.setItem('userInfo', JSON.stringify(action.payload));
      }
    },
    deletingUser: (state, action) => {
      state.userInfo = null; // Clear user info from the state
      if (typeof window !== 'undefined') {
        localStorage.removeItem('userInfo'); // Remove user info from localStorage
      }
    },
    logingOutUser: (state, action) => {
      state.userInfo = null;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('userInfo');
      }
    },
  },
});

export const { setCredentials, deletingUser, logingOutUser } = authSlice.actions;

export default authSlice.reducer;
