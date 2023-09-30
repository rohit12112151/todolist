import React, { useEffect } from 'react';
import TaskIndicator from './TaskIndicator';

// import TaskContext from '../../context/TaskContext';
import CreateTask from './createTask/CreateTask';
import { Outlet } from 'react-router-dom';
import './Task/task.css'
// import { NavLink } from 'react-router-dom';
import  { useContext } from 'react';
// import Task from './Task/Task';
import { useSortContext } from '../context/SortContext';
// import TaskContext from '../context/TaskContext';
// import moment from "moment"
function Layout({task}) {
    // const { dispatch } = useContext(TaskContext);
    // const sortbypriority=(task)=>{
    //     <NavLink to="/priority">Completed</NavLink>

        
    // }

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

    const sortbytime=()=>{console.log("start");}
    useEffect(()=>{
        // task.map((item)=>{console.log(item.priority)});
        // console.log(task.description)
        console.log("start effect")
    },[task]);
    return (
        <div>
            <div className='flex flex-col md:flex-row md:justify-between'>
                <CreateTask />
                <div className='task-container w-auto mx-5 md:w-1/3 mt-3'>
                    <div className='outlet'>
                    <div class="dropdown">
                        <span>Sort by</span>
                            <div class="dropdown-content">
                            <div className='flex flex-row justify-between '>
                                <div id='priority' onClick={handleSortByPriority} >Priority</div>
                                {sortingEnabled && <div > ✔️</div>}
                                </div>
                            </div>
                       </div>
                       {/* <NavLink to="/priority">priority</NavLink> */}
                        <Outlet />
                    </div>
                    <div className='indicator'>
                        <TaskIndicator />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Layout;