import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  password: "",
};

export const userSlice = createSlice({
  name: "User",
  initialState: initialState,
  reducers: {
    updateFirstName: (state, action) => {
      const newFirstName = action.payload;
      state.firstName = newFirstName;
    },
    updateLastName: (state, action) => {
      const newLastName = action.payload;
      state.lastName = newLastName;
    },
    updateUserName: (state, action) => {
      const newUserName = action.payload;
      state.userName = newUserName;
    },
    updateEmail: (state, action) => {
      const newEmail = action.payload;
      state.email = newEmail;
    },
    updatePassword: (state, action) => {
      const newPassword = action.payload;
      state.password = newPassword;
    },
  },
});

export const {
  updateFirstName,
  updateLastName,
  updateUserName,
  updateEmail,
  updatePassword,
} = userSlice.actions;
export default userSlice.reducer;
