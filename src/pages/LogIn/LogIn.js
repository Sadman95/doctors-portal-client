import Google from '@mui/icons-material/Google';
import { Button, Container, Typography } from '@mui/material';
import React from 'react';

const LogIn = () => {
    return (
        <Container sx={{mt: 16}}>
            <Typography color='warning.main' variant='h6' component='div'>
                Please LogIn
            </Typography>
            <Button variant='contained' color='success'><Google></Google></Button>
        </Container>
    );
};

export default LogIn;