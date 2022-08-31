import React from 'react'
import './Filters.css'
import '../../../../../style/MyButton.css'

export const Filters = ({filterTasks}) => {

    return (
        <div className='container-btn'>
            <button className='myBtn' onClick={() => filterTasks('all')} >All</button>
            <button className='myBtn' onClick={() => filterTasks('active')}>Active</button>
            <button className='myBtn' onClick={() => filterTasks('completed')}>Completed</button>
        </div>
    )
}