import { Container, Grid, Typography } from '@mui/material';
import React, {useState, useEffect} from 'react';
import LoadAppointment from './LoadAppointment/LoadAppointment';

const AppointmentBody = (props) => {
    const {date} = props;
    let currentDate = new Date(date);

    const [appointments, setAppointments] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:4000/appointments')
        .then(res => res.json())
        .then(data => setAppointments(data))
    }, [])
    
    return (
        <Container>
            <Typography sx={{fontFamily: 'Poppins', fontWeight: 'medium', textAlign: 'center', my: 4}} color='info.main' variant='h4' component='div'>
                Available Appointments On {currentDate.toDateString()}
            </Typography>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {appointments.map((appointment, index) => (
          <LoadAppointment key={index} appointment={appointment}></LoadAppointment>
        ))}
      </Grid>
        </Container>
    );
};

export default AppointmentBody;