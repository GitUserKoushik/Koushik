import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./Helper";
// import Home from "../Components/Home";
// import { Navigate, redirect } from 'react-router-dom';




export const regauth = createAsyncThunk(
  "/user/signup",

  async (details) => {
    let response = await axiosInstance.post(`/user/signup`, details);

    let responseData = response?.data;

    return responseData;
  }
);

export const logauth = createAsyncThunk(
  "/user/signin",

  async (details) => {
    let response = await axiosInstance.post(`/user/signin`, details);

    let responseData = response?.data;

    return responseData;
  }
);

export const Authslice = createSlice({
    name: "Authslice",
    initialState:{},
    reducers: {
      },
  
    extraReducers:(builders) => {
      builders
        .addCase(regauth.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(regauth.fulfilled, (state, { payload }) => {
          state.status = "idle";
        })
        .addCase(regauth.rejected, (state, action) => {
          state.status = "idle"; 
        })
        .addCase(logauth.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(logauth.fulfilled, (state, { payload }) => {
          state.status = "idle";
          if(payload.token){
            localStorage.setItem("token", payload.token);
            // alert("Login succecssfull");
          
            
            
          }
          else{
            alert("Login failed");
          }
          
        })
        .addCase(logauth.rejected, (state, action) => {
          state.status = "idle";
        })
    },
});

export default Authslice;
