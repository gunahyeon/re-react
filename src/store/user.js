import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		email: "",
		username: "",
		userId: null,
		loginState: false,
	},
	reducers: {
		LOGIN_SUCCESS: (state, action) => {
			console.log(action.payload.item);
			state.email = action.payload.item.email;
			state.username = action.payload.item.username;
			state.userId = action.payload.item.id;
			state.loginState = true;
		},
		LOGIN_FAIL: () => {
			// alert("회원 정보가 없습니다. 다시 입력해주세요.");
		},
		LOGOUT: (state) => {
			state.email = "";
			state.username = "";
			state.userId = null;
			state.loginState = false;
		},
	},
});
export const { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } = userSlice.actions;

export const login = (email, username) => (dispatch) => {
	const userBody = {
		email: email,
		username: username,
	};
	axios
		.get("http://jsonplaceholder.typicode.com/users")
		.then((response) => {
			console.log(response.data);
			response.data.filter((item) => {
				const value = { item: item };
				item.email === userBody.email && item.username === userBody.username
					? dispatch(LOGIN_SUCCESS(value))
					: dispatch(LOGIN_FAIL());
			});
		})
		.catch((error) => {
			alert("회원 정보가 없습니다. 다시 입력해주세요.");
		});
};
export const logout = () => (dispatch) => {
	dispatch(LOGOUT());
};
export default userSlice.reducer;
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
