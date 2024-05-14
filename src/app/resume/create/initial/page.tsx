"use client";

import React, {useEffect} from 'react';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {Divider, Container} from "@mui/material";
import {useCheckAuth} from "@/hooks/checkAuth";

import ChoseVacancyPage from "@/app/resume/create/pages/ChoseVacancyPage";
import {useCreateResumeStore} from "@/stores/resume";
import BasicInformationPage from "@/app/resume/create/pages/BasicInformationPage";
import LevelEducation from "@/app/resume/create/pages/LevelEducation";


const ResumeCreateInitial = () => {
    useCheckAuth()

    return (
        <>
            <Header isMain={false}/>
            <Container maxWidth={false} sx={{display: "flex", flexDirection: "row"}}>
                <ChoseVacancyPage/>
            </Container>
            <Divider/>
            <Footer/>
        </>
    );
};

export default ResumeCreateInitial;