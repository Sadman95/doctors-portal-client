import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth'
import AppointmentTable from './AppointmentTable/AppointmentTable';

const UserAppointments = ({date}) => {
    console.log(date);
    const toDate = new Date(date).toLocaleDateString();
    console.log(toDate);
    const {user} = useAuth();

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/allAppointments?email=${user.email}&date=${toDate}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
        .then(res => res.json())
        .then(data => setAppointments(data))
    }, [toDate, user.email])

    return (
        <div>
            <Typography sx={{textAlign: 'center', fontWeight: 'bold', mb: 2}} variant='h6' component='div'>
                Appointments: {appointments.length}
            </Typography>
            <AppointmentTable appointments={appointments}></AppointmentTable>
        </div>
    );
};

export default UserAppointments;