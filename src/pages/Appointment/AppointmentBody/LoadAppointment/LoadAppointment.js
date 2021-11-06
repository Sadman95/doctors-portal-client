import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const LoadAppointment = ({appointment}) => {
    const {appointmentTitle, appointmentSchedule, availableSpaces} = appointment;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Paper sx={{ textAlign: 'center', py: 4}}>
                <Typography color='info.main' variant='h6' component='div'>
                    {appointmentTitle}
                </Typography>
                <Typography variant='p' component='div'>
                    {appointmentSchedule}
                </Typography>
                <Typography sx={{mb: 1}} color='text.secondary' variant='small' component='p'>
                    {availableSpaces} spaces available
                </Typography>
                <Button variant='contained' color='info'>BOOK APPOINTMENT</Button>
            </Paper>
          </Grid>
    );
};

export default LoadAppointment;