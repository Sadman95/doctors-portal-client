import { Grid } from '@mui/material';
import React, { useState } from 'react';
import Calendar from '../../Appointment/AppointmentHeader/Calendar/Calendar';
import UserAppointments from '../UserAppointments/UserAppointments';

const DashboardHome = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={4} sm={8} md={5}>
            <Calendar date={date} setDate={setDate}></Calendar>
          </Grid>
          <Grid item xs={4} sm={8} md={7}>
            <UserAppointments date={date}></UserAppointments>
          </Grid>
        </Grid>
        </div>
    );
};

export default DashboardHome;