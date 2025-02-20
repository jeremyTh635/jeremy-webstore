import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  user: null
}

export const userSlice = createSlice({
  name: "User",
  initialState: initialState,
  reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload)
    },
    loginUser: (state, action) => {
      state.user = action.payload
    },
  },
});

export const { loginUser, registerUser } = userSlice.actions;
export default userSlice.reducer;
