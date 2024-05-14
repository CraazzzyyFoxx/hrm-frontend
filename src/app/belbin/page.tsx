"use client";

import React, {useEffect} from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Container from "@mui/material/Container";
import {useBelbinStore} from "@/stores/belbin";
import {useRouter} from "next/navigation";
import {Avatar, Divider} from "@mui/material";
import Message from "@/components/ui/Message/Message";
import {questions} from "@/consts/belbin";
import Slider from "@/components/ui/Slider/Slider";
import Button from "@mui/material/Button";
import ColorLinearProgress from "@/components/ui/ColorLinearProgress/ColorLinearProgress";
import BelbinService from "@/services/BelbinService";



const BelbinPage = () => {
    const { push } = useRouter();
    const { stages, current_stage, inc_stage, set , create} = useBelbinStore();

    useEffect(
        () => {
            if (current_stage === 6) {
                const topRoles = BelbinService.calculateBelbin(stages);
                create(topRoles);
                push("/belbin/result")
            }
        },
        [current_stage]
    )


    const sumValueQuestions = stages[current_stage].reduce((acc: any, val: any) => acc + val, 0);
    const possibleMaximumValueQuestion = 10 - sumValueQuestions;
    const currentQuestions = questions[current_stage].questions

    const get = (stage: number, row: number) => {
        return stages[stage][row]
    }

    return (
        <div>
            <Header isMain={false}/>
            <Container maxWidth={false} sx={{display: "flex", flexDirection: "row"}}>
                <Container
                    maxWidth={false}
                    sx={{
                        width: "35%",
                        marginTop: "2em",
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                        alignItems: "flex-end",
                }}
                >
                    <Box
                        sx={{
                            padding: "0 48px",
                            width: "480px",
                    }}
                    >
                        <Box sx={{padding: "204px 0 48px",}}>
                            <Avatar
                                alt="SAVVA"
                                src="/static/savva.jpg"
                                sx={{marginRight: "1em", marginBottom: "32px", width: 48, height: 48 }}
                            />
                            <Message>
                                <Typography variant="h6">
                                    В каждой из семи частей данного теста распределите 10 баллов между 8 утверждениями.
                                    Если вы согласны с каким-либо утверждением на все 100%, вы можете отдать ему все 10 баллов.
                                </Typography>
                            </Message>
                            <Message>
                                <Typography variant="h6">
                                    Рекомендую распределять баллы 5/3/2 для достоверности результата.
                                </Typography>
                            </Message>
                            <Message>
                                <Typography variant="h6">
                                    По результатам прохождения теста будет определена ваша роль в команде.
                                </Typography>
                            </Message>
                        </Box>
                    </Box>
                </Container>
                <Container
                    maxWidth={false}
                    sx={{
                        alignItems: "left",
                        width: "65%",
                        boxShadow: "-16px 0px 16px -10px #2a313752",
                    }}
                >
                    <Box
                        sx={{
                            width: "50%"
                        }}
                    >
                        <ColorLinearProgress value={100 / 7 * (current_stage + 1)}/>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "2em",
                        }}>
                            <Typography variant="h5" sx={{marginBottom: "25px"}}>
                                {questions[current_stage].title}
                            </Typography>
                        </Box>
                        {
                            currentQuestions.map((question, index) => (
                                <Box key={index} sx={{marginLeft: "10px"}}>
                                    <Typography>{index + 1}. {question}</Typography>
                                    <Slider
                                        value={get(current_stage, index)}
                                        defaultValue={0}
                                        aria-labelledby="continuous-slider"
                                        step={1}
                                        min={0}
                                        max={
                                            get(current_stage, index) + possibleMaximumValueQuestion === 0
                                                ? 1
                                                : get(current_stage, index) + possibleMaximumValueQuestion
                                        }
                                        valueLabelDisplay="auto"
                                        marks={marks}
                                        disabled={get(current_stage, index) + possibleMaximumValueQuestion === 0}
                                        onChange={(e, value) => { // @ts-ignore
                                            set(current_stage, index, value)}}
                                    />
                                </Box>
                            ))
                        }
                        <Box>
                            <Divider sx={{marginTop: "2em", marginLeft: "-24px"}}/>
                            <Box sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginTop: "24px",
                                marginBottom: "24px",
                                flexDirection: "row"
                            }}
                            >
                                <Box>
                                    <Typography variant="h6">Всего баллов: {sumValueQuestions}</Typography>
                                </Box>
                                {
                                    possibleMaximumValueQuestion === 0
                                        ? <Box>
                                            <Button
                                                variant="contained"
                                                onClick={() => inc_stage()}
                                            >
                                                Далее
                                            </Button>
                                        </Box>
                                        : null
                                }
                                <Box>
                                    <Typography variant="h6">Осталось баллов: {possibleMaximumValueQuestion}</Typography>
                                </Box>
                            </Box>

                        </Box>
                    </Box>
                </Container>
            </Container>
            <Divider/>
            <Footer/>
        </div>
    );
};

export default BelbinPage;


const marks = [
    { value: 0, label: "0" },
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 9, label: "9" },
    { value: 10, label: "10" },
];