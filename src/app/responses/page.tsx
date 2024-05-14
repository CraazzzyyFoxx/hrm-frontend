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
import VacancyCardList from "@/components/VacancyCardList/VacancyCardList";


function a11yProps(index: number) {
    return {
        id: `account-tab-${index}`,
        'aria-controls': `account-tab-${index}`,
    };
}

const ResponsesPage = () => {
    const [tabId, setTabId] = React.useState(0);
    useCheckAuth()

    return (
        <>
            <Header isMain={false}/>
            <Container maxWidth="lg" sx={{minHeight: "95vh"}}>
                <Box sx={{paddingTop: "2em", paddingBottom: "1em"}}>
                    <Typography variant="h4" sx={{fontWeight: 600}}>
                        Отклики и приглашения
                    </Typography>
                </Box>
                <Tabs value={tabId} onChange={(event, newValue) => setTabId(newValue)} aria-label="tabs-account">
                    <Tab label="Активные" {...a11yProps(0)} sx={{textTransform: "none"}}/>
                    <Tab label="Все отклики" {...a11yProps(1)} sx={{textTransform: "none"}}/>
                </Tabs>
                <Divider/>
                <ITabPanel name="responses" value={tabId} index={0}>
                    <Box sx={{marginTop: "1.5em", marginBottom: "1.5em"}}>
                        <Typography>
                            У вас нет активных откликов.
                        </Typography>
                    </Box>
                </ITabPanel>
                <ITabPanel name="responses" value={tabId} index={1}>
                    <Box sx={{marginTop: "1.5em", marginBottom: "1.5em"}}>
                        <Typography>
                            У вас нет откликов.
                        </Typography>
                    </Box>
                </ITabPanel>
                <Box sx={{marginBottom: "1.5em"}}>
                    <Typography variant="h5" sx={{fontWeight: "700"}}>Вам подойдут эти вакансии</Typography>
                    <VacancyCardList/>
                </Box>
            </Container>
            <Divider/>
            <Footer/>
        </>
    );
};

export default ResponsesPage;