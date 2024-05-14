"use client";

import React from 'react';
import Header from "@/components/Header/Header";
import {Divider, Container, Box, Typography, Button, Grid} from "@mui/material";
import Footer from "@/components/Footer/Footer";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import Copyright from "@/components/Copyright/Copyright";
import {object, string} from "yup";
import {useRouter} from "next/navigation";
import {useFormik} from "formik";


const validationSchema = object({
    email: string().email('Enter a valid email').required('Email is required'),
    name: string().required('Имя обязательно'),
    subject: string().required('Тема обязательна'),
    message: string().required('Сообщение обязательно'),
});


const ContactUsPage = () => {
    const { push } = useRouter();
    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            subject: '',
            message: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            push("/")
        },
    });


    return (
        <>
            <Header isMain={false} />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Связаться с нами
                    </Typography>
                    <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    size="small"
                                    fullWidth
                                    id="name"
                                    label="Имя"
                                    name="name"
                                    autoComplete="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name}

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    size="small"
                                    fullWidth
                                    id="email"
                                    label="Почта"
                                    name="email"
                                    autoComplete="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    size="small"
                                    fullWidth
                                    name="subject"
                                    label="Тема"
                                    type="text"
                                    id="subject"
                                    value={formik.values.subject}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.subject && Boolean(formik.errors.subject)}
                                    helperText={formik.touched.subject && formik.errors.subject}

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    size="small"
                                    fullWidth
                                    multiline={true}
                                    rows={4}
                                    name="message"
                                    label="Сообщение"
                                    type="text"
                                    id="message"
                                    value={formik.values.message}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.message && Boolean(formik.errors.message)}
                                    helperText={formik.touched.message && formik.errors.message}

                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Отправить
                        </Button>
                    </Box>
                </Box>
            </Container>
            <Container maxWidth="lg" sx={{marginTop: "4em"}}>
                <Divider/>
            </Container>
            <Footer/>
        </>
    );
};

export default ContactUsPage;