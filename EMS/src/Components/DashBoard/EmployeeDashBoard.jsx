import React from "react";
import Header from "../../others/Header";
import TaskNumber from "../../others/TaskNumber";
import TaskList from "../../TaskList/TaskList";

const EmployeeDashBoard = ({data}) => {
    // console.log("powered by satyam :",data);
    console.log("powered by satyam :",data);

    return (
        <div className="p-10 bg-[#1C1C1C] h-screen">
            <Header data= {data} />
            <TaskNumber data = {data} />
            <TaskList data = {data} />
        </div>
    )
}

export default EmployeeDashBoard;