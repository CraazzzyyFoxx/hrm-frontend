import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as React from "react";

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="/static">
                HRM
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Copyright;