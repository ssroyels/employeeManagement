import React, { useState } from "react";
const Header = ({data}) => {

    // const [username,setUserName] = useState('');
    // if(!data) {
    //     setUserName('Admin');
    // } else {
    //     setUserName(data.firstName)
    // }
    const LogOutUser = () => {
        localStorage.setItem('loggedInUser','');
        window.location.reload();
    }
    return(
        <div className="flex items-end justify-between">
            <h1 className="text-2xl text-white font-medium">Hello   <br /> <span className="text-3xl text-white font-semibold"></span> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo8ecjL5DItbUDCqR7LuHDKfXt6PzdaTESzA&s" className="h-20 w-25 rounded-lg" alt="" />  UserName </h1>
            <button onClick={LogOutUser} className="bg-red-500 text-white px-5 py-2 rounded-sm text-lg font-medium">Log Out</button>
        </div>
    )
}
export default Header;