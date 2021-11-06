import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {

    const footerBg = {
        background: "url('https://i.ibb.co/6Nk5Z1g/footer-bg.png') left top no-repeat",
        backgroundSize: 'cover'
    }

    return (
        <Box sx={{ flexGrow: 1, mt: 16 ,...footerBg}}>
      <Container>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={4} sm={4} md={3}>
            <ul style={{listStyle: 'none'}}>
                <Typography variant='p' component='div' color='info.main'>Most Visited</Typography>
                <li>
                    <NavLink style={{color: 'dimGray', textDecoration: 'none'}} to='/'>Emergency Dental Care</NavLink>
                </li>
                <li>
                    <NavLink style={{color: 'dimGray', textDecoration: 'none'}} to='/'>Check Up</NavLink>
                </li>
                <li>
                    <NavLink style={{color: 'dimGray', textDecoration: 'none'}} to='/'>Treatment & Personal Diseases</NavLink>
                </li>
                <li>
                    <NavLink style={{color: 'dimGray', textDecoration: 'none'}} to='/'>Tooth Extraction</NavLink>
                </li>
                <li>
                    <NavLink style={{color: 'dimGray', textDecoration: 'none'}} to='/'>Check Up</NavLink>
                </li>
                
            </ul>
          </Grid>
          <Grid item xs={4} sm={4} md={3}>
            <ul style={{listStyle: 'none'}}>
            <Typography variant='p' component='div' color='info.main'>Services</Typography>
            <li>
                    <NavLink style={{color: 'dimGray', textDecoration: 'none'}} to='/'>Emergency Dental Care</NavLink>
                </li>
                <li>
                    <NavLink style={{color: 'dimGray', textDecoration: 'none'}} to='/'>Check Up</NavLink>
                </li>
                <li>
                    <NavLink style={{color: 'dimGray', textDecoration: 'none'}} to='/'>Treatment & Personal Diseases</NavLink>
                </li>
                <li>
                    <NavLink style={{color: 'dimGray', textDecoration: 'none'}} to='/'>Tooth Extraction</NavLink>
                </li>
                <li>
                    <NavLink style={{color: 'dimGray', textDecoration: 'none'}} to='/'>Check Up</NavLink>
                </li>
                <li>
                    <NavLink style={{color: 'dimGray', textDecoration: 'none'}} to='/'>Tooth Extraction</NavLink>
                </li>
                <li>
                    <NavLink style={{color: 'dimGray', textDecoration: 'none'}} to='/'>Check Up</NavLink>
                </li>
            </ul>
          </Grid>
          <Grid item xs={4} sm={4} md={3}>
            <ul style={{listStyle: 'none'}}>
            <Typography variant='p' component='div' color='info.main'>Oral Health</Typography>
            <li>
                    <NavLink style={{color: 'dimGray', textDecoration: 'none'}} to='/'>Emergency Dental Care</NavLink>
                </li>
                <li>
                    <NavLink style={{color: 'dimGray', textDecoration: 'none'}} to='/'>Check Up</NavLink>
                </li>
                <li>
                    <NavLink style={{color: 'dimGray', textDecoration: 'none'}} to='/'>Treatment & Personal Diseases</NavLink>
                </li>
                <li>
                    <NavLink style={{color: 'dimGray', textDecoration: 'none'}} to='/'>Tooth Extraction</NavLink>
                </li>
                <li>
                    <NavLink style={{color: 'dimGray', textDecoration: 'none'}} to='/'>Check Up</NavLink>
                </li>
                <li>
                    <NavLink style={{color: 'dimGray', textDecoration: 'none'}} to='/'>Treatment & Personal Diseases</NavLink>
                </li>
                <li>
                    <NavLink style={{color: 'dimGray', textDecoration: 'none'}} to='/'>Tooth Extraction</NavLink>
                </li>
                <li>
                    <NavLink style={{color: 'dimGray', textDecoration: 'none'}} to='/'>Check Up</NavLink>
                </li>
            </ul>
          </Grid>
          <Grid item xs={4} sm={4} md={3}>
            <ul style={{listStyle: 'none'}}>
            <Typography variant='p' component='div' color='info.main'>Our Address</Typography>
            <li>
                    <NavLink style={{color: 'dimGray', textDecoration: 'none'}} to='/'>Chittagong CDA, Bangladesh</NavLink>
                </li>
                <li style={{marginTop: 16}}>
                    <FacebookIcon/>
                    <GoogleIcon/>
                    <TwitterIcon/>
                </li>
                <Typography sx={{mt: 16}} variant='p' component='div'>Call Now</Typography>
                <Button variant='contained' color='info'>+00009999</Button>         
            </ul>
          </Grid>
      </Grid>
      </Container>
      <Typography sx={{textAlign: 'center', mt: 16}} variant='small' component='div' color='text.secondary'>Copyright 2021 All Rights reserved</Typography>
    </Box>
    );
};

export default Footer;