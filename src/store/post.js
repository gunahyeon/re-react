import { LocalConvenienceStoreOutlined } from '@mui/icons-material';
import { createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const postSlice = createSlice ({
    name:"post",
    initialState:{
        post:[],
    },
    reducers:{
        POST_SHOW:(state,action)=>{
            console.log(action);
            state.post = action.payload;
        },
        POST_HIDE:()=>{
            // alert("회원 정보가 없습니다. 다시 입력해주세요.");
        },
    }
});
export const {POST_SHOW, POST_HIDE} = postSlice.actions;

export const postShow = (userId) => (dispatch) => {
    console.log(userId);
    axios
    .get("http://jsonplaceholder.typicode.com/posts",{
        params:{
            userId:userId,
        }
    })
    .then((response) => {
            dispatch(POST_SHOW(response.data));
    })
    .catch((error) => {
        // console.log(error);
    });
}
export const postHide = () => (dispatch) =>{
    dispatch(POST_HIDE());
}
export default postSlice.reducer;
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