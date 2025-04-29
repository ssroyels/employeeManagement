import React from "react";

const FailedTask = ({data}) => {

    return (
        <div className="h-full flex-shrink-0 p-5 w-[300px] bg-blue-300 rounded-xl">
            <div className="flex justify-between items-center">
              <h3 className="bg-red-600 px-3 py-1 text-sm font-semibold rounded">Failed</h3>
              <h4 className="text-sm font-bold">{data.taskDate}</h4>
            </div>
            <h2 className="mt-5 font-semibold text-2xl">{data.taskTitle}</h2>
            <p className="text-sm  mt-2">{data.taskDescription}</p>
            <div className="mt-4">
                <button className="w-full px-2 py-1 bg-white rounded-lg">Failed</button>

            </div>
        </div>

    )
}

export default FailedTask;