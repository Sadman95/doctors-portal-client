import React, { useState } from 'react';
import { Container, Typography, TextField, Input, Alert, CircularProgress } from '@mui/material';

const AddDoctor = () => {

    //separate states for fields:
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [loader, setLoader] = useState(false);

    if(loader){
        return <CircularProgress/>
    }


    //submit handler:
  const handleSubmit = e => {
      setLoader(true);
    e.preventDefault();
    if(!image){
        setError('Image not inserted!');
        return;
    }

    //new form data to fetch file:
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('image', image)

    //fetch for post a new doctor:
    fetch('http://localhost:4000/doctors', {
        method: 'POST',
        //formData directly sent to body, no stringify require.
        body: formData
    })
    .then(res => res.json())
    .then(result => {
        setSuccess(true);
    })
    .catch(error =>{
        console.log('Error', error.message);
    })
    setLoader(false);
    e.target.reset();
  };

    return (
        <Container sx={{mt: 16, textAlign: 'center'}}>
            <Typography color='warning.main' variant='h6' component='div'>Add Doctor</Typography>
            <form onSubmit={handleSubmit}>
      <Input onBlur={(e)=> setImage(e.target.files[0])} sx={{width: '50%', marginBottom: '10px'}} accept='image/*' type='file' required />
      <br />
      <TextField onBlur={(e)=> setName(e.target.value)} sx={{width: '50%', marginBottom: '10px'}} type='text' placeholder="Doctor Name" required />
      <br />
      <TextField onBlur={(e)=> setEmail(e.target.value)} sx={{width: '50%', marginBottom: '10px'}} type='email' placeholder='Email' required />
      <br />
      
      <input type="submit" value='Add' />
    </form>
    {error && <Alert sx={{marginTop: '6px'}} severity='error'>{error}</Alert>}
    {success && <Alert sx={{marginTop: '6px'}} severity='success'>Doctor added successfully</Alert>}

        </Container>
    );
};

export default AddDoctor;