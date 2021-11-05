import { Container, Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Review from './Review/Review';




const reviews = [
    
    {
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta rem veniam officia totam error nobis, temporibus ex architecto aperiam maiores doloremque similique nesciunt porro magni dolorum asperiores velit earum amet alias excepturi atque voluptatem neque tenetur.',
        image: 'https://i.ibb.co/DQBY3nw/people-2.png',
        name: 'Joya Herry',
        location: 'Sylhet'
    },
    {
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta rem veniam officia totam error nobis, temporibus ex architecto aperiam maiores doloremque similique nesciunt porro magni dolorum asperiores velit earum amet alias excepturi atque voluptatem neque tenetur.',
        image: 'https://i.ibb.co/pxnLTCF/people-1.png',
        name: 'Sakib Herry',
        location: 'Dhaka'
    },
    {
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta rem veniam officia totam error nobis, temporibus ex architecto aperiam maiores doloremque similique nesciunt porro magni dolorum asperiores velit earum amet alias excepturi atque voluptatem neque tenetur.',
        image: 'https://i.ibb.co/x7QwKSN/people-3.png',
        name: 'Opu Herry',
        location: 'Banderban'
    },
]


const Testimonial = () => {
    return (
        <Container sx={{mt: 16}}>
            <Typography color='info.main' variant='p' component='div' sx={{fontWeight: 'bold', mb: 2}}>
                  TESTIMONIAL
              </Typography>
            <Typography variant='h5' component='div' sx={{mb: 4}}>
                What's Our Patients <br /> Says
            </Typography>

            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
        {reviews.map((review, index) => (
          <Review review={review} key={index}></Review>
        ))}
      </Grid>
    </Box>

        </Container>
    );
};

export default Testimonial;