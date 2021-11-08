import React, { useState } from "react";
import {
  Button,
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Alert,
  CircularProgress,
} from "@mui/material";
import { useLocation, useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';
import useAuth from "../../../hooks/useAuth";

const Register = () => {

  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || '/register'; 

  const [loginData, setLoginData] = useState({});
  const [error, setError] = useState("");
  const {signInWithGoogle, authError, registerUser, user, loading} = useAuth();

  /* Handle On Blur Input Field */
  const handleField = (e) => {
    const field = e.target.name;
    const fieldValue = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = fieldValue;
    setLoginData(newLoginData);
  };


  if(loading){
    return <CircularProgress />
  }

  /* Sign Up With Email & Password */
  const handleRegister = (e) => {
    e.preventDefault();
    if(!/^[a-zA-Z ]{2,30}$/.test(loginData.name)){
      setError('Name must only contain letters more than 2 to 30 characters');
      return;
    }
    else if(!/^\S+@\S+\.\S+$/.test(loginData.email)){
      setError('Invalid email format');
      return;
    }
    else if (loginData.password !== loginData.password_2) {
      setError("Password didn't match");
      return;
    } else if (
      !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/.test(
        loginData.password
      )
    ) {
      setError(
        "Require at least 6 characters of one uppercase, one lower case, one digit & one special character"
      );
      return;
    }
    registerUser(loginData.email, loginData.password);
    // updateUser(loginData.name);
    console.log(loginData);
    e.target.reset();
  };

  /* Handle Google Sign In */
  const handleGoogleSignIn = async () =>{
        try{
          await signInWithGoogle();
        }
        catch{
          setError(authError);
        }
        finally{
          history.push(redirect_url);
        }
  }
  return (
    <Container sx={{ mt: 16 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ sm: 2, md: 3 }} columns={{ sm: 4, md: 12 }}>
          <Grid
            item
            sm={4}
            md={6}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box>
              <Typography
                color="coral"
                sx={{ mb: 6 }}
                variant="body1"
                component="div"
              >
                Register
              </Typography>
              <form onSubmit={handleRegister}>
              <TextField
                  sx={{ width: "75%" }}
                  type="text"
                  onBlur={handleField}
                  name="name"
                  id="standard-basic"
                  label="Your Name"
                  variant="standard"
                />

                <TextField
                  sx={{ width: "75%" }}
                  type="email"
                  onBlur={handleField}
                  name="email"
                  id="standard-basic"
                  label="Your Email"
                  variant="standard"
                />

                <TextField
                  sx={{ width: "75%" }}
                  type="password"
                  onBlur={handleField}
                  name="password"
                  id="standard-basic"
                  label="Password"
                  variant="standard"
                />

                <TextField
                  sx={{ width: "75%" }}
                  type="password"
                  onBlur={handleField}
                  name="password_2"
                  id="standard-basic"
                  label="Confirm Password"
                  variant="standard"
                />

                {(authError || error)&& (
                  <Alert sx={{ width: "75%", mt: 2 }} severity="error">
                    {error}
                  </Alert>
                )}
                {user.email && (
                  <Alert sx={{ width: "75%", mt: 2 }} severity="success">
                    User created successfully
                  </Alert>
                )}

                <Button
                  sx={{ width: "75%", my: 6 }}
                  type="submit"
                  variant="contained"
                  color="info"
                >
                  Register
                </Button>
                <Typography variant="subtitle1" color="info.main">
                  Already registered? Please{" "}
                  <NavLink to="/logIn">LogIn</NavLink>
                </Typography>
              </form>
              <Button onClick={handleGoogleSignIn} sx={{mt: 2}} variant='outlined' color='primary'><GoogleIcon/></Button>
            </Box>
          </Grid>
          <Grid item sm={4} md={6}>
            <img
              width="100%"
              src="https://i.ibb.co/CWDgJX7/login.png"
              alt="login"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Register;
