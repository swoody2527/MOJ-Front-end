import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import TaskCard from './components/TaskCard'
import axios from 'axios'

function App() {
  const [allTasks, setAllTasks] = useState([])


  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/tasks");
        setAllTasks(res.data)
      } catch (err) {
        console.error("Error fetching tasks:", err);
      }
    };
    fetchTasks()
  }, [])


  return (
    <>
    <div className='header'>MOJ Task Manager</div>
    <div className='tasks-container'>
      {allTasks.map((task, index) => (
        <TaskCard key={index} {...task} ></TaskCard>
      ))}

    </div>
    </>
  )
}

export default App
