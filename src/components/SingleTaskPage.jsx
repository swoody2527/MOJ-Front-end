import { Link } from "react-router";
import "../App.css";
import { useState } from "react";
import axios from "axios";
import TaskCard from "./TaskCard";

function SingleTaskPage() {
  const [id, setId] = useState('');
  const [task, setTask] = useState('')
  const [err, setErr] = useState('')


  const handleTaskSearch = async (e) => {
    setErr('')
    e.preventDefault()
    try {
        const res = await axios.get(`http://127.0.0.1:8000/task/${id}`)
        setTask(res.data)
    } catch (err) {
        setTask('')
        setErr(err.response.data)
    }
  }
  return (
    <>
      <Link to="/">
        <button className="btn back">Back</button>
      </Link>
      <div className="form-container">
        <h1>Search Task by Id</h1>
        {err ? <p className="err-msg">{err.detail}</p> : null}
        <form onSubmit={handleTaskSearch}>
          <div className="task-option">
            <label htmlFor="task-id">Task Id:</label>
            <input
              onChange={(e) => setId(e.target.value)}
              id="task-id"
              name="task-id"
              type="number"
              value={id}
              required={true}
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
