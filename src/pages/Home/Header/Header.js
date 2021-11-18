import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import "./Header.css";
import { useNavigate } from "react-router";


const Header = () => {

  const navigate = useNavigate();

  const headerBg = {
    background: "url('https://i.ibb.co/0nh8Bpr/bg.png') left top no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "700px",
    display: "flex",
    alignItems: "center",
  };

  return (
    <Box className="headerAfter" sx={{ flexGrow: 1, ...headerBg }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={5}>
            <Typography
              sx={{ fontSize: "40px", fontWeight: "bold", mb: 2 }}
              variant="h1"
              component="div"
            >
              Your New Smiles <br /> Starts Here
            </Typography>
            <Typography
              variant="p"
              component="div"
              sx={{ color: "text.secondary", mb: 2 }}
            >
              Want a quick solution from our Doctors!!!. We provide best doctors
              with special home service.If you want an appointment asap, please
              you are surely can do it from here.
            </Typography>
            <Button onClick={()=> navigate('/appointments')} variant="contained" sx={{ bgcolor: "info.main" }}>
              GET APPOINTMENT
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={7}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <img
              width="80%"
              src="https://i.ibb.co/Lg3yCmt/chair.png"
              alt="chair"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
