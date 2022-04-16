import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../reduxcers/LoginReducer";
import { useSelector } from "react-redux";

const LoginView = () => {
     const [userEmail, setUserEmail]= useState("")
     const [password, setPassword]= useState("")
     const dispatch = useDispatch();
     const isLogin =useSelector(state => state.LoginReducer.isLogin)

    return ( 
       <>
       {
           !isLogin ?
           <div className="">
               <div className="w-[500px] bg-bgBanner mx-auto my-[100px] rounded-lg p-10 font-Fredoka text-brown">
                    <div className="p-2">
                         <input
                            className="border-black border-2 rounded-md p-2"
                            type="text"
                            value={userEmail}
                            onChange = {event => setUserEmail(event.target.value)}
                            placeholder="Use Email"
                         />
                    </div>
                    <div className="p-2">
                         <input
                            className="border-black border-2 rounded-md p-2"
                            type="password"
                            value={password}
                            onChange = {event => setPassword(event.target.value)}
                            placeholder="Password"
                         />
                     </div>
                     <div className="p-2">
                         <input
                             className=""
                             type="checkbox"
                         /> Save login
                     </div>
                    <div className="">
                        <button onClick={()=>dispatch(login({userEmail,password}))} className="ml-2 px-10 rounded-md py-2 bg-brown text-yellow">login</button>
                    </div>
                 </div>
           </div>
           :<div>
                <h1>you are already login</h1>
            </div>
       }
       </>
     );
}
 
export default LoginView;