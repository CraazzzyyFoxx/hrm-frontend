import React from 'react';
import {Resume} from "@/models/Resume";
import ResumeCardOpened from "@/components/ResumeCard/ResumeCardOpened";
import ResumeCardNotOpened from "@/components/ResumeCard/ResumeCardNotOpened";

export interface ResumeCardProps {
    resume: Resume
}


const ResumeCard = ({resume}: ResumeCardProps) => {
    return (
        <>
            {
                resume.is_public
                    ?
                    <ResumeCardOpened resume={resume}/>
                    :
                    <ResumeCardNotOpened resume={resume}/>
            }
        </>
    );
};

export default ResumeCard;