import { Container, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from "react-hook-form";
import './ContactUs.css'


const ContactUs = () => {

    const { register, handleSubmit,reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        reset();
    }

    const contactBg = {
        background: "url('https://i.ibb.co/Kwb6x4T/gynecology.jpg') top right no-repeat",
        backgroundSize: 'cover',
        position: 'relative',
        zIndex: 1
    }

    return (
        <Container className='contact' sx={{mt: 16, mb:4, py:4, ...contactBg}}>
            <Box sx={{textAlign: 'center'}}>
            <Typography color='info.main' variant='p' component='div' sx={{fontWeight: 'bold', mb: 2}}>
                  CONTACT US
              </Typography>
            <Typography color='white' variant='h5' component='div' sx={{mb: 4}}>
                Always Connect With Us
            </Typography>
            </Box>

            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <form style={{width: '60%'}} onSubmit={handleSubmit(onSubmit)}>
      <input style={{width: '100%', padding: 16, marginBottom: 16}} type='email' placeholder='Email Address*' {...register("email", { required: true })} />
      <br />
      <input style={{width: '100%', padding: 16, marginBottom: 16}} type='text' placeholder='Subject*' {...register("subject", { required: true })} />
      <br />
      <textarea style={{width: '100%', padding: 16, marginBottom: 16}} placeholder='Your Message*' {...register("message", { required: true })} />
      <br />
      {errors.exampleRequired && <span>This field is required</span>}
      
      <Button sx={{display: 'table',mx: 'auto'}} variant='contained' color='info' type='submit'>SUBMIT</Button>
    </form>
            </Box>
        </Container>
    );
};

export default ContactUs;