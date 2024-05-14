"use client";

import React, {useEffect} from 'react';
import {useCheckAuth} from "@/hooks/checkAuth";
import Header from "@/components/Header/Header";
import {Chip, Container, Divider} from "@mui/material";
import Footer from "@/components/Footer/Footer";
import {useGetResume} from "@/hooks/getResume";
import {useAuthStore} from "@/stores/auth";
import {useRouter} from "next/navigation";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import moment from "moment";
import 'moment/locale/ru';
import Link from "next/link";


export default function ResumePage({ params }: { params: { slug: number } }) {
    useCheckAuth()
    const {isAuth, user} = useAuthStore()
    const {data, isLoading, isSuccess} = useGetResume(params.slug)
    const { push } = useRouter();
    const name = user.middle_name ? `${user.last_name} ${user.first_name} ${user.middle_name}` : `${user.first_name} ${user.last_name}`
    let gender = ''
    if (isSuccess && data.data.basic_information.gender == "Мужской") {
        gender = "Мужчина"
    }
    else {
        gender = "Женщина"
    }

    useEffect(
        () => {
            if (isSuccess) {
                if (!data?.data.is_public) {
                    push("/resume")
                }
            }
        },
        [isLoading]
    )



    return (
        <div>
            <Header isMain={false}/>
            <Container maxWidth="lg" sx={{display: "flex", flexDirection: "column"}}>
                <Box sx={{paddingTop: "40px"}}>
                    <Link href={"/resume"}>
                        <Typography variant="body2" sx={{color: "#468ffd"}}>К списку резюме</Typography>
                    </Link>
                    <Box sx={{paddingTop: "20px"}}>
                        <Typography>Сейчас на сайте</Typography>
                        <Typography variant="h4" sx={{lineHeight: "1.12", fontWeight: "700"}}>{name}</Typography>
                        <Typography sx={{marginTop: "20px"}}>
                            {`${gender}, 20 лет, родился ${moment(data?.data.basic_information.birthday).locale("Russian").calendar().toLowerCase()}`}
                        </Typography>
                        <Link href={"/"}>
                            <Typography variant="body2" sx={{color: "#468ffd"}}>Редактировать</Typography>
                        </Link>
                    </Box>
                    <Box sx={{paddingTop: "10px", paddingBottom: "10px"}}>
                        <Chip label={user.search_status} color="success" />
                    </Box>
                    <Box>
                        <Typography variant="body2" sx={{color: "#768694"}}>Контакты</Typography>
                        <Typography>{data?.data.basic_information.phone}</Typography>
                        <Link href={"/"}>
                            <Typography variant="body2" sx={{color: "#468ffd"}}>Редактировать</Typography>
                        </Link>
                    </Box>
                    <Box sx={{paddingTop: "40px"}}>
                        <Typography>{`${data?.data.basic_information.city}, не готов к переезду, не готов к командировкам`}</Typography>
                        <Link href={"/"}>
                            <Typography variant="body2" sx={{color: "#468ffd"}}>Редактировать</Typography>
                        </Link>
                    </Box>
                </Box>
                <Divider sx={{marginTop: "20px", marginBottom: "20px"}}/>
                <Box>
                    <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: "8px"}}>
                        <Typography variant="h5" sx={{lineHeight: "1.12", fontWeight: "700"}}>
                            {data?.data.position}
                        </Typography>
                        <Link href={"/"}>
                            <Typography variant="body2" sx={{color: "#468ffd"}}>Редактировать</Typography>
                        </Link>
                    </Box>
                </Box>


            </Container>
            <Divider/>
            <Footer/>
        </div>
    );
}