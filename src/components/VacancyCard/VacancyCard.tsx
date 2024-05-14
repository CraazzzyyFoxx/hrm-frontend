import React from 'react';
import {Card, Chip} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

const ResumeCard = () => {
    return (
        <Card variant="outlined" sx={{padding: "15px", minWidth: "800px"}}>
            <Typography variant="h6" sx={{color: "#468ffd"}}>
                Программист Python
            </Typography>
            <Typography variant="h6" sx={{lineHeight: "1.5"}}>
                150 000 - 250 000 ₽
            </Typography>
            <Typography sx={{marginTop: "1em"}}>
                NOVA LABS
            </Typography>
            <Typography>
                Москва
            </Typography>
            <Box sx={{display: "flex", marginTop: "10px", marginBottom: "10px"}}>
                <WorkOutlineIcon sx={{marginRight: "8px", fontSize: "1.25rem"}}/>
                <Typography variant="body1">Опыт работы от 3 до 6 лет</Typography>
            </Box>
            <Box>
                <Chip label="Можно из дома" size="small"/>
            </Box>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                maxWidth: "600px",
                marginTop: "1em"
            }}>
                <Button variant="contained">
                    Откликнуться
                </Button>

            </Box>
        </Card>
    );
};

export default ResumeCard;