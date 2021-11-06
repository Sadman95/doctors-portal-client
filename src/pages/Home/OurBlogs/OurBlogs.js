import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Blog from './Blog/Blog';


const blogs = [
    {
        photoUrl: 'https://i.ibb.co/DQBY3nw/people-2.png',
        name: 'Dr Mahia Mahi',
        date: '23 April, 2019',
        title: '2 times of brush in a day can keep you healthy',
        desc: 'It is a long established fact that by the readable content by the layout is easy.content by the layout is easy.',
    },
    {
        photoUrl: 'https://i.ibb.co/pxnLTCF/people-1.png',
        name: 'Dr Hero Alam',
        date: '26 April, 2019',
        title: 'The tooth cancer is taking a challenge',
        desc: 'It is a long established fact that by the readable content by the layout is easy.content by the layout is easy.',
    },
    
]

const firstPaperBg = {
    background: "url('https://i.ibb.co/Q6VBMgT/comma-bg.png') top right no-repeat",
    backgroundSize: 'contain',
    backgroundColor: 'info.main',
    color: 'white',
    backgroundBlendMode: 'multiply'
}

const OurBlogs = () => {
    return (
        <Container sx={{mt: 16}}>
            <Box sx={{textAlign: 'center'}}>
            <Typography color='info.main' variant='p' component='div' sx={{fontWeight: 'bold', mb: 2}}>
                  OUR BLOG
              </Typography>
            <Typography variant='h5' component='div' sx={{mb: 4}}>
                From Our Blog News
            </Typography>
            </Box>

            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={2} sm={4} md={4}>
            <Paper sx={{p: 2,...firstPaperBg}} elevation={0}>
                <Typography sx={{fontWeight: 'bold', mb: 2}} variant='p' component='div'>
                    Rashed Kabir
                </Typography>
                <Typography sx={{mb: 4}} variant='p' component='div'>
                    23 August, 2016
                </Typography>
                <Typography sx={{fontWeight: 'bold', mb: 4}} variant='p' component='div'>
                    Check at least a doctor in a year for your teeth
                </Typography>
                <ArrowRightAltIcon/>
            </Paper>
            </Grid>
        {blogs.map((blog, index) => (
          <Blog blog={blog} key={index}></Blog>
        ))}
      </Grid>
    </Box>

        </Container>
    );
};

export default OurBlogs;