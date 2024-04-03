"use client";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import HeaderPopover from "@/components/HeaderPopover/HeaderPopover";
import {useAuthStore} from "@/store/store";
import {useRouter} from "next/navigation";

const pages = ['Мои резюме', 'Отклики', 'Помощь'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const {isAuth} = useAuthStore()
    const { push } = useRouter();


    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    // @ts-ignore
    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Avatar alt="Remy Sharp" src="/static/savva.jpg" sx={{marginRight: "1em"}}/>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
                        {pages.map((page) => (
                            <Button
                                key={page}

                                sx={{ my: 2, color: 'white', display: 'block', textTransform: "none"}}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0, display: "block"}}>
                        <Button
                            variant="outlined"
                            color="success"
                            sx={{marginRight: "1em", borderRadius: "20px", textTransform: "none"}}
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
                                        color="success"
                                        sx={{borderRadius: "20px", textTransform: "none"}}
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