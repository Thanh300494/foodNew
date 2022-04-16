import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {LoginReducer, logout} from "../reduxcers/LoginReducer";

const Menu = () => {
    const dispatch = useDispatch();
    const isLogin = useSelector(state =>state.LoginReducer.isLogin)
    return ( 
        <div className="font-Fredoka text-right">
            <p className="mt-5">Call for Delivery: 0123 456 789</p>
            <ul className="flex text-xl mt-5 gap-12">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/">Event Us</Link>
                <Link to="/">Cart</Link>
                {
                    isLogin ? 
                    <li className="cursor-pointer" onClick={()=> dispatch(logout)}>Logout</li>:
                    <Link to="/login">Login</Link>
                }
            </ul>
        </div>
     );
}
 
export default Menu;