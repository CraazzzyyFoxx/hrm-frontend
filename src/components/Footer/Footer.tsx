"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
import {Avatar} from "@mui/material";


function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" mt={1}>
            {'Copyright © '}
            <Link href="https://mui.com/">HRM&nbsp;</Link>
            {new Date().getFullYear()}
        </Typography>
    );
}

export default function Footer() {
    return (

        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 2, sm: 6 },
                py: { xs: 6, sm: 8 },
                textAlign: { sm: 'center', md: 'left' },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    width: '100%',
                    justifyContent: 'space-between',
                    // gap: { xs: 2, sm: 2 },
                    // py: { xs: 2, sm: 2 },
                    // borderTop: '1px solid',
                    // borderColor: 'divider',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4,
                        minWidth: { xs: '100%', sm: '60%' },
                    }}
                >
                    <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
                        <Box sx={{ ml: '-15px' }}>
                            <Avatar alt="SAVVA" src="/static/savva.jpg" sx={{marginLeft: "0.75em"}}/>
                        </Box>
                        <Typography variant="body2" fontWeight={600} gutterBottom sx={{marginTop: "15px"}}>
                            Новостная рассылка
                        </Typography>
                        <Typography variant="body2" color="text.secondary" mb={2}>
                            Подпишитесь на нашу рассылку новостей для получения еженедельных обновлений и рекламных акций.
                        </Typography>
                        <Stack direction="row" spacing={1} useFlexGap>
                            <TextField
                                id="outlined-basic"
                                hiddenLabel
                                size="small"
                                variant="outlined"
                                fullWidth
                                aria-label="Введите свой адрес электронной почты"
                                placeholder="Введите свой адрес электронной почты"
                                inputProps={{
                                    autoComplete: 'off',
                                    "aria-label": 'Enter your email address',
                                }}
                            />
                            <Button variant="contained" color="primary" sx={{ flexShrink: 0 }}>
                                Подписаться
                            </Button>
                        </Stack>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <Typography variant="body2" fontWeight={600}>
                        Продукт
                    </Typography>
                    <Link color="text.secondary" href="#">
                        Особенности
                    </Link>
                    <Link color="text.secondary" href="#">
                        Рекомендации
                    </Link>
                    <Link color="text.secondary" href="#">
                        Основные моменты
                    </Link>
                    <Link color="text.secondary" href="#">
                        Ценообразование
                    </Link>
                    <Link color="text.secondary" href="#">
                        Часто задаваемые вопросы
                    </Link>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <Typography variant="body2" fontWeight={600}>
                        Компания
                    </Typography>
                    <Link color="text.secondary" href="#">
                        О нас
                    </Link>
                    <Link color="text.secondary" href="#">
                        Карьеры
                    </Link>
                    <Link color="text.secondary" href="#">
                        Пресса
                    </Link>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <Typography variant="body2" fontWeight={600}>
                        Legal
                    </Typography>
                    <Link color="text.secondary" href="#">
                        Terms
                    </Link>
                    <Link color="text.secondary" href="#">
                        Privacy
                    </Link>
                    <Link color="text.secondary" href="#">
                        Contact
                    </Link>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    pt: { xs: 4, sm: 8 },
                    width: '100%',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <div>
                    <Link color="text.secondary" href="#">
                        Политика конфиденциальности
                    </Link>
                    <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
                        &nbsp;•&nbsp;
                    </Typography>
                    <Link color="text.secondary" href="#">
                        Условия обслуживания
                    </Link>
                    <Copyright />
                </div>
                <Stack
                    direction="row"
                    justifyContent="left"
                    spacing={1}
                    useFlexGap
                    sx={{
                        color: 'text.secondary',
                    }}
                >
                    <IconButton
                        color="inherit"
                        href="https://github.com/mui"
                        aria-label="GitHub"
                        sx={{ alignSelf: 'center' }}
                    >
                        <FacebookIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        href="https://twitter.com/MaterialUI"
                        aria-label="X"
                        sx={{ alignSelf: 'center' }}
                    >
                        <TwitterIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        href="https://www.linkedin.com/company/mui/"
                        aria-label="LinkedIn"
                        sx={{ alignSelf: 'center' }}
                    >
                        <LinkedInIcon />
                    </IconButton>
                </Stack>
            </Box>
        </Container>
    );
}