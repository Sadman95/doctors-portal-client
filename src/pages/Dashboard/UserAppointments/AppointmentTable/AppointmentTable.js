import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import {useHistory} from 'react-router-dom'





const AppointmentTable = ({appointments}) => {
    const history = useHistory()

    const handlePayment = id =>{
      history.push(`/dashboard/appointments/${id}`);
    }

    return (
        <div>
             <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Time Slot</TableCell>
            <TableCell>Service Name</TableCell>
            <TableCell>Action</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.patientName}
              </TableCell>
              <TableCell>{row.schedule}</TableCell>
              <TableCell>{row.serviceName}</TableCell>
              <TableCell>
                {
                  row.payment ? 'Paid' : <Button onClick={()=>handlePayment(row._id)} variant='contained' color='warning'>Pay</Button>
                }
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default AppointmentTable;