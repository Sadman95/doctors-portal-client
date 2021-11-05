import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Care = () => {
    return (
        <Container>
        <Box sx={{flexGrow: 1, mt: 16}}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={5}>
            <img height='550px' width='100%' src="https://i.ibb.co/CsfFXDf/treatment.png" alt="treatment" />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={7}
            sx={{mt: 8}}
          >
              <Typography variant='h4' sx={{fontWeight: 'bold', mb: 6}}>
                  Exceptional Dental  <br />Care, on Your Terms 
              </Typography>
            <Typography color='text.secondary' variant='p' component='div' sx={{mb: 6, pr: 2}}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit expedita reiciendis voluptate, architecto nulla ab officia ad minima quibusdam? Obcaecati magni rerum reiciendis ullam aut et id eaque cum asperiores facere mollitia culpa eligendi inventore cumque expedita, reprehenderit possimus nesciunt. Pariatur modi eligendi ullam cumque debitis sapiente ipsum fugit ex?
            </Typography>
            <Button variant="contained" sx={{ bgcolor: "info.main" }}>
              LEARN MORE
            </Button>
          </Grid>
        </Grid>
        </Box>
      </Container>
    );
};

export default Care;