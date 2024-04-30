import React from 'react';
import {Avatar, Card} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


const RoleBlock = (props) => {

    let pLabel;
    if (props.roleClass === 'first') {
        pLabel = 'Преобладающая роль';
    } else if (props.roleClass === 'second') {
        pLabel = 'Второстепенная роль';
    } else {
        pLabel = 'Слабая роль';
    }

    return (
        <Card sx={{display: "flex", alignItems: "space-between", marginTop: "20px", marginBottom: "20px"}}>
            <Box sx={{margin: "25px"}}>
                <Avatar
                    sx={{width: 300, height: 300}}
                    src={props.src}
                    alt=""
                />
                <Typography variant="h5">{pLabel}</Typography>
                <Typography variant="h4">{props.name}</Typography>
            </Box>
            <Box sx={{margin: "25px"}}>
                <Typography variant="h5" sx={{marginBottom: "5px", marginTop: "5px"}}>Краткое описание:</Typography>
                <Typography variant="body1">
                    {props.description}
                </Typography>
                <Typography variant="h5" sx={{marginBottom: "5px", marginTop: "5px"}}>Сильные стороны:</Typography>
                <Typography variant="body1">
                    {props.haracteristic}
                </Typography>
                <Typography variant="h5" sx={{marginBottom: "5px", marginTop: "5px"}}>Слабые стороны:</Typography>
                <Typography variant="body1">
                    {props.weakness}
                </Typography>
                <Typography variant="h5" sx={{marginBottom: "5px", marginTop: "5px"}}>Вклад в команду:</Typography>
                <Typography variant="body1">
                    {props.functionality}
                </Typography>
            </Box>
        </Card>
    );
};

export default RoleBlock;