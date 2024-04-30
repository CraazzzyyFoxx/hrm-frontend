import React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Message = ({children}) => {
    return (
        <Box
            sx={{
                backgroundColor: "#c0c0c0",
                borderRadius: "0 16px 16px",
                padding: "16px",
                flexGrow: 1,
                display: "flex",
                marginTop: "16px",
                marginBottom: "16px",
            }}>
            {children}

        </Box>
    );
};

export default Message;