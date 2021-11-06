import React from 'react';
import TextField from '@mui/material/TextField';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

const Calendar = (props) => {
    const {date, setDate} = props;
    return (
        <LocalizationProvider dateAdapter={DateAdapter}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        openTo="day"
        value={date}
        onChange={(newValue) => {
            setDate(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
    );
};

export default Calendar;