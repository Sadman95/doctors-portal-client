import React from 'react';
import AppointmentBody from './AppointmentBody/AppointmentBody';
import AppointmentHeader from './AppointmentHeader/AppointmentHeader';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AppointmentBody date={date}></AppointmentBody>
        </div>
    );
};

export default Appointment;