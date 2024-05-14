import React, {useState} from 'react';
import Typography from "@mui/material/Typography";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import RoleBlock from "@/components/RoleBlock/RoleBlock";
import {roles} from "@/consts/roles";
import {BelbinRole} from "@/models/BelbinRole";
import BelbinService from "@/services/BelbinService";


interface PageContentProps {
    role: BelbinRole
}


const PageContent = ({role}: PageContentProps) => {
    const [{mainValue, supportedValue, smallest}] = useState(BelbinService.topRoles(role.roles));
    return (
        <>
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
                        {role.roles.map((entity) => (
                            <TableRow key={entity.name}>
                                <TableCell component="th" scope="row">
                                    <Typography variant={entity.name === role.roles[0].name || entity.name === role.roles[1].name ? "body1" : "body2"}>
                                        {entity.name}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant={entity.name === role.roles[0].name || entity.name === role.roles[1].name ? "body1" : "body2"}>
                                        {entity.percent}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant={entity.name === role.roles[0].name || entity.name === role.roles[1].name ? "body1" : "body2"}>
                                        {entity.points}
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
        </>
    );
};

export default PageContent;