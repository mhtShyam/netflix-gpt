import React, { useState } from "react";
import Header from "./Header";
const Login = ()=>{
    const [isSignIn, setIsSignIn] = useState(true);
    const toggleSignInForm =()=>{
        setIsSignIn(!isSignIn)
    }
    return (
        <div>
           <Header/>
           <div className="absolute bg-gradient-to-t from-black bg-blend-black"><img src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_medium.jpg" alt="bg-logo"/></div>
           <form className="absolute bg-black w-4/12 my-36 px-16 py-10 mx-auto left-0 right-0 text-white opacity-90 rounded-sm">
           <h2 className="font-bold text-3xl p-2 ">{isSignIn ? "Sign In" : "Sign Up"}</h2>
           {!isSignIn && <input type="text" placeholder="Full Name" className="p-4 my-3 rounded-sm w-full bg-gray-800 border border-gray-500"/>}
            <input type="text" placeholder="Email Address" className="p-4 my-3 rounded-sm w-full bg-gray-800 border border-gray-500"/>
            <input type="password" placeholder="Password" className="p-4 my-3 rounded-sm w-full bg-gray-800 border border-gray-500"/>
            <button className=" bg-red-600 p-2 my-2  w-full rounded-md">{isSignIn ? "Sign In" : "Sign UP"}</button>
            <p className="py-5" onClick={toggleSignInForm}><span className="text-gray-200 cursor-pointer">{isSignIn ? "New to Netflix?" : "Already have an account?"}</span>{isSignIn ? " Sign up now." : " Sign in now."}</p>
           </form>
        </div>
    )
}

export default Login;