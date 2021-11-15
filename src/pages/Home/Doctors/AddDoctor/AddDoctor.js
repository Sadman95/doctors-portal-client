import React from 'react';
import { Container, Typography } from '@mui/material';
import { useForm } from "react-hook-form";


const AddDoctor = () => {

    const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    fetch('https://frozen-bastion-33141.herokuapp.com/doctors', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => {
        if(res.status === 200){
            alert('A Doctor inserted successfully');
        }
    })
    reset();
  };

    return (
        <Container sx={{mt: 16}}>
            <Typography color='warning.main' variant='h6' component='div'>Add Doctor</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input type='url' placeholder="Doctor Image Url" {...register("imgURL", { required: true })} />
      <br />
      <input type='text' placeholder="Doctor Name" {...register("name", { required: true })} />
      <br />
      <input type='number' placeholder='Phone Number' {...register("phoneNumber", { required: true })} />
      <br />
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" value='Add' />
    </form>
        </Container>
    );
};

export default AddDoctor;