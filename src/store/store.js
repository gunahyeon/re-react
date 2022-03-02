import { configureStore } from '@reduxjs/toolkit';
import {combineReducers} from "redux";
import { persistReducer, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from "redux-persist";
import storage from "redux-persist/lib/storage";
/* import { userSlice } from './user'; */
import user from './user'
import post from './post'
// import { postSlice} from './post';

const persistConfig = {
    key: "root",
    storage,
  };

const rootReducer = combineReducers({
    user,
    post,
})
const reducer = (state,action) => {
    if(action.type === 'user/LOGOUT') {
        state = undefined; //initialState화
    }
    return rootReducer(state,action);
}

const persistedReducer = persistReducer(persistConfig, reducer);

    export default configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
    });