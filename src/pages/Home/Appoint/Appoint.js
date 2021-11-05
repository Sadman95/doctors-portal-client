import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Appoint.css'

const appointBg= {
    backgroundImage: "url('https://i.ibb.co/6HkJXdw/appointment-bg.png')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top-right',
    position: 'relative',
    zIndex: 1
}

const Appoint = () => {
    return (
        
        <Box sx={{ mt: 16, mb: 4}}>
            <Container className='appointContainer' sx={{...appointBg}}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6}>
            <img style={{marginTop: '-140px', verticalAlign: 'middle'}} width='100%' src="https://i.ibb.co/QrwNj9B/doctor.png" alt="doctor" />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{mt: 8}}
          >
              <Typography color='info.main' variant='p' component='div' sx={{fontWeight: 'bold', mb: 4}}>
                  APPOINTMENT
              </Typography>
            <Typography color='white' variant='h5' component='div' sx={{mb: 4}}>
                Make your appointment <br /> today
            </Typography>
            <Typography color='white' variant='p' component='div' sx={{mb: 4}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto placeat harum nisi pariatur facere 
              </Typography>
            <Button variant="contained" sx={{ bgcolor: "info.main" }}>
              LEARN MORE
            </Button>
          </Grid>
        </Grid>
        </Container>
        </Box>
      
    );
};

export default Appoint;