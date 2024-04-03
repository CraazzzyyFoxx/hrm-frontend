"use client";

import React from 'react';
import Header from "@/components/Header/Header";
import {ToggleButton, ToggleButtonGroup, Container, Divider} from '@mui/material';
import Typography from "@mui/material/Typography";
import AccountMain from "@/components/AccountMain/AccountMain";
import {useAuthStore} from "@/store/store";

const AccountPage = () => {
    const [alignment, setAlignment] = React.useState<string | null>('settings');
    const {isAuth, user} = useAuthStore()

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        setAlignment(newAlignment);
    };

    return (
        <div>
            <Header/>
            <Container maxWidth="lg" sx={{marginTop: "3em"}}>
                <Typography variant="h4" sx={{fontWeight: 600}}>
                    Настройки
                </Typography>
                <ToggleButtonGroup
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                    sx={{marginTop: "1.5em", border: "none"}}

                    >
                    <ToggleButton value="settings" aria-label="left aligned" sx={{textTransform: "capitalize", border: "none"}}>
                        Настройки
                    </ToggleButton>
                    <ToggleButton value="undesirable" aria-label="centered" sx={{textTransform: "capitalize", border: "none"}}>
                        Нежелательное
                    </ToggleButton>
                    <ToggleButton value="images" aria-label="right aligned" sx={{textTransform: "capitalize", border: "none"}}>
                        Изображения
                    </ToggleButton>
                    <ToggleButton value="mails" aria-label="justified" sx={{textTransform: "capitalize", border: "none"}}>
                        Рассылки
                    </ToggleButton>
                </ToggleButtonGroup>
                <Divider/>
                <div>
                    {alignment === 'settings' && (
                        <AccountMain/>
                    )}
                    {alignment === 'undesirable' && (
                        <div>
                            <Typography variant="h5" sx={{fontWeight: 600, marginTop: "1.5em"}}>
                                Нежелательное
                            </Typography>
                            <Typography variant="body1" sx={{marginTop: "1em"}}>
                                Настройки нежелательного контента
                            </Typography>
                        </div>
                    )}
                    {alignment === 'images' && (
                        <div>
                            <Typography variant="h5" sx={{fontWeight: 600, marginTop: "1.5em"}}>
                                Изображения
                            </Typography>
                            <Typography variant="body1" sx={{marginTop: "1em"}}>
                                Настройки изображений
                            </Typography>
                        </div>
                    )}
                    {alignment === 'mails' && (
                        <div>
                            <Typography variant="h5" sx={{fontWeight: 600, marginTop: "1.5em"}}>
                                Рассылки
                            </Typography>
                            <Typography variant="body1" sx={{marginTop: "1em"}}>
                                Настройки рассылок
                            </Typography>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    );
};

export default AccountPage;