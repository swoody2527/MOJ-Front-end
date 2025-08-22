import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { data, Route, Routes } from 'react-router'
import TaskCard from './components/TaskCard'
import axios from 'axios'

function App() {
  const [allTasks, setAllTasks] = useState([])


  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/tasks")
      setAllTasks(res.data)
    } catch (err) {
      console.error("Error fetching tasks:", err)
    }
  };



  useEffect(() => {
    
    fetchTasks()
  }, [allTasks])


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
    <div className='header'>MOJ Task Manager</div>
    <div className='tasks-container'>
      {allTasks.map((task, index) => (
        <TaskCard key={index} {...task}
                  handleDelete={() => handleTaskDelete(task.id)}
                  handleStatusUpdate={(newStatus) => handleTaskStatusUpdate(task.id, newStatus)}
        ></TaskCard>
      ))}

    </div>
    </>
  )
}

export default App
