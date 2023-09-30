import React from 'react'
import Task from './Task/Task';
import { useContext } from 'react';
import TaskContext from '../context/TaskContext';

const Priority = () => {
    const { tasks } = useContext(TaskContext);
    var task1=tasks.filter((t)=>t.prority=="Low");
    var task2=tasks.filter((t)=>t.prority=="Medium");
    var task3=tasks.filter((t)=>t.prority=="High");
    console.log(tasks);
  return (
    <div>
    {
        (tasks.length !==0) ? (
            {/* <>
            <>
           { task3.map((task, index) => {
                return (
                    <Task
                        key={index}
                        task={task}
                        id={index}
                    />
                )
            })}
            </>
            
            <>
           { task2.map((task, index) => {
                return (
                    <Task
                        key={index}
                        task={task}
                        id={index}
                    />
                )
            })}
            </>
            <>
           { task3.map((task, index) => {
                return (
                    <Task
                        key={index}
                        task={task}
                        id={index}
                    />
                )
            })}
            </>
            </> */}/

            tasks.map((task, index) => {
                return (
                    <Task
                        key={index}
                        task={task}
                        id={index}
                    />
                )
            })

        
        ) : (
            <h1>No Task Found</h1>
        )
    }
</div>
  )
}

export default Priority
