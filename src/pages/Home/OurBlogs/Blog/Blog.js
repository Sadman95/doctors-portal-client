import { Avatar, CardContent, CardHeader, Grid, Paper, Typography } from '@mui/material';
import React from 'react';



const Blog = ({blog}) => {

    const {photoUrl, name, title, date, desc} = blog;
    return (
        <Grid item xs={2} sm={4} md={4}>
            <Paper>
            <CardHeader
        avatar={
          <Avatar aria-label="drPhoto">
            <img src={photoUrl} alt='drphoto'/>
          </Avatar>
        }
        title={name}
        subheader={date}
      />
      <CardContent>
        <Typography sx={{fontWeight: 'bold'}} gutterBottom variant="p" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
            </Paper>
          </Grid>
    );
};

export default Blog;