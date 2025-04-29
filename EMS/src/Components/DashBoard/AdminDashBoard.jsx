import React, { useContext } from "react";
import Header from "../../others/Header";
import CreateTask from "../../others/CreateTask";
import AllTask from "../../others/AllTask";
import { AuthContext } from "../../Context/AuthProvider";
const AdminDashBoard = (props) => {

    const [userData] = useContext(AuthContext);

    return (
        <div className="h-screen w-full p-7">
            <Header changeUser = {props.changeUser} />
            <CreateTask/>
            <AllTask userData = {userData} />
          
        </div>
    )
}

export default AdminDashBoard;