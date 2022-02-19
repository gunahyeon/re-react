import { createSlice} from "@reduxjs/toolkit";
import axios from "axios";
const URL = "http://jsonplaceholder.typicode.com/users";

export const userSlice = createSlice ({
    name:"user",
    initialState:{
        email:"",
        username:"",
        userId:null,
        loginState:false,
    },
    reducers:{
        LOGIN:(state,action)=>{
            console.log(action.payload.response);
            state.email = action.payload.response.email;
            state.username = action.payload.response.username;
            state.userId = action.payload.response.id;
            state.loginState = true; 
            console.log(state);
        },
        LOGOUT:(state)=>{
            // 
        }
    }
});
export const {LOGIN,LOGOUT} = userSlice.actions;

export const login = (email,username) => (dispatch) => {
    const userBody = {
        email:email,
        username:username,
    }

    axios
    .get(URL, {
        params: userBody,
    })
    .then((response) => {
        console.log(response.data);
        // dispatch(login(response.data[0]));
        //action reducer
        const value = {response:response.data[0]}; //여기 response가 payload로 보내지는 건가?
        dispatch(LOGIN(value));
    })
    .catch((error) => {
        alert("회원 정보가 없습니다. 다시 입력해주세요.");
    });
}
export const logout = () => {
    console.log("logout");
}
export default userSlice.reducer;