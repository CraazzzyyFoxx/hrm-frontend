"use client";

import React, {useEffect} from 'react';
import Header from "@/components/Header/Header";
import {Container, Tabs, Divider, Tab, Typography, Box} from '@mui/material';
import AccountMain from "@/components/AccountMain/AccountMain";
import BelbinTable from "@/components/BelbinTable/BelbinTable";
import Footer from "@/components/Footer/Footer";
import {useBelbinStore} from "@/stores/belbin";
import {useCheckAuth} from "@/hooks/checkAuth";
import ITabPanel from "@/components/ui/ITabPanel/ITabPanel";
import Button from "@mui/material/Button";


function a11yProps(index: number) {
    return {
        id: `account-tab-${index}`,
        'aria-controls': `account-tab-${index}`,
    };
}

const AccountPage = () => {
    const [tabId, setTabId] = React.useState(0);
    const {role, get} = useBelbinStore();

    useCheckAuth()
    useEffect(() => {
            get()
        },
        []
    )


    return (
        <>
            <Header isMain={false}/>
            <Container maxWidth="lg" sx={{height: "95vh"}}>
                <Box sx={{paddingTop: "2em", paddingBottom: "1em"}}>
                    <Typography variant="h4" sx={{fontWeight: 600}}>
                        Личный кабинет
                    </Typography>
                </Box>
                <Tabs value={tabId} onChange={(event, newValue) => setTabId(newValue)} aria-label="tabs-account">
                    <Tab label="Настройки" {...a11yProps(0)} sx={{textTransform: "none"}}/>
                    <Tab label="Чаты" {...a11yProps(1)} sx={{textTransform: "none"}}/>
                    <Tab label="Тест Белбина" {...a11yProps(2)} sx={{textTransform: "none"}}/>
                    <Tab label="Документы" {...a11yProps(3)} sx={{textTransform: "none"}}/>
                    <Tab label="Рассылки" {...a11yProps(4)} sx={{textTransform: "none"}}/>
                </Tabs>
                <Divider/>
                <ITabPanel name="account" value={tabId} index={0}>
                    <AccountMain/>
                </ITabPanel>
                <ITabPanel name="account" value={tabId} index={1}>
                    <Typography variant="h5" sx={{fontWeight: 600, marginTop: "1.5em"}}>
                        Чаты
                    </Typography>
                    <Typography variant="body1" sx={{marginTop: "1em"}}>
                        Чаты
                    </Typography>
                </ITabPanel>
                <ITabPanel name="account"  value={tabId} index={2}>
                    <BelbinTable role={role}/>
                </ITabPanel>
                <ITabPanel name="account" index={tabId} value={3}>
                    <Box sx={{gap: "20px", display: "flex", flexDirection: "column"}}>
                        <Typography variant="h5" sx={{fontWeight: 600, marginTop: "1.5em"}}>
                            Документы
                        </Typography>
                        <Typography variant="body1">
                            Документы
                        </Typography>
                        <Button variant="contained" sx={{maxWidth: "180px"}}>Загрузить документы</Button>
                    </Box>
                </ITabPanel>
                <ITabPanel name="account" index={tabId} value={4}>
                    <Typography variant="h5" sx={{fontWeight: 600, marginTop: "1.5em"}}>
                        Рассылки
                    </Typography>
                    <Typography variant="body1" sx={{marginTop: "1em"}}>
                        Настройки рассылок
                    </Typography>
                </ITabPanel>
            </Container>
            <Divider/>
            <Footer/>
        </>
    );
};

export default AccountPage;