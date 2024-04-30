"use client";

import Header from "@/components/Header/Header";
import {useEffect} from "react";
import {useAuthStore} from "@/store/store";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BootstrapInput from "@/components/ui/BootstrapInput/BootstrapInput";
import Button from "@mui/material/Button";
import TuneIcon from '@mui/icons-material/Tune';
import VacancyTrend from "@/components/VacancyTrend/VacancyTrend";
import Grid from '@mui/material/Unstable_Grid2';
import Footer from "@/components/Footer/Footer"; // Grid version 2

export default function Home() {
    const {checkAuth} = useAuthStore()

    useEffect(
        () => {
            checkAuth()
        },
        []
    )
    return (
        <main>
            <Box
                sx={{
                    display: "block",
                    backgroundImage: "url('static/header-bg.jpg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    paddingTop: "3em"
                }}
            >
                <Header isMain={true}/>
                <Container maxWidth="lg">
                    <Box sx={{marginLeft: "10em"}}>
                        <Typography variant="h3" sx={{color: "white", paddingTop: "105px", fontWeight: "800"}}>
                            Работа найдётся для каждого
                        </Typography>
                        <Box
                            sx={{
                                paddingTop: "1em",
                                justifyContent: "space-between",
                                alignItems: "center",
                                display: "flex",
                                maxWidth: "700px",
                        }}
                        >
                            <BootstrapInput fullWidth placeholder="Профессия, должность или компания"/>
                            <Box sx={{
                                justifyContent: "space-between",
                                alignItems: "center",
                                display: "flex",
                            }}>
                                <Button variant="contained" sx={{marginRight: "0.5em"}}>
                                    Найти
                                </Button>
                                <Button variant="contained">
                                    <TuneIcon/>
                                </Button>
                            </Box>
                        </Box>
                        <Box sx={{marginTop: "1em"}}>
                            <Button variant="text" sx={{color: "white", textTransform: "none"}}>
                                <Typography>Я ищу сотрудника</Typography>
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={{
                        color: "white",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "space-between",
                        maxWidth: "450px",
                        marginTop: "10em",
                        paddingBottom: "3em"
                    }}>
                        <Box>
                            <Typography variant="h5">68 746 292</Typography>
                            <Typography>резюме</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h5">1 476 974</Typography>
                            <Typography>вакансий</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h5">2 177 129</Typography>
                            <Typography>компаний</Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Container sx={{marginTop: "4em"}}>
                <Grid container spacing={2}>
                    {Array.from(Array(12)).map((_, index) => (
                        <Grid sm={4} md={3} key={index}>
                            <VacancyTrend/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Footer/>
        </main>
    );
}
