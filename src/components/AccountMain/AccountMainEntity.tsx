import React, {FC} from 'react';
import {Box, Divider} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";


interface UserPopoverProps {
    name: string
    value: string
    onClick: () => any
}


const AccountMainEntity: FC<UserPopoverProps> = (props) => {
    return (

        <Grid xs={8}>
            <Box
                sx={{
                    background: "#f4f6fb",
                    justifyContent: "space-between",
                    alignItems: "center",
                    display: "flex",
                    padding: "0.5em",
                }}>
                <Typography sx={{
                    minWidth: "175px"
                }}
                >
                    {props.name}
                </Typography>
                <Typography sx={{
                    minWidth: "300px"
                }}>
                    {props.value}
                </Typography>
                <Button {...props}>Изменить</Button>
            </Box>
            <Divider/>
        </Grid>
    );
};

export default AccountMainEntity;