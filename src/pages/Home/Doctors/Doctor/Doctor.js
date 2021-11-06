import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import CallIcon from '@mui/icons-material/Call';

const Doctor = ({doctor}) => {
    const {imgURL, name, phoneNumber} = doctor;

    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image={imgURL}
          alt="dr"
        />
        <CardContent sx={{textAlign: 'center'}}>
          <Typography gutterBottom sx={{fontWeight: 'bold'}} variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <CallIcon sx={{mb: -1}}/>+{phoneNumber}
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
          </Grid>
    );
};

export default Doctor;