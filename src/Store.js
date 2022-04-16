import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./reduxcers/LoginReducer";

export default configureStore({
    reducer:{
        LoginReducer
    }
})