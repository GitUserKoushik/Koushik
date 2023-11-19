import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./Helper";
// import Home from "../Components/Home";
// import { Navigate, redirect } from 'react-router-dom';
// import { Toast } from "react-toastify/dist/components";
import { toast } from "react-toastify";




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
    initialState:{
      redirectTo: null,
    isLogin: false,
    },
    reducers: {
      check_token: (state) => {
        let token = localStorage.getItem("token");
        if (token !== null && token !== undefined) {
          state.isLogin = true;
        }
      },
      reset_redirectTo: (state, { payload }) => {
        state.redirectTo = payload;
      },
      logoutAuth: (state) => {
        localStorage.removeItem("token");
        state.isLogin = false;
        toast.error("Logout SuccessFull");
      },
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
export const { check_token, reset_redirectTo, logoutAuth } = Authslice.actions;
