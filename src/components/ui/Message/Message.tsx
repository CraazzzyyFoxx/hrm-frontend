import React, {FC} from 'react';
import Box from "@mui/material/Box";


interface MessageProps {
    children: React.ReactNode
}


const Message: FC<MessageProps> = (props) => {
    return (
        <Box
            sx={{
                backgroundColor: "#e5e8ec",
                borderRadius: "0 16px 16px",
                padding: "16px",
                flexGrow: 1,
                display: "flex",
                marginTop: "16px",
                marginBottom: "16px",
            }}>
            {props.children}
        </Box>
    );
};

export default Message;