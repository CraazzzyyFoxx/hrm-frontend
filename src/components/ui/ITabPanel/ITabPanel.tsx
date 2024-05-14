import React from 'react';
import {Box} from "@mui/material";


interface TabPanelProps {
    name: string;
    children?: React.ReactNode;
    index: number;
    value: number;
}

const ITabPanel = (props: TabPanelProps) => {
    const { name, children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`${name}-tabpanel-${index}`}
            aria-labelledby={`${name}-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
};

export default ITabPanel;