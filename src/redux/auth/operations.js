import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/"


export const register = createAsyncThunk("auth/register", async (newUser, thunkAPI) => {
  try {
    const response = await axios.post("/users/signup", newUser)
    axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`
    return response.data   
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const logIn = createAsyncThunk("auth/login", async (values, thunkAPI) => {
  try {
    const response = await axios.post("/users/login", values)
    axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`
    return response.data  
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const response = await axios.post("/users/logout")
    return response.data  
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/users/current")
    return response.data  
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})


