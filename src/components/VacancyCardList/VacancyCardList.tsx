import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import VacancyCard from "@/components/VacancyCard/VacancyCard";

const VacancyCardList = () => {
    return (
        <Grid container spacing={2}  maxWidth="md" sx={{marginTop: "1.5em"}}>
            {Array.from(Array(12)).map((_, index) => (
                <Grid key={index}>
                    <VacancyCard/>
                </Grid>
            ))}
        </Grid>
    );
};

export default VacancyCardList;