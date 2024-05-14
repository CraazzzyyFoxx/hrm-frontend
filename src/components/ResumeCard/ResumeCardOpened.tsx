"use client";

import React from 'react';
import {Resume} from "@/models/Resume";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Card, Divider} from "@mui/material";
import Button from "@mui/material/Button";
import {useRouter} from "next/navigation";


export interface ResumeCardOpenedProps {
    resume: Resume
}


const ResumeCardOpened = ({resume}: ResumeCardOpenedProps) => {
    const {push} = useRouter()

    return (
        <Card variant="outlined" sx={{padding: "15px", minWidth: "650px"}}>
            <Typography variant="h6" sx={{color: "#468ffd"}}>
                {resume.position}
            </Typography>
            <Typography variant="body2">
                Поднять вручную можно сегодня в 23:20
            </Typography>
            <Typography sx={{fontWeight: "600", marginTop: "1em"}}>
                Статистика за неделю
            </Typography>
            <Box sx={{display: "flex", alignItems: "center"}}>
                <Box sx={{display: "flex", alignItems: "center"}}>
                    <Typography variant="h6">
                        0
                    </Typography>
                    <Typography sx={{marginLeft: "0.25em"}}>
                        показов
                    </Typography>
                </Box>
                <Divider orientation="vertical" flexItem sx={{margin: "1em"}} />
                <Box sx={{display: "flex", alignItems: "center"}}>
                    <Typography variant="h6">
                        0
                    </Typography>
                    <Typography sx={{marginLeft: "0.25em"}}>
                        просмотир
                    </Typography>
                </Box>
                <Divider orientation="vertical" flexItem sx={{margin: "1em"}} />
                <Box sx={{display: "flex", alignItems: "center"}}>
                    <Typography variant="h6">
                        0
                    </Typography>
                    <Typography sx={{marginLeft: "0.25em"}}>
                        приглашений
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                maxWidth: "600px",
                marginTop: "1em"
            }}>
                <Button variant="contained">
                    Поднимать автоматически
                </Button>
                <Button variant="outlined">
                    590 вакансий
                </Button>
                <Button variant="outlined">
                    Рекомендации по резюме 799 ₽
                </Button>
            </Box>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                maxWidth: "600px",
                marginTop: "0.5em"
            }}>
                <Button variant="text">
                    Поднять
                </Button>
                <Button variant="text">
                    Изменить видимость
                </Button>
                <Button variant="text" onClick={() => push(`/show/resume/${resume.id}`)}>
                    Редактировать
                </Button>
                <Button variant="text">
                    Дублировать
                </Button>
            </Box>
        </Card>
    );
};

export default ResumeCardOpened;