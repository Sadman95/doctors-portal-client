import {
  Button,
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Alert,
  ButtonGroup,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import GoogleIcon from "@mui/icons-material/Google";
import Facebook from "@mui/icons-material/Facebook";

const LogIn = () => {
  const {
    signInUser,
    signInWithGoogle,
    signInWithFacebook,
    resetPassword,
    authError,
    setAuthError,
    user,
  } = useAuth();
  const [loginData, setLoginData] = useState({});

  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/login";

  const handleField = (e) => {
    const field = e.target.name;
    const fieldValue = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = fieldValue;
    setLoginData(newLoginData);
  };

  /* sign in */
  const handleSignIn = async (e) => {
    e.preventDefault();
    const email = loginData.email;
    const password = loginData.password;
    try {
      await signInUser(email, password);
    } finally {
      history.push(redirect_url);
    }
    console.log(loginData);
    e.target.reset();
  };

  /* Handle Google Sign In */
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch {
      setAuthError(authError);
    } finally {
      history.replace(redirect_url);
    }
  };

  /* handle fb sign in */
  const handleFacebookSignIn = async () => {
    try {
      await signInWithFacebook();
    } catch {
      setAuthError(authError);
    } finally {
      history.replace(redirect_url);
    }
  };

  /* reset password */
  const handlePasswordReset = (email) => {
    resetPassword(email).then(() => {
      alert("Password reset email sent");
    });
  };

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
                LogIn
              </Typography>
              <form onSubmit={handleSignIn}>
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

                {authError && (
                  <Alert sx={{ width: "75%", mt: 2 }} severity="error">
                    {authError}
                  </Alert>
                )}
                {user.email && (
                  <Alert sx={{ width: "75%", mt: 2 }} severity="success">
                    Log In Successful
                  </Alert>
                )}

                <Typography sx={{ mt: 2 }} variant="subtitle2" color="red">
                  Forgot your password?
                  <Button
                    variant="text"
                    color="warning"
                    onClick={() => handlePasswordReset(loginData.email)}
                  >
                    Reset
                  </Button>
                </Typography>
                <Button
                  sx={{ width: "75%", my: 6 }}
                  type="submit"
                  variant="contained"
                  color="info"
                >
                  Sign In
                </Button>
                <Typography variant="subtitle1" color="info.main">
                  Don't have an account? Please{" "}
                  <NavLink to="/register">Register</NavLink>
                </Typography>

                <Typography
                  color="GrayText"
                  variant="subtitle2"
                  component="div"
                >
                  -------------------or--------------------
                </Typography>
                <ButtonGroup sx={{ mt: 2 }}>
                  <Button
                    onClick={handleGoogleSignIn}
                    variant="outlined"
                    color="primary"
                  >
                    <GoogleIcon />
                  </Button>
                  <Button
                    onClick={handleFacebookSignIn}
                    variant="outlined"
                    color="primary"
                  >
                    <Facebook />
                  </Button>
                </ButtonGroup>
              </form>
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

export default LogIn;
