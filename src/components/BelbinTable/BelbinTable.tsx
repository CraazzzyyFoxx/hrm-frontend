import React, {useEffect} from 'react';
import Header from "@/components/Header/Header";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import BelbinService from "@/services/BelbinService";
import {BelbinRole} from "@/models/BelbinRole";

const BelbinTable = () => {
    const [belbin_roles, setRoles] = React.useState<BelbinRole[]>([]);
    const {mainValue, supportedValue, smallest} = BelbinService.topRoles(belbin_roles);


    useEffect(() => {
       BelbinService.fetchBelbin().then(r => {
              setRoles(r.data);
         });
    },
        []
    )

    return (
            <Container maxWidth="lg" sx={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "1.5em"}}>
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
                            {belbin_roles.map((role) => (
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

            </Container>
    );
};

export default BelbinTable;