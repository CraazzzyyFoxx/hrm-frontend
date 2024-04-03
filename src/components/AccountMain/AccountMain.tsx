import React from 'react';
import Typography from "@mui/material/Typography";
import {Box, Paper,} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {styled} from "@mui/system";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AccountMainEntity from "@/components/AccountMain/AccountMainEntity";
import {useAuthStore} from "@/store/store";


const AccountMain = () => {
    const {user} = useAuthStore()

    return (
        <Box sx={{marginTop: "1.5em"}}>
            <Grid container>
                <AccountMainEntity name="Имя" value={`${user.first_name} ${user.last_name}`} onClick={() => {console.log("Xui")}}/>
                <AccountMainEntity name="Пароль" value="Обновлен 2 года назад" onClick={() => {console.log("Xui")}}/>
                <AccountMainEntity name="Почта" value={user.email} onClick={() => {console.log("Xui")}}/>
                <AccountMainEntity name="Мобильный телефон" value={`${user.first_name} ${user.last_name}`} onClick={() => {console.log("Xui")}}/>
                <AccountMainEntity name="Район поиска работы" value={`${user.first_name} ${user.last_name}`} onClick={() => {console.log("Xui")}}/>
            </Grid>
        </Box>
    );
};

export default AccountMain;