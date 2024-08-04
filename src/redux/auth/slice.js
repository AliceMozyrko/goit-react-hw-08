import { createSlice } from "@reduxjs/toolkit"
import { logIn, register } from "./operations"

const pending = (state) => {
      state.loading = true
      state.error = false
}
const rejected = (state) => {
      state.error = true
      state.loading = false
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
  user: {
    name: null,
    email: null,
 },
 token: null,
 isLoggedIn: false,
 isRefreshing: false,
 loading: false,
 error: null
  },
  extraReducers: builder => builder
    .addCase(register.pending, pending)
    .addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user  
      state.token = action.payload.token
      state.isLoggedIn = true
      state.loading = false
    })
    .addCase(register.rejected, rejected)
    .addCase(logIn.pending, pending)
    .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user  
        state.token = action.payload.token
        state.isLoggedIn = true
        state.loading = false
    })
    .addCase(logIn.rejected, rejected)
})
export default authSlice.reducer
