'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    palette: {
        primary: {
            light: '#4c5155',
            main: '#20262b',
            dark: '#161a1e',
            contrastText: '#fff',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: ({ theme, ownerState }) => ({
                    boxShadow: 'none',
                    borderRadius: '10px',
                    textTransform: 'none',
                }),
            },
        },
    }
});

export default theme;