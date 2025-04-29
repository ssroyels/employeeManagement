import React  from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({data}) => {
    console.log('powered by akash :',data);
    return(
        <div id="tasklist" className="h-[55%] overflow-x-auto w-full flex items-center justify-around mx-10 gap-5 flex-nowrap  py-5 mt-10">
            {/* <AcceptTask />
            <NewTask />
            <CompleteTask  />
            <FailedTask /> */}

            {data.tasks.map((elem,idx) => {
                
                if(elem.active) {
                    return <AcceptTask key = {idx} data = {elem} />
                }
                if(elem.newTask) {
                    return <NewTask key = {idx} data = {elem}/>
                }
                if(elem.completed) {
                    return <CompleteTask key = {idx} data = {elem}/>
                }
                if(elem.failed) {
                    return <FailedTask key = {idx} data = {elem}/>
                }
            })}
        </div>
    )
}

export default TaskList;