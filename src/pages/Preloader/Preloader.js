import { Box } from '@mui/system';
import React from 'react';

const Preloader = () => {
    return (
        <Box sx={{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0}}>
            <img width='100%' src='https://i.ibb.co/jf2fKcK/dribbble-1.gif' alt='preloader'/>
        </Box>
    );
};

export default Preloader;