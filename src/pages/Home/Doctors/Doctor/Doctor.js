import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Email } from '@mui/icons-material';

const Doctor = ({doctor}) => {
    const {name, email, photo} = doctor;

    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image={`data:image/*;base64, ${photo}`}
          alt="dr"
        />
        <CardContent sx={{textAlign: 'center'}}>
          <Typography gutterBottom sx={{fontWeight: 'bold'}} variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Email sx={{mb: -1}}/>{email}
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
          </Grid>
    );
};

export default Doctor;