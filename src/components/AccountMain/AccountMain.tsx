import React from 'react';
import {Box, } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import AccountMainEntity from "@/components/AccountMain/AccountMainEntity";
import {useAuthStore} from "@/store/store";
import {Modal} from "@mui/material";
import Button from "@mui/material/Button";
import BootstrapInput from "@/components/BootstrapInput/BootstrapInput";
import Typography from "@mui/material/Typography";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const AccountMain = () => {
    const {user} = useAuthStore()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Box sx={{marginTop: "1.5em"}}>
                <Grid container>
                    <AccountMainEntity name="Имя" value={`${user.first_name} ${user.last_name}`} onClick={handleOpen}/>
                    <AccountMainEntity name="Пароль" value="Обновлен 2 года назад" onClick={() => {console.log("Xui")}}/>
                    <AccountMainEntity name="Почта" value={user.email} onClick={() => {console.log("Xui")}}/>
                    <AccountMainEntity name="Мобильный телефон" value={user.phone_number} onClick={() => {console.log("Xui")}}/>
                    <AccountMainEntity name="Район поиска работы" value="Москва" onClick={() => {console.log("Xui")}}/>
                </Grid>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute' as 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '1px solid #000',
                    borderRadius: "10px",
                    boxShadow: 24,
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                    <Typography variant="h5">Изменить имя</Typography>
                    <BootstrapInput type="text" placeholder="Имя" sx={{paddingTop: "1em"}}/>
                    <BootstrapInput type="text" placeholder="Фамилия" sx={{padding: "1em"}}/>
                    <Button variant="outlined" onClick={handleClose}>Сохранить</Button>
                </Box>
            </Modal>
            <Button variant="text" sx={{marginTop: "1em", "color": "#0358d8"}}>Удаление аккаунта</Button>
        </div>
    );
};

export default AccountMain;