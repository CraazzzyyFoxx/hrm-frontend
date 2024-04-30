"use client";

import React, {useEffect} from 'react';
import {Box, } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import AccountMainEntity from "@/components/AccountMain/AccountMainEntity";
import {useAuthStore} from "@/store/store";
import {Modal} from "@mui/material";
import Button from "@mui/material/Button";
import BootstrapInput from "@/components/ui/BootstrapInput/BootstrapInput";
import Typography from "@mui/material/Typography";
import {useRouter} from "next/navigation";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const AccountMain = () => {
    const {user, updateUser, checkAuth, isAuth} = useAuthStore()
    const { push } = useRouter();
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState(user.first_name);
    const [lastName, setLastName] = React.useState(user.last_name);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        user.first_name = name;
        user.last_name = lastName;
        setOpen(false);
        updateUser(user);
    }

    useEffect(
        () => {
            checkAuth()
            if (!isAuth) {
                push("/login")
            }
        },
        []
    )

    useEffect(
        () => {
            setName(user.first_name)
            setLastName(user.last_name)
        },
        [user.first_name, user.last_name]
    )

    const onChangeName = (e: any) => {
        setName(e.target.value)
    }

    const onChangeLastName = (e: any) => {
        setLastName(e.target.value)
    }

    return (
        <div>
            <Box sx={{marginTop: "1.5em"}}>
                <Grid container>
                    <AccountMainEntity name="Имя" value={`${user.first_name} ${user.last_name}`} onClick={handleOpen}/>
                    <AccountMainEntity name="Пароль" value="Обновлен 2 года назад" onClick={() => {console.log("Xui")}}/>
                    <AccountMainEntity name="Почта" value={user.email} onClick={() => {console.log("Xui")}}/>
                    <AccountMainEntity name="Мобильный телефон" value={user.phone_number} onClick={() => {console.log("Xui")}}/>
                    <AccountMainEntity name="Район поиска работы" value="Москва" onClick={() => {console.log("Xui")}}/>
                </Grid>
            </Box>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute' as 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '1px solid #000',
                    borderRadius: "10px",
                    boxShadow: 24,
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                    <Typography variant="h5">Изменить имя</Typography>
                    <BootstrapInput type="text" placeholder="Имя" sx={{paddingTop: "1em"}} value={name} onChange={onChangeName}/>
                    <BootstrapInput type="text" placeholder="Фамилия" sx={{padding: "1em"}} value={lastName} onChange={onChangeLastName}/>
                    <Button variant="outlined" onClick={handleClose}>Сохранить</Button>
                </Box>
            </Modal>
            <Button variant="text" sx={{marginTop: "1em", "color": "#0358d8"}}>Удаление аккаунта</Button>
        </div>
    );
};

export default AccountMain;