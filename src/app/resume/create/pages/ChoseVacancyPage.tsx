"use client";

import React from 'react';
import LeftContainer from "@/app/resume/create/ui/LeftContainer";
import Message from "@/components/ui/Message/Message";
import RightContainer from "@/app/resume/create/ui/RightContainer";
import {vacancyList} from "@/consts/vacancy";
import VacancyButton from "@/app/resume/create/ui/VacancyButton";
import ChoseButton from "@/app/resume/create/ui/ChoseButton";
import {Box, Typography, TextField} from "@mui/material";
import {useCreateResumeStore} from "@/stores/resume";
import {useFormik} from "formik";
import {object, string} from "yup";
import ResumeService from "@/services/ResumeService";
import {useRouter} from "next/navigation";


const validationSchema = object({
    vacancyName: string().required('Професия обязательна'),
});

const ChoseVacancyPage = () => {
    const { push } = useRouter();

    const {
        resume_id,
        name,
        resume,
        setFromResume,
    } = useCreateResumeStore()
    const formik = useFormik({
        initialValues: {
            vacancyName: name,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            if (resume_id) {
                ResumeService.update(
                    resume_id,
                    {
                        ...resume,
                        position: values.vacancyName,
                        basic_information: null
                    }
                ).then(
                    (response) => {setFromResume(response.data)}
                )
            }
            else {
                ResumeService.create(values.vacancyName).then(
                    (response) => {
                        setFromResume(response.data)
                        push(`/resume/create/${response.data.id}`)
                    }
                )
            }
        },
    });

    return (
        <>
            <LeftContainer>
                <Message>
                    <Typography variant="h6">Кем вы хотите работать?</Typography>
                </Message>
            </LeftContainer>
            <RightContainer onSubmit={formik.handleSubmit}>
                <Box
                    sx={{
                        width: "100%",
                        marginTop: "6em",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "left",
                        paddingLeft: "96px",
                    }}>
                    <Typography variant="h6" sx={{marginBottom: "8px"}}>Профессия</Typography>
                    <TextField
                        required
                        size="small"
                        name="vacancyName"
                        sx={{maxWidth: "500px"}}
                        value={formik.values.vacancyName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.vacancyName && Boolean(formik.errors.vacancyName)}
                        helperText={formik.touched.vacancyName && formik.errors.vacancyName}
                    />
                    <Box sx={{marginTop: "10px"}}>
                        {
                            vacancyList.map((vacancy) => (
                                <VacancyButton key={vacancy} onClick={() => formik.setValues({vacancyName: vacancy})}>
                                    {vacancy}
                                </VacancyButton>
                            ))
                        }
                    </Box>
                    <Box sx={{marginTop: "25px", marginBottom: "50px"}}>
                        <ChoseButton onClick={() => formik.setValues({vacancyName: "Начинающий специалист"})}>
                            Не знаю, кем хочу работать
                        </ChoseButton>
                        <ChoseButton onClick={() => formik.setValues({vacancyName: "Начинающий специалист"})}>
                            Ищу любую работу
                        </ChoseButton>
                    </Box>
                </Box>
            </RightContainer>
        </>
    );
};

export default ChoseVacancyPage;