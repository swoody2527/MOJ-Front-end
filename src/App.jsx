import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import TaskCard from './components/TaskCard'

function App() {

  const example_tasks = [
    {
      title: 'Cool Task 3',
      desc: 'Cool Desc',
      status: 'todo',
      due: '2025-02-21'
    },
    {
      title: 'Cool Task 3',
      desc: 'Cool Desc',
      status: 'todo',
      due: '2025-02-21'
    },
    {
      title: 'Cool Task 3',
      desc: 'Cool Desc',
      status: 'todo',
      due: '2025-02-21'
    },
    {
      title: 'Cool Task 3',
      desc: 'Cool Desc',
      status: 'todo',
      due: '2025-02-21'
    },
  ]


  return (
    <>
    <div className='header'>MOJ Task Manager</div>
    <div className='tasks-container'>
      {example_tasks.map((task, index) => (
        <TaskCard key={index} {...task} ></TaskCard>
      ))}

    </div>
    </>
  )
}

export default App
