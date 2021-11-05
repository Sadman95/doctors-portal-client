import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import Service from './Service/Service';

const services = [
    {
        title: 'Fluoride Treatment',
        description: 'We provide best fluoride treatment for your teeth. We have available specialist for this treatment.',
        imgIcon: 'https://i.ibb.co/jfFpzJZ/fluoride.png'
    },
    {
        title: 'Cavity Filling',
        description: 'We provide best cavity filling for your teeth. We have available specialist for this treatment.',
        imgIcon: 'https://i.ibb.co/h2Dk8fL/cavity.png'
    },
    {
        title: 'Teeth Whitening',
        description: 'We provide best teeth whitening for your teeth. We have available specialist for this treatment.',
        imgIcon: 'https://i.ibb.co/c2LtFb7/whitening.png'
    },
]

const Services = () => {
    return (
        <Container>
            <Box sx={{textAlign: 'center', mt: 12}}>
            <Typography sx={{fontWeight: 'bold', mb: 2}} color='info.main' variant='h6'>
                OUR SERVICES
            </Typography>
            <Typography color='text.primary' variant='h4' sx={{fontWeight: 'bold', mb: 16}}>
                Services We Provide
            </Typography>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {services.map((service, i) => (
          <Service service={service} key={i}></Service>
        ))}
      </Grid>

        </Box>
        </Container>
    );
};

export default Services;