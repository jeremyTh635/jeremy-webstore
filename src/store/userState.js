import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "User",
  initialState: {},
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload
    },
  },
});

export const { loginUser } = userSlice.actions;
export default userSlice.reducer;
