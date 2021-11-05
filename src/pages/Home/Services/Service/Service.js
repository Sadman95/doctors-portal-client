import { Paper, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';


const Service = ({service}) => {
    const {title, description, imgIcon} = service;
    return (
        <Grid item xs={2} sm={4} md={4}>
            <Paper elevation={0}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{height: '150px',width: '40%', mx: 'auto'}}
          image={imgIcon}
          alt="card icon"
        />
        <CardContent>
          <Typography sx={{fontWeight: 'bold'}} gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="p" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Paper>
        </Grid>
    );
};

export default Service;