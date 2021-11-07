import { Button, Container, Typography, Box, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const LogIn = () => {
    const [loginData, setLoginData] = useState({});

    const handleField = e =>{
        const field = e.target.name;
        const fieldValue = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = fieldValue;
        setLoginData(newLoginData);
    }

    const handleSignIn = e =>{
        e.preventDefault();
        console.log(loginData);
        e.target.reset();
    }

  return (
    <Container sx={{ mt: 16 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ sm: 2, md: 3 }} columns={{ sm: 4, md: 12 }}>
          <Grid item sm={4} md={6} sx={{display: 'flex', alignItems: 'center'}}>
            <Box>
            <Typography color='coral' sx={{mb: 6}} variant="body1" component="div">
              LogIn
            </Typography>
            <form onSubmit={handleSignIn}>
            <TextField 
            sx={{width: '75%'}}
            type='email' 
            onBlur={handleField}
            name='email'
            id="standard-basic" 
            label="Your Email" 
            variant="standard" />

            <TextField 
            sx={{width: '75%'}}
            type='password' 
            onBlur={handleField}
            name='password'
            id="standard-basic" 
            label="Password" 
            variant="standard" />

            <Button sx={{width: '75%', my: 6}} type='submit' variant='contained' color='info'>Sign In</Button>
            <Typography variant='subtitle1' color='info.main'>Don't have an account? Please <NavLink to='/register'>Register</NavLink></Typography>
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
