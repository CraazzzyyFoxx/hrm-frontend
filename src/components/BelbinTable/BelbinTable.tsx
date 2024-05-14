"use client";

import React, {FC} from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {BelbinRole, BelbinRoleEntity} from "@/models/BelbinRole";
import Button from "@mui/material/Button";
import {useRouter} from "next/navigation";
import Box from "@mui/material/Box";


interface BelbinTableProps {
    role: BelbinRole
}


const BelbinTable: FC<BelbinTableProps> = (props) => {
    const { push } = useRouter();


    return (
            <Container maxWidth="lg" sx={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "1.5em"}}>
                {
                    props.role === undefined || props.role.roles.length === 0
                        ?
                        <Box sx={{display: "flex", justifyContent: "left"}}>
                            <Button variant="contained" onClick={() => {push("/belbin")}}>Пройти тест</Button>
                        </Box>
                        :
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
                                    {props.role.roles.map((role) => (
                                        <TableRow key={role.name}>
                                            <TableCell component="th" scope="row">
                                                <Typography variant={role.name === props.role.roles[0].name || role.name === props.role.roles[1].name ? "body1" : "body2"}>
                                                    {role.name}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align="right">
                                                <Typography variant={role.name === props.role.roles[0].name || role.name === props.role.roles[1].name ? "body1" : "body2"}>
                                                    {role.percent}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align="right">
                                                <Typography variant={role.name === props.role.roles[0].name || role.name === props.role.roles[1].name ? "body1" : "body2"}>
                                                    {role.points}
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                }
            </Container>
    );
};

export default BelbinTable;