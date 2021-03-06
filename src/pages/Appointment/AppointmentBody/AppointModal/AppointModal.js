import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import {  Typography } from "@mui/material";
import useAuth from "../../../../hooks/useAuth";
import axios from "axios";
import swal from "sweetalert";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
};

const AppointModal = (props) => {
  const { user } = useAuth();
  const { currentDate, price, appointmentSchedule, appointmentTitle, openModal, handleClose } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.serviceName = appointmentTitle;
    data.price = price;
    axios.post("http://localhost:4000/allAppointments", data).then((res) => {
      if (res.data.insertedId) {
        swal("Congratulations!", "Your appointment is taken successfully!", "success");
        handleClose();
      }
    });
    
  };



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
          <Typography
            sx={{ textAlign: "center", mb: 4 }}
            variant="p"
            component="div"
            color="info.main"
          >
            {appointmentTitle}
          </Typography>

          <form
            style={{ textAlign: "center" }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              style={{ width: "80%", padding: 12, marginBottom: 12 }}
              type="text"
              value={appointmentSchedule}
              {...register("schedule", { required: true })}
            />
            <br />
            <input
              style={{ width: "80%", padding: 12, marginBottom: 12 }}
              type="text"
              defaultValue={user.displayName}
              {...register("patientName", { required: true })}
            />
            <br />
            <input
              style={{ width: "80%", padding: 12, marginBottom: 12 }}
              type="number"
              placeholder="Your Number"
              {...register("number", { required: true })}
            />
            <br />
            <input
              style={{ width: "80%", padding: 12, marginBottom: 12 }}
              type="email"
              defaultValue={user.email}
              {...register("email", { required: true })}
            />
            <br />
            <input
              style={{ width: "80%", padding: 12, marginBottom: 12 }}
              type="text"
              value={currentDate.toLocaleDateString()}
              {...register("date", { required: true })}
            />
            <br />
            {errors.exampleRequired && <span>This field is required</span>}

            <Button variant="contained" color="info" type="submit">
              SEND
            </Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default AppointModal;
