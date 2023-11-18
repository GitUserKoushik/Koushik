import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { logauth } from "../Redux/Authslice";
import { useNavigate } from "react-router-dom";

// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import axios from "axios";
import {
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
  } from "@mui/material";
  import { useForm } from "react-hook-form";

const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;



export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  



  const submit = (data) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password); 
    dispatch(logauth(formData));
   
  };
  let authtoken = localStorage.getItem("token");
  console.log(authtoken);
  if (authtoken !== null && authtoken !== undefined && authtoken !== "") {
    

    navigate("/")
   
 }
 
 else{
  return (
    <Container style={{ height: "700px" }}>
        <h1 style={{textAlign:"center"}}>
            Login
        </h1>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ margin: "0 auto" }}>
          <Paper elevation={3} sx={{ padding: 2 }} style={{marginTop:"80px"}}>
            <Typography variant="h5" gutterBottom>
              Login Form
            </Typography>
            <form onSubmit={handleSubmit(submit)} action="/">
             
             
              <TextField
                {...register("email", {required:true, pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})}
                label="Email"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email && errors.email.type === "required"  && "Email is required"||  errors.email && errors.email.type === "pattern" &&"Valid email is required" }
               
              />
                
              <TextField
                {...register("password", {required:true})}
                label="Password"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.password}
                helperText={errors.password && "Password is required"}
              />
              

              <Button
                variant="contained"
                color="error"
                fullWidth
                size="large"
                type="submit"
                
                sx={{ marginTop: 2 }}
              >
                Submit details
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );

 }
    
   

 
}