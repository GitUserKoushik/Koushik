
import apiInstance from "./Helper";
import { toast } from "react-toastify";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
 
  items: [{}]
};

export const list=createAsyncThunk("/product/list",
async(data)=>{
    let ar=await apiInstance.post(`/product/list`,data);
    return ar?.data;
});
export const Cre=createAsyncThunk(
"/product/create",
async(data)=>{
let aa=await apiInstance.post(`/product/create`,data);
return aa?.data
});
export const productRemove = createAsyncThunk(
  "/product/remove",

  async (formdata) => {
    let res = await apiInstance.post(`/product/remove`, formdata);

    let resData = res?.data;

    return resData;
  }
);



export const ProductSlice=createSlice({
    name:"Productslice",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
         .addCase(list.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(list.fulfilled, (state,{payload}) => {
            state.status = 'idlel';
            state.items = payload.data;
            state.totalpage =payload.totalPages
            console.log("hapning")
          })
          .addCase(list.rejected, (state, action) => {
            state.status = 'idle';
            state.error = action.error.message;
          }).addCase(Cre.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(Cre.fulfilled, (state, action) => {
            state.status = 'idlel';
            state.list = action.payload;
            console.log("hapning 2")
          })
          .addCase(Cre.rejected, (state, action) => {
            state.status = 'reject';
            state.error = action.error.message;
          })
          .addCase(productRemove.rejected, (state, action) => {
            state.status = "idle";
          })
    
          .addCase(productRemove.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(productRemove.fulfilled, (state, { payload }) => {
            state.status = "idle";
            state.total = payload?.data
            toast(payload?.message)
    
    
          });
          
          
      },
    });
    
    
    export default ProductSlice;