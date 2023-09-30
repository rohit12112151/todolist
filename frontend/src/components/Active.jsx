import React from 'react';
import Task from './Task/Task';
import { useContext } from 'react';
import TaskContext from '../context/TaskContext';
import { useSortContext } from '../context/SortContext';

function Active() {

    const { tasks } = useContext(TaskContext);
    const { sortBy, setSortBy, sortingEnabled, setSortingEnabled } = useSortContext();
     
var sortedTasks=tasks;
if(sortingEnabled)
{
const sortedTaskslow=  tasks.filter((a)=>a.priority==="Low" );
const sortedTasksmid= tasks.filter((a)=>a.priority==="Medium" );
const sortedTaskshigh= tasks.filter((a)=>a.priority==="High" );
sortedTasks = [...sortedTaskshigh, ...sortedTasksmid, ...sortedTaskslow];


}
    return ( 
        <div>
        {
            (sortedTasks.length !==0) ? (
                sortedTasks.map((task, index) => {
                    return (
                        !task.completed && <Task
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
     );
}

export default Active;