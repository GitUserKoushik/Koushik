import { useForm } from "react-hook-form";
import { Button, Container, Grid, TextField, Paper} from "@mui/material";
import { regauth } from "../Redux/Authslice";
import { useDispatch } from "react-redux";




export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    
    const { first_name, last_name, email, password } = data;
    const formData = new FormData();
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("email", email);
    formData.append("password", password);
   

   

    dispatch(regauth(formData));

    
  };

  return (
    <Container>
      <h1 style={{textAlign:"center"}}>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} style={{marginLeft:"120px"}}>
      <Paper elevation={5}  sx={{ padding: 5 }}style={{marginTop:"80px"}}>
        <Grid container maxWidth={1100} spacing={2}>
        
        <Grid item sm={6}>
            <TextField
              label="First Name"
              fullWidth
              {...register("first_name", { required: true, minLength: 3 })}
              error={!!errors.first_name}
              helperText={errors.first_name?.type === "required" ? "First name is required" : errors.first_name?.type === "minLength" ? "Minimum 3 characters are required" : ""}
            />
          </Grid>
          <Grid item sm={6}>
            <TextField label="Last Name" fullWidth {...register("last_name", { required: true })} error={!!errors.last_name} helperText={errors.last_name && "Last name is required"} />
          </Grid>
          
          <Grid item sm={6}>
            <TextField
              label="Email"
              fullWidth
              {...register("email", { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })}
              error={!!errors.email}
              helperText={errors.email?.type === "required" ? "Email is required" : errors.email?.type === "pattern" ? "Valid email is required" : ""}
            />
          </Grid>
          
          <Grid item sm={6}>
            <TextField
              label="Password"
              fullWidth
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message: "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number, and one special character",
                },
              })}
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ""}
            />
          </Grid>
          
          <Grid item sm={12}>
            <Button type="submit" variant="contained" color="error" fullWidth size="large">
              Submit
            </Button>
           
          </Grid>
          
        </Grid>
        </Paper>
      </form>
    </Container>
  );
}