"use client";

import React, {useEffect} from 'react';
import {useCheckAuth} from "@/hooks/checkAuth";
import Header from "@/components/Header/Header";
import {Container, Divider} from "@mui/material";
import Footer from "@/components/Footer/Footer";
import ChoseVacancyPage from "@/app/resume/create/pages/ChoseVacancyPage";
import BasicInformationPage from "@/app/resume/create/pages/BasicInformationPage";
import LevelEducation from "@/app/resume/create/pages/LevelEducation";
import {useGetResume} from "@/hooks/getResume";
import {useCreateResumeStore} from "@/stores/resume";
import {useAuthStore} from "@/stores/auth";
import WorkExperience from "@/app/resume/create/pages/WorkExperience";
import {useRouter} from "next/navigation";


const renderSwitch = (param: number) => {
    switch(param) {
        case 0:
            return <ChoseVacancyPage/>;
        case 1:
            return <BasicInformationPage/>;
        case 2:
            return <LevelEducation/>
        case 3:
            return <WorkExperience/>
    }
}


export default function ResumeCreatePage({ params }: { params: { slug: number } }) {
    useCheckAuth()
    const {isAuth, user} = useAuthStore()
    const {data, isLoading, isSuccess} = useGetResume(params.slug)
    const {stage, setFromResume, applyUserData} = useCreateResumeStore()
    const { push } = useRouter();
    useEffect(
        () => {
            if (isSuccess) {
                if (data?.data.is_public) {
                    push("/resume")
                }
                else {
                    setFromResume(data.data)
                }
            }
        },
        [isLoading]
    )

    useEffect(
        () => {
            if (isAuth) {
                applyUserData(user)
            }
        },
        [isAuth]
    )


    return (
        <div>
            <Header isMain={false}/>
            <Container maxWidth={false} sx={{display: "flex", flexDirection: "row"}}>
                {renderSwitch(stage)}
            </Container>
            <Divider/>
            <Footer/>
        </div>
    );
}