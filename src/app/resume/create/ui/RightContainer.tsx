import React from 'react';
import Box from "@mui/material/Box";
import ColorLinearProgress from "@/components/ui/ColorLinearProgress/ColorLinearProgress";

import Container from "@mui/material/Container";
import {Divider} from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {useCreateResumeStore} from "@/stores/resume";


interface RightContainerProps {
    children: React.ReactNode
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}


const RightContainer = (props: RightContainerProps) => {
    const {stage, name, decreaseStage} = useCreateResumeStore()

    return (
        <Container
            maxWidth={false}
            sx={{alignItems: "left", width: "65%" , boxShadow: "-16px 0px 16px -10px #2a313752", minHeight: "95vh"}}
        >
            <Box component="form" onSubmit={props.onSubmit} sx={{width: "50%", height: "100%"}}>
                <Box sx={{height: "93%"}}>
                    <ColorLinearProgress value={((stage + 1) / 5) * 100 }/>
                    {
                        name ?
                            <Typography variant="body1" sx={{marginTop: "24px", color: "#5e6c84"}}>{`Резюме «${name}»`}</Typography>
                            :
                            <></>
                    }
                    {props.children}
                </Box>
                <Divider sx={{marginLeft: "-24px"}}/>
                {
                    stage > 0 ?
                        <Box sx={{display: "flex", justifyContent: "space-between"}}>
                            <Button
                                variant="contained"
                                sx={{marginTop: "24px", marginBottom: "24px"}}
                                onClick={decreaseStage}
                            >
                                Назад
                            </Button>
                            <Button
                                variant='contained'
                                type="submit"
                                sx={{marginTop: "24px", marginBottom: "24px", marginRight: "24px"}}
                            >
                                Сохранить и продолжить
                            </Button>
                        </Box>
                        :
                        <Box sx={{display: "flex", justifyContent: "right"}}>
                            <Button
                                variant='contained'
                                type="submit"
                                sx={{marginTop: "24px", marginBottom: "24px", marginRight: "24px"}}
                            >
                                Сохранить и продолжить
                            </Button>
                        </Box>
                }
            </Box>
        </Container>
    );
};

export default RightContainer;