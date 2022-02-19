import {Container, Button, TextField,Typography, Avatar, Box} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useDispatch, useSelector } from "react-redux";
import { login,logout } from "../store/user";
import React, { useState } from "react";

const LoginForm = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    console.log(user);

    // const onSubmitHandler = (event) => {
    //     event.preventDefault();
    //     console.log("ho");
    //     dispatch(login(document.getElementById("email").value,document.getElementById("username").value));
    //     console.log(document.getElementById("email").value,document.getElementById("username").value);
    // }

    return (
        <div>
                <Container component="form" maxWidth="xs">
                    <Box sx={{marginTop:8, display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <Avatar sx={{m:1, bgcolor:'secondary.main'}}><LockOutlinedIcon/></Avatar>
                        <Typography component="h1" variant="h5">Sign in</Typography>
                        <TextField margin="normal" id="email" name="email" label="Email Address" required fullWidth autoComplete='email' autoFocus></TextField>
                        <TextField id="username" name="username" label="username" type="text" required fullWidth autoComplete='current-password'></TextField>
                        {/* <Button sx={{mt:2, mb:2}} variant='contained' type="submit" fullWidth onClick={(event) => onSubmitHandler(event)}>Sign in</Button> */}
                        {user.loginState ? <Button sx={{mt:2, mb:2}} variant='contained' type="submit" fullWidth 
                        onClick={(event) => {
                            event.preventDefault(); 
                            dispatch(login(document.getElementById("email").value,document.getElementById("username").value));
                            }}>Logout</Button> : 
                            <Button sx={{mt:2, mb:2}} variant='contained' type="submit" fullWidth>Sign in</Button>} 
                    </Box>
                </Container>
        </div>
    );
}

export default LoginForm;