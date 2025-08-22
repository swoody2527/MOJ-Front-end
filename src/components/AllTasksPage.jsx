import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import TaskCard from './TaskCard';
import { Link } from 'react-router';
import '../App.css'
function AllTasksPage() {
  const [allTasks, setAllTasks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [err, setErr] = useState('')



  const fetchTasks = async () => {
    setIsLoading(true)
    try {
      const res = await axios.get("http://127.0.0.1:8000/tasks")
      setAllTasks(res.data)
      setIsLoading(false)
    } catch (err) {
      console.error("Error fetching tasks:", err)
    }
  };

  useEffect(() => {
    
    fetchTasks()
  }, [])


  const handleTaskDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/task/${id}`)
      setAllTasks(prev => prev.filter((task) => task.id !== id))
    } catch (err) {
      console.log(err)
    }

  }

  const handleTaskStatusUpdate = async (id, newStatus) => {
    try {
      await axios.patch(`http://127.0.0.1:8000/task/${id}`, {status: newStatus})
      fetchTasks()
    } catch (err) {
      console.log(err)
    }

  }
  return (
    <>
      <Link to="/add-task"><button className="btn">Add New Task</button></Link>
      <Link to="/search-task"><button className="btn">Search Task</button></Link>
  
      <div className="tasks-container">
        <div className="tasks-header" aria-live="polite">
          <h1>All Tasks</h1>
          {isLoading ? (
            <p className="subtle">Loading tasks…</p>
          ) : err ? (
            <p className="err-msg">Error fetching tasks.</p>
          ) : allTasks.length === 0 ? (
            <p className="subtle">There are currently no tasks.</p>
          ) : null}
        </div>
  
        {!isLoading && !err && allTasks.length > 0 ? (
          allTasks.map((task) => (
            <TaskCard
              key={task.id}
              {...task}
              handleDelete={() => handleTaskDelete(task.id)}
              handleStatusUpdate={(newStatus) => handleTaskStatusUpdate(task.id, newStatus)}
            />
          ))
        ) : null}
      </div>
    </>
  );
}
export default AllTasksPage
