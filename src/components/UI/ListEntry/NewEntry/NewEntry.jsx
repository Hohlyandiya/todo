import React from 'react'
import './NewEntry.css'

export const NewEntry = ({label, completed, index, handleRemoveItem, handleToggleItem, id}) => {

    return (
        <div 
        draggable='true' 
        className='new-entry-container'>
            <div className="new-entry-content" >
                <div className="new-entry-content" onClick={handleToggleItem}>
                    <input className="custom-checkbox" checked={completed} type="checkbox"/>
                    <label for="false-checkbox"></label>
                    <div className={`new-entry ${completed && 'cross'}`}><span>{index}.</span><span>{label}</span></div>
                </div>
                <div onClick={handleRemoveItem} className="delete"></div>
            </div>
        </div>
    )
}
