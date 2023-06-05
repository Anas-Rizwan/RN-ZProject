import { configureStore,combineReducers } from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import { userReducer } from "./reducer/reducer";

const rootReducer = combineReducers({
    ListItem: userReducer,
})

const store = configureStore({
    reducer: { rootReducer, },
    middleware: [thunk]
})


export default store;