import { configureStore } from '@reduxjs/toolkit';
/* import { userSlice } from './user'; */
import user from './user'
import post from './post'
// import { postSlice} from './post';
export default configureStore({
    reducer : {
        user : user,
        post : post,
        // post : postSlice,
    }
}) 
// 	reducer: {
// 		user: user,
// 		// post : postSlice,
// 	},
// });