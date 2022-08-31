import React from 'react'
import { Counter } from './components/Couter/Counter'
import { Filters } from './components/Filters/Filters'
import './SideBar.css'

export const SideBar = ({clearAllTasks, visibleClearAll, filterTasks, count}) => {
    return (
        <div className='container'>
            <Counter count={count}/>
            <Filters filterTasks={filterTasks}/>
            {visibleClearAll && <button className='myBtn' onClick={clearAllTasks} >Clear All</button>}
        </div>
    )
}
