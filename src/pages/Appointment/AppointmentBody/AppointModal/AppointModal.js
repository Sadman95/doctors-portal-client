import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import { Typography } from '@mui/material';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
  };

const AppointModal = (props) => {
    const {currentDate, appointmentSchedule, appointmentTitle} = props;
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();
    }

    const {openModal, handleClose} = props;

    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box sx={style}>
              <Typography sx={{textAlign: 'center', mb: 4}} variant='p' component='div' color='info.main'>
                  {appointmentTitle}
              </Typography>
          
          <form style={{textAlign: 'center'}} onSubmit={handleSubmit(onSubmit)}>
      <input style={{width: '80%', padding: 12, marginBottom: 12}} type='text' value={appointmentSchedule} {...register("schedule", { required: true })} />
      <br />
      <input style={{width: '80%', padding: 12, marginBottom: 12}} type='text' placeholder='Your Name' {...register("name", { required: true })} />
      <br />
      <input style={{width: '80%', padding: 12, marginBottom: 12}} type='number' placeholder='Your Number' {...register("number", { required: true })} />
      <br />
      <input style={{width: '80%', padding: 12, marginBottom: 12}} type='email' placeholder='Your Email' {...register("email", { required: true })} />
      <br />
      <input style={{width: '80%', padding: 12, marginBottom: 12}} type='text' value={currentDate.toDateString()} {...register("date", { required: true })} />
      <br />
      {errors.exampleRequired && <span>This field is required</span>}
      
      <Button variant='contained' color='info' type='submit'>SEND</Button>
    </form>
          </Box>
        </Fade>
      </Modal>
    );
};

export default AppointModal;