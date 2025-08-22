import { Link } from "react-router";
import "../App.css";
import { useState } from "react";
import axios from "axios";
import TaskCard from "./TaskCard";

function SingleTaskPage() {
  const [id, setId] = useState('');
  const [task, setTask] = useState('')


  const handleTaskSearch = async (e) => {
    e.preventDefault()
    try {
        const res = await axios.get(`http://127.0.0.1:8000/task/${id}`)
        setTask(res.data)
    } catch (err) {
        console.log(err)
    }
  }
  return (
    <>
      <Link to="/">
        <button className="btn back">Back</button>
      </Link>
      <div className="form-container">
        <h1>Search Task by Id</h1>
        <form onSubmit={handleTaskSearch}>
          <div className="task-option">
            <label htmlFor="task-id">Task Id:</label>
            <input
              onChange={(e) => setId(e.target.value)}
              id="task-id"
              name="task-id"
              type="numeric"
              value={id}
            />
          </div>
          <button type="submit" className="submit-btn">
            Search Task
          </button>
        </form>
      </div>
      {task ? <TaskCard {...task} ></TaskCard> : null}
    </>
  );
}

export default SingleTaskPage;
