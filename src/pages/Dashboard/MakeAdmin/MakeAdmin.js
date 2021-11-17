import { Button, TextField, Typography, Alert } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e =>{
        setEmail(e.target.value);
    }

    const handleMakeAdmin = e =>{
        e.preventDefault();
        const user = {email};
        fetch('http://localhost:4000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount === 1){
                setSuccess(true);
                e.target.reset();
            }
        })
    }

    return (
        <Box sx={{textAlign: 'center', mt: 16}}>
            {
                success && <Alert sx={{width: '50%'}} variant='filled' severity='success'>Added as admin successfully</Alert>
            }
            <Typography variant='h5' color='InfoText' sx={{mx: 4,fontWeight: 'bold'}}>
                Make An Admin
            </Typography>
            <form onSubmit={handleMakeAdmin}>
                <TextField sx={{width: '50%'}} onBlur={handleOnBlur} type='email' label="Email" variant="standard" />
                <Button type='submit' variant='contained'>Make Admin</Button>
            </form>
        </Box>
    );
};

export default MakeAdmin;