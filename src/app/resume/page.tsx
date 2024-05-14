"use client";

import React from 'react';
import Header from "@/components/Header/Header";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {Chip, Divider, FormControl, FormControlLabel, Menu, Radio, RadioGroup} from "@mui/material";
import Button from "@mui/material/Button";
import {useAuthStore} from "@/stores/auth";
import ResumeCardList from "@/components/ResumeCardList/ResumeCardList";
import {useRouter} from "next/navigation";
import Footer from "@/components/Footer/Footer";

const ResumePage = () => {
    const {user, updateUser} = useAuthStore()
    const { push } = useRouter();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        user.search_status = event.target.value;
        updateUser(user);
        handleClose()
    };

    return (
        <>
            <Header isMain={false}/>
            <Container maxWidth="lg">
                <Box maxWidth="md" sx={{marginTop: "3em"}}>
                    <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between",}}>
                        <Typography variant="h4" sx={{fontWeight: 600}}>
                            Мои резюме
                        </Typography>
                        <Box sx={{display: "flex", alignItems: "center", gap: "10px"}}>
                            <Button variant="outlined">
                                Заказать резюме
                            </Button>
                            <Button variant="outlined" onClick={() => push('/resume/create/initial')}>
                                Создать резюме
                            </Button>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            background: "#f4f6fb",
                            alignItems: "center",
                            display: "flex",
                            padding: "0.5em",
                            marginTop: "2em",
                        }}
                    >
                        <Chip
                            color="success"
                            sx={{
                                minWidth: "8px",
                                width: "8px",
                                height: "8px",
                                borderRadius: "2px",
                                backgroundColor: "#0DC267",
                                marginRight: "1em",
                                marginLeft: "1em"
                            }}
                        />
                        <Typography variant="body1" sx={{marginRight: "3em"}}>
                            {user.search_status}
                        </Typography>
                        <Button
                            id="resume-status-button"
                            aria-controls={open ? 'resume-status-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            sx={{textTransform: "none"}}
                            size="small"
                        >
                            <Typography variant="body1">Изменить</Typography>
                        </Button>
                        <Menu
                            id="resume-status-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <Box>
                                <FormControl sx={{padding: "1em"}}>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue={user.search_status}
                                        name="radio-buttons-group"
                                        onChange={handleRadioChange}
                                    >
                                        <FormControlLabel value="Активно ищу работу" control={<Radio />} label="Активно ищу работу" />
                                        <FormControlLabel value="Рассматриваю предложения" control={<Radio />} label="Рассматриваю предложения" />
                                        <FormControlLabel value="Предложили работу, пока думаю" control={<Radio />} label="Предложили работу, пока думаю" />
                                        <FormControlLabel value="Уже выхожу на новое место" control={<Radio />} label="Уже выхожу на новое место" />
                                        <FormControlLabel value="Не ищу работу" control={<Radio />} label="Не ищу работу" />
                                    </RadioGroup>
                                </FormControl>

                            </Box>
                        </Menu>
                    </Box>
                    <ResumeCardList/>
                </Box>
            </Container>
            <Container maxWidth="lg" sx={{marginTop: "4em"}}>
                <Divider/>
            </Container>
            <Footer/>
        </>
    );
};

export default ResumePage;