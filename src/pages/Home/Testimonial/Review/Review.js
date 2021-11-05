import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Review = ({review}) => {
    const {description, image, name, location} = review;
    return (
        <Grid item xs={2} sm={4} md={4}>
        <Card sx={{ maxWidth: 345}}>
      <CardActionArea sx={{ p: 4 }}>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
        <CardMedia
          component="img"
          sx={{height: '50px', width: '50px'}}
          image={image}
          alt="reviewer"
        />
        <Box>
        <Typography sx={{fontWeight: 'bold'}} variant="body2" color="info.main">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {location}
          </Typography>
        </Box> 
        </Box>
        
      </CardActionArea>
    </Card>
    </Grid>
    );
};

export default Review;