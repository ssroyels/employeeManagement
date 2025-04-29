import React from "react";

const CompleteTask = ({data}) => {

    return(
        <div className="h-full flex-shrink-0 p-5 w-[300px] bg-orange-400 rounded-xl">
          <div className="flex justify-between items-center">
            <h3 className="bg-red-600 px-3 py-1 text-sm font-semibold  rounded">Completed</h3>
            <h4 className="text-sm font-bold">{data.taskDate}</h4>
          </div>
           <h2 className="mt-5 font-semibold text-2xl">{data.taskTitle}</h2>
           <p className="text-sm  mt-2">{data.taskDescription}</p>
            <div className="mt-2">
                <button className="w-full bg-green-500 mt-2 px-2 py-1 rounded-lg">Complete</button>
            </div>
        </div>
    )
}

export default CompleteTask