import { createSlice } from "@reduxjs/toolkit";

const LoginReducer = createSlice({
    name:"LoginReducer",
    initialState:{
        isLogin: localStorage.getItem("token-login")? true :false
    },
    reducers:{
        login:(state,action)=>{
            const {userEmail,password} = action.payload
            if(userEmail==="thanh@gmail.com" && password ==="admin"){
                localStorage.setItem("token-login", userEmail)
                state.isLogin = true
            } else{
                alert("Wrong user email or password")
            }
        },
        logout:state=>{
            localStorage.removeItem("token-login")
            state.isLogin=false
        },
    }
})
export const {login,logout} = LoginReducer.actions
export default LoginReducer.reducer