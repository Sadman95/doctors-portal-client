import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { Avatar, Chip } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const Navigation = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  

  const {user, logOut} = useAuth();
  // console.log(user);
  const navigate = useNavigate();


  /* dashboard */
  const myDashboard = () =>{
    navigate('/dashboard');
  }


  /* log out */
  const handleSignOut = async () =>{
    try{
      await logOut();
    }
    finally{
      navigate('/home');
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
          <Typography onClick={()=>navigate('/home')} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Doctor's Portal
          </Typography>
          
          
          
          <Link style={{textDecoration: 'none', color: 'white'}} to='/appointments'>
          <Button variant='text' color="inherit">Appointments</Button>
          </Link>
          {
            user.displayName || user.email ? 
            <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
            <Chip
            avatar={<Avatar
              alt="userPhoto"
              src={user.photoURL}
            />}
            label={user.displayName}
            color='info'
          /></Button>:
            <Button onClick={()=>navigate('/logIn')} color="inherit">Login</Button>
            
            
             
      
          }
          <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={myDashboard}>Dashboard</MenuItem>
        
      </Menu>

          {
            (user.displayName || user.email) ? '' : <Button onClick={()=>navigate('/register')} color="inherit">Register</Button>

          }

        {
          (user.displayName || user.email) && <Button onClick={handleSignOut} variant='text' color='warning'>
          <LogoutIcon/>
        </Button>
        }
          
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
