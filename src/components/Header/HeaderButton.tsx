import React from 'react';
import {Button, ButtonProps} from "@mui/material";

const HeaderButton = (props: ButtonProps) => {
    return (
        <Button
            sx={{ my: 2, color: 'white', display: 'block', fontSize: "0.9rem"}}
            {...props}
        >
            {props.children}
        </Button>
    );
};

export default HeaderButton;