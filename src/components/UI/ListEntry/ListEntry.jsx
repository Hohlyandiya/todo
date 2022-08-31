import React from 'react'
import { NewEntry } from './NewEntry'
import '../../../style/LackOfCases.css'

export const ListEntry = ({value, removeItem, toggleItem}) => {
    return (
        <div>
            {value.length ?
            value.map((post, index) => {
                return (
                    <NewEntry 
                        handleToggleItem={() => toggleItem(post.id)}
                        handleRemoveItem={() => removeItem(post.id)} 
                        index={index + 1} 
                        {...post} 
                        key={post.id}
                        id={post.id}
                    />
                )
            }) : <div className='lack-of-cases'>No active tasks</div>}
        </div>
    )
}
