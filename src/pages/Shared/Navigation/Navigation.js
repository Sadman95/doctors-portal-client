import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { Avatar, Chip } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';


const Navigation = () => {

  /* const {open, handleClick} = props;

  const handleArrow = () =>{
    handleClick();
  } */
  

  const {user, logOut} = useAuth();
  const history = useHistory();

  const handleSignOut = async () =>{
    try{
      await logOut();
    }
    finally{
      history.push('/home');
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography onClick={()=>history.push('/home')} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Doctor's Portal
          </Typography>
          <Link style={{textDecoration: 'none', color: 'white'}} to='/addAppointment'>
          <Button variant='text' color="inherit">Add Appointment</Button>
          </Link>
          <Link style={{textDecoration: 'none', color: 'white'}} to='/addDoctor'>
          <Button variant='text' color="inherit">Add Doctor</Button>
          </Link>
          <Link style={{textDecoration: 'none', color: 'white'}} to='/appointments'>
          <Button variant='text' color="inherit">Appointments</Button>
          </Link>
          {
            !user.email ? 
            <Button onClick={()=>history.push('/logIn')} color="inherit">Login</Button>
            :
            
              <Chip
        avatar={<Avatar
          alt="userPhoto"
          src={user.photoURL}
        />}
        label={user.displayName}
        color='info'
      />
      
          }

          {
            !user.email && <Button onClick={()=>history.push('/register')} color="inherit">Register</Button>

          }

        {
          user.email && <Button onClick={handleSignOut} variant='text' color='warning'>
          <LogoutIcon/>
        </Button>
        }
          
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
