import React from 'react';
import { Container, Typography } from '@mui/material';
import { useForm } from "react-hook-form";

const AddAppointment = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
      fetch('https://frozen-bastion-33141.herokuapp.com/appointments', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then(res => {
          if(res.status === 200){
              alert('An appointment is inserted successfully');
          }
      })
      reset();
    };
    return (
        <Container sx={{mt: 16}}>
        <Typography color='warning.main' variant='h6' component='div'>Add Appointment</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
  <input type='text' placeholder="Appointment Title" {...register("appointmentTitle", { required: true })} />
  <br />
  <input type='text' placeholder="Schedule" {...register("appointmentSchedule", { required: true })} />
  <br />
  <input type='number' placeholder='Available Spaces' {...register("availableSpaces", { required: true })} />
  <br />
  {errors.exampleRequired && <span>This field is required</span>}
  
  <input type="submit" value='Add' />
</form>
    </Container>
    );
};

export default AddAppointment;