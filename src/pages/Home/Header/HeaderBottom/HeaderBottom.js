import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { CardContent, Container, Typography } from '@mui/material';

const HeaderBottom = () => {
    return (
                <Container>
                    <Box sx={{ flexGrow: 1, fontSize: '16px', mt: '-90px'}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={4} md={4}>
          <Paper sx={{display: 'flex', alignItems: 'center',justifyContent: 'center', bgcolor: 'info.main', color: 'white'}} elevation={0}>
            <AccessTimeIcon sx={{fontSize: '48px'}}/>
            <CardContent>
            <Typography variant='p' component='div'>
                Opening Hours
            </Typography>
            <Typography variant='p' component='div'>
                From 10.00 am - To 10 pm
            </Typography>
            </CardContent>
          </Paper>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
          <Paper sx={{display: 'flex', alignItems: 'center',justifyContent: 'center' ,bgcolor: 'text.secondary', color: 'white'}} elevation={0}>
            <LocationOnIcon sx={{fontSize: '48px'}}/>
            <CardContent>
            <Typography variant='p' component='div'>
                Visit our location
            </Typography>
            <Typography variant='p' component='div'>
                2 No. Gate, Chittagong
            </Typography>
            </CardContent>
          </Paper>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
          <Paper sx={{display: 'flex', alignItems: 'center',justifyContent: 'center', bgcolor: 'info.main', color: 'white'}} elevation={0}>
            <PhoneInTalkIcon sx={{fontSize: '48px'}}/>
            <CardContent>
            <Typography variant='p' component='div'>
                Contact us now
            </Typography>
            <Typography variant='p' component='div'>
                +01877775555
            </Typography>
            </CardContent>
          </Paper>
          </Grid>
      </Grid>
    </Box>
                </Container>
    );
};

export default HeaderBottom;