import React from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';

import { useSortContext } from '../context/SortContext';

function TaskIndicator() {
    const { sortBy, setSortBy, sortingEnabled, setSortingEnabled } = useSortContext();
    const toggle=()=>{
        setSortingEnabled(!sortingEnabled);
    }

    return ( 
        <div className=' flex-grow'>
            <nav>
                <ul className='flex gap-3 justify-between p-3 bg-slate-400 rounded-lg shadow-2xl'>
                    <li>
                        <NavLink to="/" onClick={toggle}>All Task</NavLink>
                    </li>
                    <li>
                        <NavLink to="/active" onClick={toggle}>Active</NavLink>
                    </li>
                    <li>
                        <NavLink to="/completed" onClick={toggle}>Completed</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
     );
}

export default TaskIndicator;