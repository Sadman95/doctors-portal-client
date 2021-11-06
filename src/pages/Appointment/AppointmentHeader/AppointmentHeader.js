import React from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import '../../Home/Header/Header.css';
import Calendar from './Calendar/Calendar';


const AppointmentHeader = (props) => {
    const {date, setDate} = props;
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
              <Typography sx={{mb: 2}} variant='h4' component='div'>Appointment</Typography>
          <Calendar date={date} setDate={setDate}></Calendar>
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

export default AppointmentHeader;