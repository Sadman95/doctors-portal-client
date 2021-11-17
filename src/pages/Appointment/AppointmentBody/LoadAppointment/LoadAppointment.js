import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import AppointModal from '../AppointModal/AppointModal';

const LoadAppointment = (props) => {
    const {currentDate} = props;
    const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

    const {appointmentTitle, appointmentSchedule, availableSpaces, price} = props.appointment;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Paper sx={{ textAlign: 'center', py: 4}}>
                <Typography color='info.main' variant='h6' component='div'>
                    {appointmentTitle}
                </Typography>
                <Typography variant='p' component='div'>
                    {appointmentSchedule}
                </Typography>
                <Typography sx={{mb: 1}} color='text.secondary' variant='small' component='p'>
                    {availableSpaces} spaces available
                </Typography>
                <Typography sx={{mb: 1}} color='text.secondary' variant='small' component='p'>
                    Price ${price}
                </Typography>
                <Button onClick={handleOpen} variant='contained' color='info'>BOOK APPOINTMENT</Button>
                <AppointModal handleClose={handleClose} appointmentTitle={appointmentTitle} appointmentSchedule={appointmentSchedule} currentDate={currentDate} price={price} openModal={openModal}></AppointModal>
            </Paper>
          </Grid>
    );
};

export default LoadAppointment;