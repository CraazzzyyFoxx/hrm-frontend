import React from 'react';
import Message from "@/components/ui/Message/Message";
import Typography from "@mui/material/Typography";
import LeftContainer from "@/app/resume/create/ui/LeftContainer";
import RightContainer from "@/app/resume/create/ui/RightContainer";
import {useCheckAuth} from "@/hooks/checkAuth";
import Box from "@mui/material/Box";
import {FormControl, FormControlLabel, Radio, RadioGroup, TextField} from "@mui/material";
import {number, object, string} from "yup";
import {useFormik} from "formik";
import ResumeService from "@/services/ResumeService";
import {useCreateResumeStore} from "@/stores/resume";


const validationSchema = object({
    levelEducation: string().required('Уровень образования обезателен'),
    schoolName: string().required("Название учебного заведения обезательно"),
    faculty: string().nullable(),
    specialization: string().nullable(),
    year_of_graduation: number().min(1900).max(2100).required("Дата окончания обезательна")

});

const LevelEducation = () => {
    useCheckAuth()
    const {
        resume_id,
        resume,
        schoolName,
        educationLevel,
        faculty,
        specialization,
        year_of_graduation,
        setFromResume
    } = useCreateResumeStore()
    const formik = useFormik({
        initialValues: {
            levelEducation: educationLevel,
            schoolName: schoolName,
            faculty: faculty,
            specialization: specialization,
            year_of_graduation: year_of_graduation
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values)
            ResumeService.update(
                // @ts-ignore
                resume_id,
                {
                    ...resume,
                    education: {
                        level: values.levelEducation,
                        name: values.schoolName,
                        faculty: values.faculty,
                        specialization: values.specialization,
                        year_of_graduation: Number(values.year_of_graduation)
                    }
                }
            ).then(
                (response) => {
                    setFromResume(response.data)
                }
            )
        },
    });

    return (
        <>
            <LeftContainer>
                <Message>
                    <Typography variant="h6">Какое у вас образование?</Typography>
                </Message>
            </LeftContainer>
            <RightContainer onSubmit={formik.handleSubmit}>
                <Box
                    sx={{
                        width: "100%",
                        marginTop: "6em",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "left",
                        paddingLeft: "96px",
                    }}>
                    <Typography variant="h6">
                        Уровень образования
                    </Typography>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                            value={formik.values.levelEducation}
                            onChange={(event, value) => {formik.setFieldValue("levelEducation", value)}}
                        >
                            <FormControlLabel value="Среднее" control={<Radio />} label="Среднее" />
                            <FormControlLabel value="Среднее специальное" control={<Radio />} label="Среднее специальное" />
                            <FormControlLabel value="Неоконченное высшее" control={<Radio />} label="Неоконченное высшее" />
                            <FormControlLabel value="Высшее" control={<Radio />} label="Высшее" />
                            <FormControlLabel value="Бакалавр" control={<Radio />} label="Бакалавр" />
                            <FormControlLabel value="Магистр" control={<Radio />} label="Магистр" />
                            <FormControlLabel value="Кандидат наук" control={<Radio />} label="Кандидат наук" />
                            <FormControlLabel value="Доктор наук" control={<Radio />} label="Доктор наук" />
                        </RadioGroup>
                    </FormControl>
                    <Typography variant="h6" sx={{marginBottom: "8px"}}>Название учебного заведения</Typography>
                    <TextField
                        size="small"
                        sx={{maxWidth: "500px"}}
                        id="schoolName"
                        name="schoolName"
                        value={formik.values.schoolName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.schoolName && Boolean(formik.errors.schoolName)}
                        helperText={formik.touched.schoolName && formik.errors.schoolName}
                    />
                    <Typography variant="h6" sx={{marginTop: "24px", marginBottom: "8px"}}>Факультет</Typography>
                    <TextField
                        size="small"
                        sx={{maxWidth: "500px"}}
                        id="faculty"
                        name="faculty"
                        value={formik.values.faculty}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.faculty && Boolean(formik.errors.faculty)}
                        helperText={formik.touched.faculty && formik.errors.faculty}
                    />
                    <Typography variant="h6" sx={{marginTop: "24px", marginBottom: "8px"}}>Специализация</Typography>
                    <TextField
                        size="small"
                        sx={{maxWidth: "500px"}}
                        id="specialization"
                        name="specialization"
                        value={formik.values.specialization}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.specialization && Boolean(formik.errors.specialization)}
                        helperText={formik.touched.specialization && formik.errors.specialization}
                    />
                    <Typography variant="h6" sx={{marginTop: "24px", marginBottom: "8px"}}>Год окончания</Typography>
                    <Box sx={{display: "flex", flexDirection: "row", gap: "10px", alignItems: "center"}}>
                        <TextField
                            size="small"
                            type="number"
                            placeholder="Год"
                            id="year_of_graduation"
                            name="year_of_graduation"
                            value={formik.values.year_of_graduation}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.year_of_graduation && Boolean(formik.errors.year_of_graduation)}
                            helperText={formik.touched.year_of_graduation && formik.errors.year_of_graduation}
                        />
                        <Box>
                            <Typography variant="body1">
                                Если ещё учитесь, укажите год
                            </Typography>
                            <Typography variant="body1">
                                предполагаемого окончания
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </RightContainer>
        </>
    );
};

export default LevelEducation;