import React from 'react';
import Button, {ButtonProps} from "@mui/material/Button";

const ChoseButton = (props: ButtonProps) => {
    return (
        <Button
            variant="outlined"
            sx={{
                marginRight: "10px",
                marginTop: "10px",
                borderRadius: "16px",
                padding: "1px, 10px",
                minHeight: "32px",
            }}
            {...props}
        >
            {props.children}
        </Button>
    );
};

export default ChoseButton;