import React from 'react';
import {Box, Typography} from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon/SvgIcon";


interface StatEventsProps {
    name: string;
    count: number;
    icon: typeof SvgIcon;
}


const StatEvents = (props: StatEventsProps) => {
    return (
        <Box sx={{display: "flex", flexDirection: "row", "justifyContent": "space-between", "alignItems": "center"}}>
            <Box sx={{display: "flex", flexDirection: "row", "justifyContent": "left", "alignItems": "center"}}>
                <props.icon sx={{fontSize: "20px", marginRight: "10px"}}/>
                <Typography variant="body2">{props.name}</Typography>
            </Box>
            <Typography variant="body2">{props.count}</Typography>
        </Box>
    );
};

export default StatEvents;