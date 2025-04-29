import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const AllTask = ({userData}) => {

   
    

    return (
        <div className="bg-[#1c1c1c] p-5 mt-5 rounded h-55  overflow-auto">

            <div className="bg-red-400 mb-4 py-2 px-4 flex justify-between rounded">
               <h2 className="w-1/5 text-lg font-medium bg-red-600">Employee Name</h2>
               <h3 className="w-1/5 text-lg font-medium bg-red-600">New Task</h3>
               <h5 className="w-1/5 text-lg font-medium bg-red-600">Active Task</h5>
               <h5 className="w-1/5 text-lg font-medium bg-red-600">Completed</h5>
               <h5 className="w-1/5  text-lg font-medium bg-red-600">Failed</h5>
            </div>

            <div className="h-[80%] overflow-auto">
               {userData.map(function (elem,idx) {
                    return  <div key={idx} className="bg-black-100 border-2 mb-4 py-2 px-4 flex justify-between rounded">
                            <h2 className="w-1/5 text-lg font-medium text-purple-600">{elem.firstName} </h2>
                            <h3 className="w-1/5 text-lg font-medium text-blue-600">{elem.taskCount.newTask}</h3>
                            <h5 className="w-1/5 text-lg font-medium text-green-600">{elem.taskCount.active}</h5>
                            <h5 className="w-1/5 text-lg font-medium text-yellow-500">{elem.taskCount.completed}</h5>
                            <h5 className="w-1/5 text-lg font-medium text-red-600">{elem.taskCount.failed}</h5>
                          </div>
                })}
            </div>

       
        </div>
    )
}

export default AllTask;