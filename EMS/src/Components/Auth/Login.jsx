import React, { useState } from "react";

const Login = ({handleLogin}) => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const submitHandler = (e) => {

        e.preventDefault();
        console.log("email is :",email);
        console.log("password is :",password);
        handleLogin(email,password);
        setEmail('');
        setPassword('');
    
         
    }

    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="border-2 border-emerald-600 p-20 rounded-lg">
                <form action="" className="flex flex-col items-center justify-center" onSubmit={(e) => {submitHandler(e)}}>
                    <input value={email} onChange={(e) => {setEmail(e.target.value)}} required className="border-2 border-emerald-600 text-xl text-white  font-mono  outline-none bg-transparent placeholder:text-gray-400 py-3 px-5 rounded-full" type="email" placeholder="Enter your Email" />
                    <input value={password} onChange={(e) => {setPassword(e.target.value)}} required className="border-2 border-emerald-600 text-xl text-white font-mono outline-none bg-transparent placeholder:text-gray-400 py-3 px-5 rounded-full mt-4" type="password" placeholder="Enter password" />
                    <button className="border-2 bg-emerald-600 hover:bg-red-600 border-none mt-3 text-xl text-white font-mono outline-none  placeholder:text-gray-100 py-2 px-8 w-full rounded-full" >Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login