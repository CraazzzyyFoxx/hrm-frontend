import React from 'react';
import {Card, Chip} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const VacancyTrend = () => {
    return (
        <Card variant="outlined" sx={{maxWidth: "250px", maxHeight: "100px"}}>
            <Box sx={{display: "flex", alignItems: "center", flexGrow: 1}}>
                <Chip sx={{
                    backgroundColor: "#ff8a77",
                    width: "10px",
                    opacity: "0.4",
                    borderRadius: "4px 0 0 4px",
                    height: "100px"
                }}/>
                <Box sx={{marginLeft: "0.5em"}}>
                    <Typography>Вакансии дня</Typography>
                    <Typography>45 000 - 95 000 ₽</Typography>
                    <Typography>14 вакансий</Typography>
                </Box>
            </Box>
        </Card>
    );
};

export default VacancyTrend;