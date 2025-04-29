import React from "react";

const AcceptTask = ({data}) => {

    return(
 
        <div className="h-full flex-shrink-0 p-5 w-[300px] bg-green-300 rounded-xl">
                <div className="flex justify-between items-center">
                    <h3 className="bg-red-600 px-3 py-1 text-sm font-semibold rounded">Active</h3>
                    <h4 className="text-sm font-bold"> {data.taskDate} </h4>
                </div>
                <h2 className="mt-5 font-semibold text-2xl"> {data.taskTitle} </h2>
                <p className="text-sm  mt-2">{data.taskDescription}</p>
                <div className="flex justify-between mt-4">
                    <button className="bg-green-500 py-1 px-1 text-semibold rounded">Mark as Completed</button>
                    <button className="bg-red-500 py-1 px-1 text-semibold rounded">Mark as Failed</button>
                </div>
        </div>
  
    )
}

export default AcceptTask;