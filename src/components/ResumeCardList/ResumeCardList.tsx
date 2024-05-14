import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import ResumeCard from "@/components/ResumeCard/ResumeCard";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {useQuery} from "react-query";
import ResumeService from "@/services/ResumeService";


const ResumeCardList = () => {
    const {data, isLoading, isSuccess} = useQuery({
        queryKey: ['resumes'],
        queryFn: () => ResumeService.getMy()
    })
    return (
        <Grid container spacing={2}  maxWidth="md" sx={{marginTop: "1.5em"}}>
            {
                isLoading ?
                    <Grid>
                        <Typography>Загрузка...</Typography>
                    </Grid>
                    :
                    <>
                        {
                            // @ts-ignore
                            data?.data.results.length > 0?
                                <>
                                    {
                                        data?.data.results.map((resume, index) => (
                                            <Grid key={resume.id}>
                                                <ResumeCard resume={resume}/>
                                            </Grid>
                                        ))
                                    }
                                </>
                                :
                                <Grid>
                                    <Typography variant="h6">Резюме отсутствуют</Typography>
                                </Grid>
                        }
                    </>
            }
        </Grid>

    );
};

export default ResumeCardList;