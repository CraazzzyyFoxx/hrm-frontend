"use client"

import React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { linearProgressClasses} from "@mui/material";
import {styled} from "@mui/material/styles";


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));


const ColorLinearProgress = (props: LinearProgressProps & { value: number }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <Box sx={{ width: '100%', mr: 1 , marginTop: "2em"}}>
                <BorderLinearProgress variant="determinate" {...props} />
            </Box>
        </Box>
    );
};

export default ColorLinearProgress;