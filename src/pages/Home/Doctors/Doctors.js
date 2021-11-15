import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Doctor from './Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() =>{
        fetch('https://frozen-bastion-33141.herokuapp.com/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    return (
        <Container sx={{mt: 16}}>
            <Typography sx={{fontWeight: 'bold', textAlign: 'center', mb: 4}} color='info.main' variant='p' component='div'>
                OUR DOCTORS
            </Typography>

            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {doctors.map((doctor, index) => (
          <Doctor key={index} doctor={doctor}></Doctor>
        ))}
      </Grid>
    </Box>
        </Container>
    );
};

export default Doctors;