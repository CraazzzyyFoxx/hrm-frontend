import React, {FC} from 'react';
import {Divider, List, ListSubheader, Popover, ListItemButton} from "@mui/material";
import {useAuthStore} from "@/stores/auth";
import {useRouter} from "next/navigation";


interface HeaderPopoverProps {
    open: boolean
    anchorEl: null | HTMLElement
    handleClose: () => void
    children: React.ReactNode
}


const HeaderPopover: FC<HeaderPopoverProps> = (props) => {
    return (
        <Popover
            id="header-user-popover"
            open={props.open}
            anchorEl={props.anchorEl}
            onClose={props.handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            {props.children}
        </Popover>
    );
};

export default HeaderPopover;