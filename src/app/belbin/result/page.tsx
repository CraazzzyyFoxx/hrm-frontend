"use client";

import React, {useEffect} from "react";

import {useBelbinStore} from "@/store/store";
import {roles} from "@/consts/roles";
import {useRouter} from "next/navigation";
import RoleBlock from "@/components/RoleBlock/RoleBlock";
import Typography from "@mui/material/Typography";
import BelbinService from "@/services/BelbinService";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Container from "@mui/material/Container";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

export default function ResultPage() {
    const { push } = useRouter();
    const { stages, current_stage} = useBelbinStore();
    const topRoles = BelbinService.calculateBelbin(stages);
    const {mainValue, supportedValue, smallest} = BelbinService.topRoles(topRoles);
    useEffect(() => {
        if (current_stage !== 6) {
            push("/belbin");
        }
        else {
            BelbinService.createBelbin(topRoles).then(r => {});
        }
    }
    )

    return (
        <>
            <Header isMain={false}/>
            <Container maxWidth="lg" sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Typography variant="h2" sx={{marginTop: "25px", marginBottom: "25px"}}>Результат теста</Typography>
                <TableContainer component={Paper} sx={{maxWidth: "1040px"}}>
                    <Table sx={{ minWidth: 350}} aria-label="caption table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Роль</TableCell>
                                <TableCell align="right">Проценты</TableCell>
                                <TableCell align="right">Баллы</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {topRoles.map((role) => (
                                <TableRow key={role.name}>
                                    <TableCell component="th" scope="row">
                                        <Typography variant={role.name === mainValue.category || role.name === supportedValue.category ? "body1" : "body2"}>
                                            {role.name}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography variant={role.name === mainValue.category || role.name === supportedValue.category ? "body1" : "body2"}>
                                            {role.percent}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography variant={role.name === mainValue.category || role.name === supportedValue.category ? "body1" : "body2"}>
                                            {role.points}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Typography variant="h3" style={{
                    marginTop: '80px'
                }}>
                    Ваши сильные роли
                </Typography>
                <div style={{
                    width: '90%',
                    maxWidth: '1800px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: window.innerWidth > 900 ? 'space-between' : 'center',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}>
                    <RoleBlock
                        src={roles[mainValue.name].image}
                        roleClass={'first'}
                        name={mainValue.name}
                        haracteristic={roles[mainValue.name].haracteristic}
                        weakness={roles[mainValue.name].weakness}
                        functionality={roles[mainValue.name].functionality}
                        description={roles[mainValue.name].description}
                    />
                    <RoleBlock
                        src={roles[supportedValue.name].image}
                        roleClass={'second'}
                        name={supportedValue.name}
                        haracteristic={roles[supportedValue.name].haracteristic}
                        weakness={roles[supportedValue.name].weakness}
                        functionality={roles[supportedValue.name].functionality}
                        description={roles[supportedValue.name].description}
                    />
                </div>
                <Typography variant="h3" style={{
                    marginTop: '80px'
                }}>
                    Ваша слабая роль
                </Typography>
                <div style={{
                    width: '90%',
                    maxWidth: '1800px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    flexDirection: 'row'
                }}>
                    <RoleBlock
                        src={roles[smallest.name].image}
                        roleClass={'third'}
                        name={smallest.name}
                        haracteristic={roles[smallest.name].haracteristic}
                        weakness={roles[smallest.name].weakness}
                        functionality={roles[smallest.name].functionality}
                        description={roles[smallest.name].description}
                    />
                </div>
            </Container>
            <Footer/>
        </>
    );
}
