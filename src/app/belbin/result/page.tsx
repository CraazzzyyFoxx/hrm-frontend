"use client";

import React, {useEffect} from "react";

import {useBelbinStore} from "@/stores/belbin";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Container from "@mui/material/Container";
import PageContent from "@/app/belbin/result/pageContent";

export default function ResultPage() {
    const { role, get} = useBelbinStore();
    useEffect(() => {
        get()
    },
        []
    )

    return (
        <>
            <Header isMain={false}/>
            <Container maxWidth="lg" sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                {
                    !role ? <></>: <PageContent role={role}/>

                }
            </Container>
            <Footer/>
        </>
    );
}
