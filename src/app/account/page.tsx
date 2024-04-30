"use client";

import React, {useEffect} from 'react';
import Header from "@/components/Header/Header";
import {ToggleButton, ToggleButtonGroup, Container, Divider} from '@mui/material';
import Typography from "@mui/material/Typography";
import AccountMain from "@/components/AccountMain/AccountMain";
import {useAuthStore} from "@/store/store";
import {useRouter} from "next/navigation";
import BelbinTable from "@/components/BelbinTable/BelbinTable";

const AccountPage = () => {
    const [alignment, setAlignment] = React.useState<string | null>('settings');
    const {isAuth} = useAuthStore()
    const { push } = useRouter();

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        setAlignment(newAlignment);
    };

    useEffect(() => {
            if (!isAuth) {
                push("/login")
            }
        },
        [])

    return (
        <div>
            <Header isMain={false}/>
            <Container maxWidth="lg" sx={{marginTop: "3em"}}>
                <Typography variant="h4" sx={{fontWeight: 600}}>
                    Личный кабинет
                </Typography>
                <ToggleButtonGroup
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                    sx={{marginTop: "1.5em", border: "none"}}

                    >
                    <ToggleButton value="settings" aria-label="left aligned" sx={{textTransform: "none", border: "none"}}>
                        Настройки
                    </ToggleButton>
                    <ToggleButton value="chat" aria-label="centered" sx={{textTransform: "none",border: "none"}}>
                        Чат
                    </ToggleButton>
                    <ToggleButton value="belbin" aria-label="right aligned" sx={{textTransform: "none",border: "none"}}>
                        Тест Белбина
                    </ToggleButton>
                    <ToggleButton value="documents" aria-label="right aligned" sx={{textTransform: "none",border: "none"}}>
                        Документы
                    </ToggleButton>
                    <ToggleButton value="mails" aria-label="justified" sx={{textTransform: "none",border: "none"}}>
                        Рассылки
                    </ToggleButton>
                </ToggleButtonGroup>
                <Divider/>
                <div>
                    {alignment === 'settings' && (
                        <AccountMain/>
                    )}
                    {alignment === 'belbin' && (
                        <BelbinTable/>
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