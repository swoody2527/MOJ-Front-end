import axios from 'axios'
import React from 'react'

function TaskCard({id, title, desc, status, due}) {

  return (
    <div className='task-card'>
        <p>Title: {title}</p>
        <p>Task Id: {id}</p>
        <p>Desc: {desc}</p>
        <p>Status: {status}</p>
        <p>Due: {due}</p>
        <button className='delete-btn'>Delete Task</button>
        <button className='update-btn'>Update Status</button>
    </div>
  )
}

export default TaskCard
