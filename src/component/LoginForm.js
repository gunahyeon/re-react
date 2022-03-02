import {
	Container,
	Button,
	TextField,
	Typography,
	Avatar,
	Box,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/user";
import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const [email, setEmail] = React.useState("");
	const [username, setUsername] = React.useState("");
	// const onSubmitHandler = (event) => {
	//     event.preventDefault();
	//     console.log("ho");
	//     dispatch(login(document.getElementById("email").value,document.getElementById("username").value));
	//     console.log(document.getElementById("email").value,document.getElementById("username").value);
	// }
	const submitHandler = (event) => {
		event.preventDefault();
		/*  const loginAction = () => {

        } */
	};
	React.useEffect(() => {
		axios
			.get("http://jsonplaceholder.typicode.com/users")
			.then((response) => {
				console.log(response.data);
				for (var i = 0; i < response.data.length; i++) {}
			})
			.catch((error) => {
				alert("회원 정보가 없습니다. 다시 입력해주세요.");
			});
	}, []);
	return (
		<div>
			<Container component="div" maxWidth="xs">
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
						<LockOutlinedIcon />
					</Avatar>
					<form>
						{user.loginState ? (
							<div>
								<Typography component="h1" variant="h5">
									Hello, {user.username}.
								</Typography>
								<Button
									sx={{ mt: 2, mb: 2 }}
									variant="contained"
									type="submit"
									fullWidth
									onClick={(event) => {
										submitHandler(event);
										console.log("Logout");
										dispatch(logout());
									}}
								>
									Logout
								</Button>
							</div>
						) : (
							<div>
								<Typography component="h1" variant="h5">
									Sign in
								</Typography>
								<TextField
									margin="normal"
									id="email"
									name="email"
									label="Email Address"
									required
									fullWidth
									autoComplete="email"
									autoFocus
									onChange={(event) => {
										setEmail(event.target.value);
									}}
								></TextField>
								<TextField
									id="username"
									name="username"
									label="username"
									type="text"
									required
									fullWidth
									onChange={(event) => {
										setUsername(event.target.value);
									}}
									autoComplete="current-password"
								></TextField>
								<Button
									sx={{ mt: 2, mb: 2 }}
									variant="contained"
									type="submit"
									fullWidth
									onClick={(event) => {
										submitHandler(event);
										console.log("Login");
										dispatch(login(email, username));
									}}
								>
									Sign in
								</Button>
							</div>
						)}
					</form>
				</Box>
			</Container>
		</div>
	);
};

/**
 * 로그인버튼을 누른다 -> username, email을 body로 묶어서 dispatch 한다.
 * body를 axios로 넘기는게 아니라, axios로 일단 userlist 받은다음에 그담에 body랑 비교
 * 있다 -> login_success dispatch
 * 없다 -> login_fail dispatch
 *
 * const response = data.filter((item요건 아무이름이나 상관없다) => {
 *  return item.username === Jin
 * })
 *
 *
 * response[0].username = Jin
 */

export default LoginForm;
