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


const Navigation = () => {
  const history = useHistory();
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
          <Button onClick={()=>history.push('/logIn')} color="inherit">Login</Button>
          <Link style={{textDecoration: 'none', color: 'white'}} to='/appointments'>
          <Button variant='text' color="inherit">Appointments</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
