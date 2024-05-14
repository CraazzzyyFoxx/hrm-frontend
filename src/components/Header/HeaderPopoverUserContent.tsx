import React from 'react';
import {Divider, List, ListItemButton, ListSubheader} from "@mui/material";
import {useAuthStore} from "@/stores/auth";
import {useRouter} from "next/navigation";

const HeaderPopoverUserContent = () => {
    const {user, logout} = useAuthStore()
    const { push } = useRouter();

    return (
        <>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRadius: 10}}
                subheader={
                    <ListSubheader sx={{fontWeight: "800"}}>
                        {user.first_name} {user.last_name}
                    </ListSubheader>
                }
            >
                <Divider/>
                <ListItemButton onClick={() => {push("/account")}}>
                    Настройки
                </ListItemButton>
                <ListItemButton>
                    Рассылки
                </ListItemButton>
                <ListItemButton>
                    Скрытые мной вакансии и компании
                </ListItemButton>
                <ListItemButton>
                    Изображения
                </ListItemButton>
                <ListItemButton>
                    Подключенные услуги
                </ListItemButton>
                <Divider/>
                <ListItemButton onClick={() => {logout()}}>
                    <div style={{color: "red"}}>Выйти</div>
                </ListItemButton>
            </List>
        </>
    );
};

export default HeaderPopoverUserContent;