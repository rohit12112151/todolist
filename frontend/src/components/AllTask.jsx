// import React from 'react';
// import Task from './Task/Task';
// import { useContext } from 'react';
// import TaskContext from '../context/TaskContext';
// function AllTask() {
//     const { tasks } = useContext(TaskContext);
//     return (
//         <div>
//             {
//                 (tasks.length !==0) ? (
//                     tasks.map((task, index) => {
//                         return (
//                             <Task
//                                 key={index}
//                                 task={task}
//                                 id={index}
//                             />
//                         )
//                     })
//                 ) : (
//                     <h1>No Task Found</h1>
//                 )
//             }
//         </div>
//     );
// }

// export default AllTask;



import React, { useContext } from 'react';
import Task from './Task/Task';
import { useSortContext } from '../context/SortContext';
import TaskContext from '../context/TaskContext';

function AllTask() {
  const { tasks } = useContext(TaskContext);
  const { sortBy, setSortBy, sortingEnabled, setSortingEnabled } = useSortContext();

  const handleSortByPriority = () => {
    setSortBy('priority');
    setSortingEnabled(!sortingEnabled);
  };

  const handleSortByDueDate = () => {
    setSortBy('dueDate'); // Modify to use your actual due date property
    setSortingEnabled(true);
  };

  const handleToggleSorting = () => {
    setSortingEnabled(!sortingEnabled);
  };

  
var sortedTasks=tasks;
if(sortingEnabled)
{
const sortedTaskslow=  tasks.filter((a)=>a.priority==="Low" );
const sortedTasksmid= tasks.filter((a)=>a.priority==="Medium" );
const sortedTaskshigh= tasks.filter((a)=>a.priority==="High" );
sortedTasks = [...sortedTaskshigh, ...sortedTasksmid, ...sortedTaskslow];


}
//   console.log(tasks);
//   console.log(sortedTasks);

console.log(sortedTasks);

// console.log(sorted);

  return (
    <div>
      <div>
        {/* <button onClick={handleSortByPriority}>Sort</button> */}
        {/* <button onClick={handleSortByDueDate}>Sort by Due Date</button> */}
        {/* <button onClick={handleToggleSorting}>
          {sortingEnabled ? 'Disable Sorting' : 'Enable Sorting'}
        </button> */}
      </div>
      
      {sortedTasks.length !== 0 ? (
        sortedTasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            id={index}
          />
        ))
      ) : (
        <h1>No Task Found</h1>
      )}
    </div>
  );
}

export default AllTask;
