import React from "react";
import "./Form.css";

export default function SignIn(){
    return(
        <div className="wrapper">
            <div className="icon-wrapper"></div>
            <p>Sign In</p>
            <input type="text" className="text-input" placeholder="Email Address*"/>
            <input type="text" className="text-input" placeholder="Password*"/>
            <label className="checkbox-wrapper">Remember me
                <input type="checkbox" className="checkbox"/>
                <span className="checkmark"></span>
            </label>
            <input type="button" className="button-input" value="SIGN IN" />
            <div className="links">
                <a>Forgot password?</a>
                <a>Don't have an account? Sign Up</a>
            </div>
            <p className="footer">Copyright © Your website 2020</p>
        </div>
    )
}