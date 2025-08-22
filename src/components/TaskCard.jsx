import axios from 'axios'
import React, { use, useState } from 'react'

function TaskCard({id, title, desc, status, due, handleDelete, handleStatusUpdate}) {
    const [isUpdateClicked, setIsUpdateClicked] = useState(false)
    const [newStatus, setNewStatus] = useState(status)

    const handleStatusForm = (e) => {
        e.preventDefault()
        handleStatusUpdate(newStatus)
    }

  return (
    <div className='task-card'>
        <p>Title: {title}</p>
        <p>Task Id: {id}</p>
        <p>Desc: {desc}</p>
        <p>Status: {status}</p>
        <p>Due: {due}</p>
        <button onClick={handleDelete} className='delete-btn'>Delete Task</button>
        <button onClick={() => setIsUpdateClicked(!isUpdateClicked)} className='update-btn'>Update Status</button>
        
        {isUpdateClicked ?
        <form onSubmit={handleStatusForm}>
            <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
                <option value='todo'>To Do</option>
                <option value='in-progress'>In Progress</option>
                <option value='completed'>Completed</option>
            </select>
            <button className='submit-btn' type='submit'>Submit</button>
        </form>
        : null}
    </div>
  )
}

export default TaskCard
