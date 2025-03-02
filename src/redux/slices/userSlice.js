import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'userData',
  initialState: {
    user: {},
    isLoggedIn: false,
  },
  reducers: {
    signIn: (state, action) => {
      state.user = {...state.user, ...action.payload}
      state.isLoggedIn = true
    },
    signOut: (state) => {
      state.user = {}
      state.isLoggedIn = false
    }
  }
})

export const isUserLogedIn = state => state.userData.isLoggedIn;
export const userName = state => state.userData.user.name;

export const {signIn, signOut} = userSlice.actions;
export default userSlice.reducer;