import React, {FC} from 'react';
import Link from "next/link";
import {Divider, List, ListSubheader, Popover, ListItemButton} from "@mui/material";
import {useAuthStore} from "@/store/store";


interface HeaderPopoverProps {
    id?: string
    open: boolean
    anchorEl: null | HTMLElement
    handleClose: () => void
}


const HeaderPopover: FC<HeaderPopoverProps> = (props) => {
    const {user} = useAuthStore()

    return (
        <Popover
            id={props.id}
            open={props.open}
            anchorEl={props.anchorEl}
            onClose={props.handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRadius: 10}}
                subheader={<ListSubheader>{user.first_name} {user.last_name}</ListSubheader>}
            >
                <Divider/>
                <Link href="/account" passHref>
                    <ListItemButton>
                        Настройки
                    </ListItemButton>
                </Link>
                <ListItemButton>
                    Скрытые мной вакансии и компании
                </ListItemButton>
                <ListItemButton>
                    <div style={{color: "red"}}>Выйти</div>
                </ListItemButton>
            </List>
        </Popover>
    );
};

export default HeaderPopover;