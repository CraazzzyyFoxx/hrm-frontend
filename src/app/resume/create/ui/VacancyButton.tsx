import React from 'react';
import {ButtonProps, Button} from "@mui/material";

const VacancyButton = (props: ButtonProps) => {
    return (
        <Button
            variant="outlined"
            {...props}
            sx={{
                marginRight: "10px",
                marginTop: "10px",
                borderRadius: "16px",
                padding: "1px, 10px",
                minHeight: "32px",
            }}
        >
            {props.children}
        </Button>
    );
};

export default VacancyButton;