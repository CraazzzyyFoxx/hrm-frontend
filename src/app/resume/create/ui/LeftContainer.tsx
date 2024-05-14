import React from 'react';
import Box from "@mui/material/Box";
import {Avatar} from "@mui/material";
import Container from "@mui/material/Container";

const LeftContainer = (props: any) => {
    return (
        <Container
            maxWidth={false}
            sx={{
                width: "35%",
                marginTop: "2em",
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                alignItems: "flex-end",
            }}
        >
            <Box sx={{padding: "0 48px", width: "480px",}}>
                <Box sx={{padding: "204px 0 48px",}}>
                    <Avatar
                        alt="SAVVA"
                        src="/static/savva.jpg"
                        sx={{marginRight: "1em", marginBottom: "32px", width: 48, height: 48 }}
                    />
                    <>
                        {props.children}
                    </>
                </Box>
            </Box>
        </Container>
    );
};

export default LeftContainer;