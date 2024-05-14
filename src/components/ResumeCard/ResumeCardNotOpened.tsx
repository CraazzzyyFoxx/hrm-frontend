import React from 'react';
import {Resume} from "@/models/Resume";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Card} from "@mui/material";
import Button from "@mui/material/Button";
import {useQueryClient} from "react-query";
import ResumeService from "@/services/ResumeService";
import {useRouter} from "next/navigation";
import {useCheckAuth} from "@/hooks/checkAuth";

export interface ResumeCardNotOpenedProps {
    resume: Resume
}

const ResumeCardNotOpened = ({resume}: ResumeCardNotOpenedProps) => {
    useCheckAuth()
    const queryClient = useQueryClient();
    const {push} = useRouter()

    return (
        <Card variant="outlined" sx={{padding: "15px", minWidth: "650px"}}>
            <Typography variant="h6" sx={{color: "#468ffd"}}>
                {resume.position}
            </Typography>
            <Typography sx={{fontWeight: "600", marginTop: "4px"}}>
                Резюме не опубликовано
            </Typography>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
                maxWidth: "600px",
                marginTop: "20px",
                gap: "10px"
            }}>
                <Button variant="contained" onClick={() => push(`/resume/create/${resume.id}`)}>
                    Дополнить резюме
                </Button>
                <Button variant="outlined">
                    590 вакансий
                </Button>
            </Box>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
                maxWidth: "600px",
                marginTop: "10px",
                gap: "10px"
            }}>
                <Button variant="text">
                    Дублировать
                </Button>
                <Button
                    variant="text"
                    onClick={() => {
                        ResumeService.delete(resume.id).then(
                            r => {
                                queryClient.invalidateQueries("resumes")
                            }
                        )
                    }}
                >
                    Удалить
                </Button>
            </Box>
        </Card>
    );
};

export default ResumeCardNotOpened;