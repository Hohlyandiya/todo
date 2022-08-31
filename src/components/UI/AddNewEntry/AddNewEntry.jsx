import React, { useState } from 'react'
import './AddNewEntry.css'

export const AddNewEntry = ({visibleList, toggleVisibleList, visibleButton, addItem}) => {

    const [newEntry, setNewEntry] = useState('');

    function addNewEntry (){
        addItem(newEntry)
        setNewEntry('')
    }

    const handleChangeInput = (e) => {
        const value = e.target.value;
        setNewEntry(value);
    } 

    return (
        <div className="todo-container">
            <div className="todo-content">
                {visibleButton && (
                <div 
                    onClick={toggleVisibleList} 
                    className={`expand ${!visibleList && 'expand-visible'}`}>
                </div>)}
                <input 
                    value={newEntry} 
                    onChange={handleChangeInput}
                    className="todo-text__add" 
                    placeholder="Adding a new task" 
                    type="text"/>
                <div onClick={addNewEntry} className="add"></div>
            </div>
        </div>
    )
}