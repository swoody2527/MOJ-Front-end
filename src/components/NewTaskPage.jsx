import React, { useState } from 'react'
import { Link } from "react-router";
import '../App.css'
import axios from 'axios';

function NewTaskPage() {

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [status, setStatus] = useState('')
    const [date, setDate] = useState('')

    const [success, setSuccess] = useState(null)



    const handleNewTaskSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://127.0.0.1:8000/task', {title: title, desc: desc, status: status, due: date})
            setSuccess(true)
            setTitle('')
            setDesc('')
            setStatus('')
            setDate('')
        } catch (err) {
            console.log(err)
        }

    }

  return (
    <>
    <Link to="/"><button>Back</button></Link>
    <div className="form-container">
      <h1>New Task</h1>
      {success ? <h2>Task Submitted!</h2> : null}
      <form onSubmit={handleNewTaskSubmit}>
        <div className="task-option">
          <label htmlFor="title">Title:</label>
          <input onChange={(e) => setTitle(e.target.value)} id="title" name="title" type="text" value={title} />
        </div>

        <div className="task-option">
          <label htmlFor="description">Description (Optional):</label>
          <input onChange={(e) => setDesc(e.target.value)} id="description" name="description" type="text" value={desc} />
        </div>

        <div className="task-option">
          <label htmlFor="status">Status:</label>
          <select onChange={(e) => setStatus(e.target.value) } value={status}>
            <option value='todo'>To Do</option>
            <option value='in-progress'>In Progress</option>
            <option value='completed'>Completed</option>
          </select>
        </div>

        <div className="task-option">
          <label htmlFor="due">Due:</label>
          <input onChange={(e) => setDate(e.target.value)} id="due" name="due" type="date" value={date} />
        </div>

        <button type="submit" className="submit-btn">Save Task</button>
      </form>
    </div>
  </>
  )
}

export default NewTaskPage
