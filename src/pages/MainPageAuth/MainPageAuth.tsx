import React from 'react';

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {Container, Box, Typography, Divider, TextField, Button, Card, Avatar} from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VacancyCardList from "@/components/VacancyCardList/VacancyCardList";
import StatEvents from "@/components/ui/StatEvents/StatEvents";

const MainPageAuth = () => {
    return (
        <>
            <Header isMain={false}/>
            <Container maxWidth={false} sx={{backgroundColor: "rgb(244, 246, 251)"}}>
                <Container maxWidth="lg" sx={{paddingTop: "10px", paddingBottom: "10px"}}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "left",
                            minWidth: "700px",
                            paddingTop: "10px",
                            paddingBottom: "10px"
                        }}
                    >
                        <TextField
                            fullWidth={true}
                            size="small"
                            placeholder="Профессия, должность или компания"
                            sx={{maxWidth: "500px", marginRight: "10px", backgroundColor: "white"}}
                        />
                        <Button variant="contained" sx={{marginRight: "20px"}}>
                            Найти
                        </Button>
                        <Button variant="contained">
                            <TuneIcon/>
                        </Button>
                    </Box>
                </Container>
            </Container>
            <Container maxWidth="lg" sx={{display: "flex", flexDirection: "row"}}>
                <Box
                    sx={{
                        width: "27.5%",
                        marginTop: "2em",
                        marginRight: "2.5%"
                    }}
                >
                    <Box>
                        <Typography variant="h5">Мои события</Typography>
                        <Box sx={{marginTop: "20px", display: "flex", flexDirection: "column", "gap": "10px"}}>
                            <StatEvents name={"Отклики и приглашения"} count={0} icon={PeopleOutlineIcon}/>
                            <StatEvents name={"Просмотры резюме"} count={0} icon={VisibilityIcon}/>
                            <StatEvents name={"Избранные вакансии"} count={0} icon={FavoriteBorderIcon}/>
                        </Box>
                    </Box>
                    <Divider  sx={{marginBottom: "30px", marginTop: "30px"}}/>
                    <Box>
                        <Typography variant="h5">Советы по поиску</Typography>
                        <Box sx={{marginTop: "20px", display: "flex", flexDirection: "column", "gap": "10px"}}>
                            <Card>
                                <Box sx={{padding: "20px"}}>
                                    <Box sx={{display: "flex", flexDirection: "row", "gap": "10px"}}>
                                        <Box sx={{display: "flex", flexDirection: "column"}}>
                                            <Typography variant="body2" sx={{lineHeight: "1.43", fontWeight: "700"}}>Вы подняли</Typography>
                                            <Typography variant="body2" sx={{lineHeight: "1.43", fontWeight: "700"}}>резюме</Typography>
                                            <Typography variant="body2" sx={{marginTop: "10px"}}>В следуйщий раз можно будет через 4 часа.</Typography>
                                        </Box>
                                        <Avatar src="static/resume_up.svg" sx={{ width: 50, height: 50 }}/>
                                    </Box>
                                    <Box sx={{paddingTop: "10px"}}>
                                        <Button size="small" sx={{padding: "0px 0px"}}>Поднимать автоматически</Button>
                                    </Box>
                                </Box>
                            </Card>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{alignItems: "left", width: "70%", marginTop: "2em", marginLeft: "5%"}}>
                    <Typography variant="h5">Вакансии для вас</Typography>
                    <Typography variant="body1">Подобрали для резюме «Программист Python»</Typography>
                    <VacancyCardList/>
                </Box>
            </Container>
            <Container maxWidth="lg" sx={{marginTop: "4em"}}>
                <Divider/>
            </Container>
            <Footer/>
        </>
    );
};

export default MainPageAuth;
