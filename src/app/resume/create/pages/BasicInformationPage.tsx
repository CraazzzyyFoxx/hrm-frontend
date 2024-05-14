import React from 'react';
import LeftContainer from "@/app/resume/create/ui/LeftContainer";
import Typography from "@mui/material/Typography";
import Message from "@/components/ui/Message/Message";
import RightContainer from "@/app/resume/create/ui/RightContainer";
import PhoneNumberInput from "@/components/ui/PhoneNumberInput/PhoneNumberInput";
import {Autocomplete, ToggleButton, ToggleButtonGroup, Box, TextField} from "@mui/material";
import {countryList, monthList, monthDict} from "@/consts/vacancy";
import {object, string, number, } from "yup";
import {useFormik} from "formik";
import {useCheckAuth} from "@/hooks/checkAuth";
import ResumeService from "@/services/ResumeService";
import {useQueryClient} from "react-query";
import {useCreateResumeStore} from "@/stores/resume";

const validationSchema = object({
    firstName: string().required('Имя обязательно'),
    lastName: string().required('Фамилия обязательна'),
    middleName: string().nullable(),
    birthdateDay: number().required('Дата рождения обязательна'),
    birthdateMonth: string().required('Дата рождения обязательна'),
    birthdateYear: number().required('Дата рождения обязательна'),
    phone: string().required('Номер телефона обязателен'),
    citizenship: object().required('Гражданство обязательно'),
    city: string().required('Место поиска работы'),
    gender: string().required('Пол обязателен'),
});


const BasicInformationPage = () => {
    useCheckAuth()
    const {
        name,
        resume_id,
        resume,
        first_name,
        last_name,
        middle_name,
        birthdate,
        gender,
        phone,
        citizenship,
        city,
    } = useCreateResumeStore()
    const queryClient = useQueryClient();

    const formik = useFormik({
        initialValues: {
            firstName: first_name,
            lastName: last_name,
            middleName: middle_name,
            birthdateDay: birthdate ? (birthdate.getDate()) : null,
            birthdateMonth: birthdate ? monthList[birthdate.getMonth() - 1] : null,
            birthdateYear: birthdate ? birthdate.getFullYear() : null,
            gender: gender ? gender : "Мужской",
            phone: phone,
            citizenship: citizenship ? citizenship : countryList[119],
            city: city ? city: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // @ts-ignore
            const birthday = new Date(values.birthdateYear, monthDict[values.birthdateMonth], values.birthdateDay)
            ResumeService.update(
                // @ts-ignore
                resume_id,
                {
                    ...resume,
                    position: name,
                    basic_information: {
                        first_name: values.firstName,
                        last_name: values.lastName,
                        middle_name: values.middleName,
                        birthday: birthday,
                        gender: values.gender,
                        phone: values.phone,
                        city: values.city,
                        citizenship: values.citizenship
                    }
                }
            ).then(
                () => {
                    queryClient.invalidateQueries('create-resume')
                }
            )
        },
    });

    return (
        <>
            <LeftContainer>
                <Message>
                    <Typography variant="h6">Заполните основную информацию</Typography>
                </Message>
            </LeftContainer>
            <RightContainer onSubmit={formik.handleSubmit}>
                <Box
                    sx={{
                        width: "100%", marginTop: "2em", display: "flex", flexDirection: "column", alignItems: "left", paddingLeft: "96px",}}
                >
                    <Typography variant="h6" sx={{marginBottom: "8px"}}>Фамилия</Typography>
                    <TextField
                        size="small"
                        sx={{maxWidth: "500px"}}
                        id="lastName"
                        name="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName && formik.errors.lastName}
                    />
                    <Typography variant="h6" sx={{marginTop: "24px", marginBottom: "8px"}}>Имя</Typography>
                    <TextField
                        size="small"
                        sx={{maxWidth: "500px"}}
                        id="firstName"
                        name="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                    />
                    <Typography variant="h6" sx={{marginTop: "24px", marginBottom: "8px"}}>Отчество</Typography>
                    <TextField
                        size="small"
                        sx={{maxWidth: "500px"}}
                        id="middleName"
                        name="middleName"
                        value={formik.values.middleName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.middleName && Boolean(formik.errors.middleName)}
                        helperText={formik.touched.middleName && formik.errors.middleName}
                    />
                    <Typography variant="h6" sx={{marginTop: "24px", marginBottom: "8px"}}>Пол</Typography>
                    <ToggleButtonGroup
                        exclusive={true}
                        value={formik.values.gender}
                        size="small"
                        sx={{display: "flex", flexDirection: "row"}}
                    >
                        <ToggleButton
                            name="gender"
                            value="Мужской"
                            sx={{borderRadius: "16px", textTransform: "none"}}
                            onClick={() => {formik.setFieldValue("gender", "Мужской")}}
                        >
                            Мужской
                        </ToggleButton>
                        <ToggleButton
                            name="gender"
                            value="Женский"
                            sx={{borderRadius: "16px", textTransform: "none"}}
                            onClick={() => {formik.setFieldValue("gender", "Женский")}}
                        >
                            Женский
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <Typography variant="h6" sx={{marginTop: "24px", marginBottom: "8px"}}>Город или регион, где живёте</Typography>
                    <TextField
                        size="small"
                        id="city"
                        name="city"
                        sx={{maxWidth: "500px"}}
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.city && Boolean(formik.errors.city)}
                        helperText={formik.touched.city && formik.errors.city}
                    />
                    <Typography variant="h6" sx={{marginTop: "24px", marginBottom: "8px"}}>Дата рождения</Typography>
                    <Box sx={{display: "flex", gap: "4px", flexDirection: "row", maxWidth: "500px"}}>
                        <TextField
                            size="small"
                            type="number"
                            placeholder="День"
                            id="birthdateDay"
                            name="birthdateDay"
                            value={formik.values.birthdateDay}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.birthdateDay && Boolean(formik.errors.birthdateDay)}
                            helperText={formik.touched.birthdateDay && formik.errors.birthdateDay}
                        />
                        <Autocomplete
                            size="small"
                            options={monthList}
                            getOptionLabel={(option) => option}
                            value={formik.values.birthdateMonth}
                            onChange={(event, value) => formik.setFieldValue("birthdateMonth", value)}
                            onBlur={formik.handleBlur}
                            renderInput={(params) => (
                                <TextField
                                    placeholder="Месяц"
                                    name="birthdateMonth"
                                    sx={{maxWidth: "500px", minWidth: "164px"}}
                                    error={formik.touched.birthdateMonth && Boolean(formik.errors.birthdateMonth)}
                                    helperText={formik.touched.birthdateMonth && formik.errors.birthdateMonth}
                                    {...params}
                                    id="birthdateMonth"
                                />
                            )}
                        />
                        <TextField
                            size="small"
                            type="number"
                            placeholder="Год"
                            id="birthdateYear"
                            name="birthdateYear"
                            value={formik.values.birthdateYear}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.birthdateYear && Boolean(formik.errors.birthdateYear)}
                            helperText={formik.touched.birthdateYear && formik.errors.birthdateYear}
                        />
                    </Box>
                    <Typography variant="h6" sx={{marginTop: "24px", marginBottom: "8px"}}>Номер телефона</Typography>
                    <PhoneNumberInput
                        size="small"
                        id="phone"
                        name="phone"
                        sx={{maxWidth: "500px"}}
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                        helperText={formik.touched.phone && formik.errors.phone}
                    />
                    <Typography variant="h6" sx={{marginTop: "24px"}}>Гражданство</Typography>
                    <Autocomplete
                        size="small"
                        options={countryList}
                        getOptionLabel={(option) => option.name}
                        value={Object(formik.values.citizenship)}
                        onChange={(event, value) => formik.setFieldValue("citizenship", value)}
                        onBlur={formik.handleBlur}
                        sx={{marginBottom: "50px"}}
                        renderInput={(params) => (
                            <TextField
                                name="citizenship"
                                placeholder="Гражданство"
                                sx={{maxWidth: "500px"}}
                                {...params}
                                id="citizenship"
                                error={formik.touched.citizenship && Boolean(formik.errors.citizenship)}
                            />
                        )}
                    />
                </Box>
            </RightContainer>
        </>
    );
};

export default BasicInformationPage;