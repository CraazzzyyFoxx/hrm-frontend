"use client";

import React, {FC} from 'react';
import {AppBar, Box, Toolbar, IconButton, Container, Avatar, Button} from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import {useAuthStore} from "@/stores/auth";
import {useRouter} from "next/navigation";
import HeaderButton from "@/components/Header/HeaderButton";
import HeaderPopover from "@/components/Header/HeaderPopover";
import Link from 'next/link';
import HeaderPopoverUserContent from "@/components/Header/HeaderPopoverUserContent";
import Typography from "@mui/material/Typography";


interface AppBarProps {
    isMain: boolean
}

const Header: FC<AppBarProps> = ({isMain = false}: AppBarProps) => {
    const {isAuth} = useAuthStore()
    const { push } = useRouter();

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [anchorElNotification, setAnchorElNotification] = React.useState<null | HTMLElement>(null);

    return (
        <AppBar position="static" color={isMain ? "transparent": "primary"} elevation={Number(!isMain)}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Link href="/">
                        <Avatar alt="SAVVA" src="/static/dmitriy.jpg"  sx={{marginRight: "1em"}}/>
                    </Link>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
                        { isAuth ?
                            <>
                                <HeaderButton onClick={() => {push('/resume')}}>Мои резюме</HeaderButton>
                                <HeaderButton onClick={() => {push('/responses')}}>Отклики</HeaderButton>
                                <HeaderButton onClick={() => {push('/contact-us')}}>Помощь</HeaderButton>
                            </>
                            :
                            <>
                                <HeaderButton onClick={() => {push('/contact-us')}}>Помощь</HeaderButton>
                            </>
                        }
                    </Box>
                    <Box sx={{ flexGrow: 0, display: "block"}}>
                        <Button
                            variant="outlined"
                            sx={{marginRight: "1em", borderRadius: "20px", color: "#2e7d32", borderColor: "#2e7d32"}}
                            onClick={() => {push('/resume/create/initial')}}
                        >
                            Создать резюме
                        </Button>
                        {
                            isAuth
                                ? <>
                                <IconButton sx={{ p: "2.5px" }}>
                                    <FavoriteBorderIcon sx={{ color: 'white'}} fontSize="large"/>
                                </IconButton>
                                <IconButton
                                    sx={{ p: "5px" }}
                                    onClick={(event) => setAnchorElNotification(event.currentTarget)}
                                >
                                    <NotificationsNoneOutlinedIcon sx={{ color: 'white'}} fontSize="large"/>
                                </IconButton>
                                <IconButton
                                    sx={{ p: "2.5px" }}
                                    onClick={(event) => setAnchorElUser(event.currentTarget)}
                                >
                                    <AccountCircleOutlinedIcon sx={{ color: 'white' }} fontSize="large"/>
                                </IconButton>

                                <HeaderPopover
                                    open={Boolean(anchorElUser)}
                                    anchorEl={anchorElUser}
                                    handleClose={() => setAnchorElUser(null)}
                                >
                                    <HeaderPopoverUserContent/>
                                </HeaderPopover>
                                <HeaderPopover
                                    open={Boolean(anchorElNotification)}
                                    anchorEl={anchorElNotification}
                                    handleClose={() => setAnchorElNotification(null)}
                                >
                                    <Box sx={{padding: "16px", minWidth: "350px", display: "flex", alignItems: "top", flexDirection: "row", gap: "16px"}}>
                                        <Avatar src="/static/empty_min.svg" sx={{height: "24px", width: "24px"}}/>
                                        <Box sx={{display: "flex", flexDirection: "column", gap: "4px"}}>
                                            <Typography variant="body2">Нет новых вакансий в автопоиске</Typography>
                                            <Typography variant="body2" sx={{color: "#468ffd"}}>Настроить автопоиск</Typography>
                                        </Box>
                                    </Box>
                                </HeaderPopover>
                                </>
                                :
                                <>
                                    <Button
                                        variant="outlined"
                                        sx={{borderRadius: "20px", color: "white", borderColor: "white"}}
                                        onClick={() => {push('/auth/login')}}
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
export default Header;