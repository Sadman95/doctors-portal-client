import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import {Elements} from '@stripe/react-stripe-js'


const stripePromise = loadStripe('pk_test_51Jw750L3bvtrvMINVlVFNdpEURHhBOHn3OpyYKTq57ZdqyGjs2G9j8rfExw6POBHtmnMka2O0zY8GG6XUEQWzc1r00UW5PQrvY');

const Payment = ({setPayment}) => {
    const {appointmentId} = useParams();
    const [appointment, setAppointment] = useState({});

    useEffect(()=> {
        fetch(`http://localhost:4000/usersAppointments/${appointmentId}`)
        .then(res => res.json())
        .then(data => setAppointment(data))
    }, [appointmentId])



    return (
        <div>
            <h1>Patient Name: {appointment.patientName}</h1>
            <h2>Pay for: {appointment.serviceName}</h2>
            <p>Pay: ${appointment.price}</p>

            <Elements stripe={stripePromise}>
      <CheckoutForm setPayment={setPayment} appointment={appointment} />
    </Elements>
        </div>
    );
};

export default Payment;