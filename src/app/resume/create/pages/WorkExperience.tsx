import React from 'react';
import Message from "@/components/ui/Message/Message";
import Typography from "@mui/material/Typography";
import LeftContainer from "@/app/resume/create/ui/LeftContainer";
import RightContainer from "@/app/resume/create/ui/RightContainer";
import {useCheckAuth} from "@/hooks/checkAuth";
import Box from "@mui/material/Box";
import {
    Autocomplete,
    Checkbox,
    FormControlLabel,
    FormGroup,
    TextField
} from "@mui/material";
import {number, object, string, boolean} from "yup";
import {useFormik} from "formik";
import ResumeService from "@/services/ResumeService";
import {useCreateResumeStore} from "@/stores/resume";
import {monthList, monthDict} from "@/consts/vacancy";


const validationSchema = object({
    organization_name: string().required('Название организации обезательно'),
    position: string().required("Должность обезательна"),
    description: string().required("Просто нада"),
    startWorkMonth: string().required('Дата начала работы обязательна'),
    startWorkYear: number().required('Дата начала работы обязательна'),
    is_end: boolean().required("Нада")

});

const WorkExperience = () => {
    useCheckAuth()
    const {
        resume_id,
        resume,
        organization_name,
        position,
        description,
        startWorkMonth,
        startWorkYear,
        is_end,
        setFromResume
    } = useCreateResumeStore()
    const formik = useFormik({
        initialValues: {
            organization_name: organization_name,
            position: position,
            description: description,
            startWorkMonth: startWorkMonth,
            startWorkYear: startWorkYear,
            is_end: is_end
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            ResumeService.update(
                // @ts-ignore
                resume_id,
                {
                    ...resume,
                    work_experience: {
                        name: values.organization_name,
                        position: values.position,
                        description: values.description,
                        start_work_month: values.startWorkMonth,
                        start_work_year: values.startWorkYear,
                        is_end: values.is_end
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
                    <Box sx={{display: "flex", flexDirection: "column", gap: "5px"}}>
                        <Typography variant="h6">Расскажите об опыте работы</Typography>
                        <Typography variant="body2">Большинство компаний в первую очередь рассматривают кандидатов с опытом работы</Typography>
                    </Box>
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
                    <Typography variant="h6" sx={{marginBottom: "8px"}}>В какой компании вы работали?</Typography>
                    <TextField
                        size="small"
                        sx={{maxWidth: "500px"}}
                        id="organization_name"
                        name="organization_name"
                        value={formik.values.organization_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.organization_name && Boolean(formik.errors.organization_name)}
                        helperText={formik.touched.organization_name && formik.errors.organization_name}
                    />
                    <Typography variant="h6" sx={{marginTop: "24px", marginBottom: "8px"}}>На какой должности?</Typography>
                    <TextField
                        size="small"
                        sx={{maxWidth: "500px"}}
                        id="position"
                        name="position"
                        value={formik.values.position}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.position && Boolean(formik.errors.position)}
                        helperText={formik.touched.position && formik.errors.position}
                    />
                    <Typography variant="h6" sx={{marginTop: "24px", marginBottom: "8px"}}>Расскажите о ваших обязанностях и достижениях</Typography>
                    <TextField
                        multiline={true}
                        rows={4}
                        size="small"
                        sx={{maxWidth: "500px"}}
                        id="description"
                        name="description"
                        placeholder="Например, изучали и анализировали информацию, технические данные, показатели и результаты работы, обобщали и систематизировали их"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.description && Boolean(formik.errors.description)}
                        helperText={formik.touched.description && formik.errors.description}
                    />
                    <Box sx={{display: "flex", flexDirection: "row", gap: "40px"}}>
                        <Box>
                            <Typography variant="h6" sx={{marginTop: "24px", marginBottom: "8px"}}>Начало работы</Typography>
                            <Box sx={{display: "flex", flexDirection: "row", maxWidth: "240px"}}>
                                <Autocomplete
                                    size="small"
                                    options={monthList}
                                    getOptionLabel={(option) => option}
                                    value={formik.values.startWorkMonth}
                                    onChange={(event, value) => formik.setFieldValue("startWorkMonth", value)}
                                    onBlur={formik.handleBlur}
                                    renderInput={(params) => (
                                        <TextField
                                            placeholder="Месяц"
                                            name="birthdateMonth"
                                            sx={{minWidth: "120px"}}
                                            error={formik.touched.startWorkMonth && Boolean(formik.errors.startWorkMonth)}
                                            helperText={formik.touched.startWorkMonth && formik.errors.startWorkMonth}
                                            {...params}
                                            id="birthdateMonth"
                                        />
                                    )}
                                />
                                <TextField
                                    size="small"
                                    type="number"
                                    placeholder="Год"
                                    id="startWorkYear"
                                    name="startWorkYear"
                                    sx={{minWidth: "120px"}}
                                    value={formik.values.startWorkYear}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.startWorkYear && Boolean(formik.errors.startWorkYear)}
                                    helperText={formik.touched.startWorkYear && formik.errors.startWorkYear}
                                />
                            </Box>
                        </Box>
                        <Box>
                            <Typography variant="h6" sx={{marginTop: "24px", marginBottom: "8px"}}>Окончание</Typography>
                            <FormGroup>
                                <FormControlLabel
                                    label="По настоящее время"
                                    control={
                                    <Checkbox
                                        name="is_end"
                                        value={formik.values.is_end}/>}
                                    onChange={(event, checked) => formik.setFieldValue("is_end", checked)
                                }
                                />
                            </FormGroup>
                        </Box>
                    </Box>
                </Box>
            </RightContainer>
        </>
    );
};

export default WorkExperience;