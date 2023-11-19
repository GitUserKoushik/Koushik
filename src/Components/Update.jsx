import React, { useEffect, useState } from "react";
import { Container,Grid, CardHeader,Paper, TextField, Button } from '@mui/material';
import {useParams } from "react-router-dom";
import { productDetails, productUpdate } from "../Redux/ProSlice";
import { useDispatch, useSelector } from "react-redux";
//import image from "../../image/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg";
const Update = () => {
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const { id } = useParams();
  const { det } = useSelector((state) => state.Pro);

  useEffect(() => {
    dispatch(productDetails(id));
  }, [dispatch, id]);
  console.log(id, "params");
  const [img, setimg] = useState("");

  console.log(img, "photo");
  const [user, setUser] = useState({
    title: "",
    description: "",
  });

  const validation = () => {
    let error = {};

    if (!user.title) {
      error.title = "Title is Required";
    }

    if (!user.description) {
      error.description = "Description is Required";
    }
    return error;
  };

  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;

    if (name === "title") {
      if (value.length === 0) {
        setError({ ...error, title: "Title is Required" });
        setUser({ ...user, title: "" });
      } else {
        setError({ ...error, title: "" });
        setUser({ ...user, title: value });
      }
    }

    if (name === "description") {
      if (value.length === 0) {
        setError({ ...error, description: "Description is Required" });
        setUser({ ...user, description: "" });
      } else {
        setError({ ...error, description: "" });
        setUser({ ...user, description: value });
      }
    }
  };

  // const c

  // console.log(error);

  const SubmitInfo = (e) => {
    e.preventDefault();
    setError(validation());

    let formData = new FormData();
    formData.append("title", user.title);
    formData.append("description", user.description);
    if (img) {
      formData.append("image", img);
    } else {
      formData.append("image", det.image);
    }
    formData.append("id", id);
    dispatch(productUpdate(formData));
  };

  useEffect(() => {
    if (det !== null) {
      setUser({
        title: det?.title,
        description: det?.description,
      });
    }
  }, [det]);

//   useEffect(() => {
//     const RedirectUser = () => {
//       let title = localStorage.getItem("title");
//       let isInLoginPage =
//         window.location.pathname.toLowerCase() === `/update/${id}`;
//       if (title !== null && title !== undefined && title !== "") {
//         isInLoginPage && navigate("/productlist");
//       }
//     };
//     RedirectUser();
//   }, [navigate, id]);
  return (
    <div style={{
      backgroundImage: `url(https://images.unsplash.com/photo-1696185570507-2d1283399560?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      height:'80vh',
      position:'relative',
      top:15,
  }}>
      <Container>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6} sx={{ margin: "0 auto" }}>
          <Paper elevation={24}  square={false}sx={{ padding: 2,   backgroundColor: 'rgba(255, 255, 255, 0.2)', border:'2px solid' ,borderColor:'#3fb572'}}>
      <CardHeader title="create item"    style={{ 
            color: '#3fb572',
            borderBottom: '2px solid #3fb572',
            padding: '10px'
          }}/>
            <form>
              <TextField
                label="Title"
                value={user.title}
                onChange={postUserData}
                name="title"
                margin="normal"
                fullWidth
                error={error.title}
                helperText={error.title && "Title is required"}
              />
              <TextField
                label="Description"
                value={user.description}
                onChange={postUserData}
                name="description"
                margin="normal"
                fullWidth
                error={error.description}
                helperText={error.description && "Description is required"}

              />
              <Button
                variant="contained"
                component="label"
                fullWidth
              >
                Upload Image
                <input
                  type="file"
                  hidden
                  onChange={(e) => setimg(e.target.files[0])}
                  name="img"
                  accept="image/*"
                />
                </Button>
                 {img !== "" && img !== undefined && img !== null ? (
                    <img
                      height="40px"
                      src={URL.createObjectURL(img)}
                      alt=""
                      className="upload-img"
                    />
                  ) : (
                    <>
                      {det?.image === "" ? (
                        <img
                          height="70px"
                          //src={image}
                          alt=""
                          
                        />
                      ) : (
                        <img
                          height="60px"
                          src={`https://wtsacademy.dedicateddevelopers.us/uploads/product/${det?.image}`}
                          alt=""
                          
                        />
                      )}
                    </>
                  )}
                  {img === "" && <p>Drag or drop content here</p>}
              
              <Button
                type="submit"
                onClick={SubmitInfo}
                variant="contained"
                color="primary"
                style={{ marginTop: "1rem" }}
                fullWidth
              >
                Update
              </Button>
            </form>
            </Paper>
            </Grid>
            </Grid>
          
        
      </Container>
    </div>
    );

  ;
};

export default Update;