"use client";

import * as React from 'react';
import {AppBar, Box, Toolbar, IconButton, Container, Avatar, Button} from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import HeaderPopover from "@/components/HeaderPopover/HeaderPopover";
import {useAuthStore} from "@/store/store";
import {useRouter} from "next/navigation";
import {FC} from "react";


interface AppBarProps {
    isMain: boolean
}

const ResponsiveAppBar: FC<AppBarProps> = (props) => {
    const {isAuth} = useAuthStore()
    const { push } = useRouter();


    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const isTransparent = props.isMain

    return (
        <AppBar position="static" color={isTransparent ? "transparent": "primary"} elevation={Number(!isTransparent)}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <a href="/">
                        <Avatar alt="SAVVA" src="/static/savva.jpg"  sx={{marginRight: "1em"}}/>
                    </a>
                    {
                        isAuth ?
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
                                <Button
                                    sx={{ my: 2, color: 'white', display: 'block'}}
                                    onClick={() => {push('/resume')}}
                                >
                                    Мои резюме
                                </Button>
                                <Button
                                    sx={{ my: 2, color: 'white', display: 'block'}}
                                    onClick={() => {push('/vacancy')}}
                                >
                                    Отклики
                                </Button>
                                <Button
                                    sx={{ my: 2, color: 'white', display: 'block'}}
                                    onClick={() => {push('/help')}}
                                >
                                    Помощь
                                </Button>
                            </Box>
                            :
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
                                <Button
                                    sx={{ my: 2, color: 'white', display: 'block'}}
                                    onClick={() => {push('/help')}}
                                >
                                    Помощь
                                </Button>
                            </Box>
                    }

                    <Box sx={{ flexGrow: 0, display: "block"}}>
                        <Button
                            variant="outlined"
                            sx={{marginRight: "1em", borderRadius: "20px", color: "#2e7d32", borderColor: "#2e7d32"}}
                        >
                            Создать резюме
                        </Button>
                        {
                            isAuth
                                ? <>
                                <IconButton>
                                    <FavoriteBorderIcon sx={{ color: 'white' }} fontSize="large"/>
                                </IconButton>
                                <IconButton>
                                    <NotificationsNoneOutlinedIcon sx={{ color: 'white' }} fontSize="large"/>
                                </IconButton>
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <AccountBoxIcon sx={{ color: 'white' }} fontSize="large"/>
                                </IconButton>

                                <HeaderPopover
                                    id="menu-appbar"
                                    open={Boolean(anchorElUser)}
                                    anchorEl={anchorElUser}
                                    handleClose={handleCloseUserMenu}
                                />
                                </>
                                :
                                <>
                                    <Button
                                        variant="outlined"
                                        sx={{borderRadius: "20px", color: "white", borderColor: "white"}}
                                        onClick={() => {push('/login')}}
                                    >
                                        Войти
                                    </Button>
                                </>

                        }
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;