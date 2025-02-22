// Import to create user slice
import { createSlice } from "@reduxjs/toolkit";

// Declare initial state for user
const initialState = {
  users: [],
  user: null,
};

// Create the slice and necessary reducers to update state
export const userSlice = createSlice({
  name: "User",
  initialState: initialState,
  reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload);
    },
    loginUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Make reducers available to all components
export const { loginUser, registerUser } = userSlice.actions;
export default userSlice.reducer;
