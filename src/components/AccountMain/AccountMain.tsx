"use client";

import React from 'react';
import {Box, Dialog, DialogActions, DialogContent, DialogTitle,} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import AccountMainEntity from "@/components/AccountMain/AccountMainEntity";
import {useAuthStore} from "@/stores/auth";
import Button from "@mui/material/Button";
import moment from "moment";
import 'moment/locale/ru';
import TextField from "@mui/material/TextField";
import {useCheckAuth} from "@/hooks/checkAuth";


const AccountMain = () => {
    useCheckAuth()
    const {user, updateUser, updatePassword} = useAuthStore()
    const [openName, setOpenName] = React.useState(false);
    const [openPassword, setOpenPassword] = React.useState(false);
    const name = user.middle_name ? `${user.last_name} ${user.first_name} ${user.middle_name}` : `${user.first_name} ${user.last_name}`

    return (
        <div>
            <Box sx={{marginTop: "1.5em"}}>
                <Grid container>
                    <AccountMainEntity
                        name="Имя"
                        value={name}
                        onClick={() => setOpenName(true)}
                    />
                    <AccountMainEntity
                        name="Пароль"
                        value={`Пароль обновлен ${moment(user.password_changed_at).locale("Russian").calendar().toLowerCase()}`}
                        onClick={() => {setOpenPassword(true)}}
                    />
                    <AccountMainEntity
                        name="Почта"
                        value={user.email} onClick={() => {console.log("Xui")}}
                    />
                    <AccountMainEntity
                        name="Мобильный телефон" value={user.phone_number}
                        onClick={() => {console.log("Xui")}}
                    />
                    <AccountMainEntity
                        name="Район поиска работы" value={user.search_region ? user.search_region : "Не указан"}
                        onClick={() => {console.log("Xui")}}
                    />
                </Grid>
            </Box>
            <Dialog
                open={openName}
                onClose={() => setOpenName(false)}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries((formData as any).entries());
                        const name = formJson.name
                        const lastName = formJson.lastName
                        const middleName = formJson.middleName
                        user.first_name = name
                        user.last_name = lastName
                        user.middle_name = middleName
                        updateUser(user)
                        setOpenName(false)
                    },
                }}
            >
                <DialogContent>
                    <DialogTitle id="modal-modal-title">Изменить имя</DialogTitle>
                    <DialogActions sx={{display: "flex", flexDirection: "column", gap: "1em"}}>
                        <TextField autoFocus required size="small" name="name" placeholder="Имя" defaultValue={user.first_name} sx={{marginLeft: "8px"}}/>
                        <TextField autoFocus required size="small" name="lastName" placeholder="Фамилия" defaultValue={user.last_name}/>
                        <TextField autoFocus size="small" type="text" name="middleName" placeholder="Отчество" defaultValue={user.middle_name}/>
                        <Button variant="outlined" type="submit">Сохранить</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
            <Dialog
                open={openPassword}
                onClose={() => setOpenPassword(false)}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries((formData as any).entries());
                        updatePassword(formJson.password)
                        setOpenPassword(false)
                    },
                }}
            >
                <DialogContent>
                    <DialogTitle id="modal-modal-title">Изменить пароль</DialogTitle>
                    <DialogActions sx={{display: "flex", flexDirection: "column", gap: "1em"}}>
                        <TextField autoFocus required size="small" name="password" type="password" placeholder="Пароль"/>
                        <Button variant="outlined" type="submit">Сохранить</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
            <Button variant="text" sx={{marginTop: "1em", "color": "#0358d8"}}>Удаление аккаунта</Button>
        </div>
    );
};

export default AccountMain;