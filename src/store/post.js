import { LocalConvenienceStoreOutlined } from '@mui/icons-material';
import { createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const postSlice = createSlice ({
    name:"post",
    initialState:{
        userId:null,
        id:null,
        title:"",
        body:"",
    },
    reducers:{
        POST_SHOW:(state,action)=>{
            // state = {...state, userId:action.payload.value.userId, id:action.payload.value.id, title:action.payload.value.title, body:action.payload.value.body};
            // state = action.payload.value.userId;
            // state = action.payload.value.id;
            // state = action.payload.value.title;
            // state = action.payload.value.body;
            state.userId = action.payload.newObject.userId;
            state.id = action.payload.newObject.id;
            state.title = action.payload.newObject.title;
            state.body = action.payload.newObject.body;
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
        const res = response.data;
        console.log(res);
        res.map((item)=>{
            const newObject = {
                userId:item.userId,
                id:item.id,
                title:item.title,
                body:item.body,
            }
            console.log(newObject);
            dispatch(POST_SHOW({newObject:newObject}));
        });
        // const newObject = {
        //     userId:response.data.userId,
        //     id:response.data.id,
        //     title:response.data.title,
        //     body:response.data.body,
        // }
        // dispatch(POST_SHOW({value:value}));
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