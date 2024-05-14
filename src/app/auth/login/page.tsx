"use client";

import * as React from 'react';
import { object, string } from 'yup';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Header from "@/components/Header/Header";
import {useAuthStore} from "@/stores/auth";
import Copyright from "@/components/Copyright/Copyright";
import {useRouter} from "next/navigation";
import {Divider} from "@mui/material";
import Footer from "@/components/Footer/Footer";
import {useFormik} from "formik";
import Link from "next/link";


const validationSchema = object({
    email: string().email('Enter a valid email').required('Email is required'),
    password: string().min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
});


export default function LoginPage() {
    const {login} = useAuthStore()
    const { push } = useRouter();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            login(values.email, values.password)
            push("/")
        },
    });


    return (
        <>
            <Header isMain={false}/>
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
                        Поиск работы
                    </Typography>
                    <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
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
                                    required
                                    fullWidth
                                    name="password"
                                    label="Пароль"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}

                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Войти
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Typography  variant="body2">
                                    <Link href="/auth/registration">
                                        Нет аккаунта? Зараегистрироваться
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
            <Container maxWidth="lg" sx={{marginTop: "4em"}}>
                <Divider/>
            </Container>
            <Footer/>
        </>
    );
}