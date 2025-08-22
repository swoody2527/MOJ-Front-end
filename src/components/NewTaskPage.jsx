import React from 'react'
import { Link } from "react-router";
import '../App.css'

function NewTaskPage() {
  return (
    <>
    <Link to="/"><button>Back</button></Link>
    <div className="form-container">
      <h1>New Task</h1>
      <form>
        <div className="task-option">
          <label htmlFor="title">Title:</label>
          <input id="title" name="title" type="text" />
        </div>

        <div className="task-option">
          <label htmlFor="description">Description (Optional):</label>
          <input id="description" name="description" type="text" />
        </div>

        <div className="task-option">
          <label htmlFor="status">Status:</label>
          <select>
            <option>To Do</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </div>

        <div className="task-option">
          <label htmlFor="due">Due:</label>
          <input id="due" name="due" type="date" />
        </div>

        <button type="submit" className="submit-btn">Save Task</button>
      </form>
    </div>
  </>
  )
}

export default NewTaskPage
