import axios from "axios";
import React, { use, useState } from "react";

function TaskCard({
  id,
  title,
  desc,
  status,
  due,
  handleDelete,
  handleStatusUpdate,
}) {
  const [isUpdateClicked, setIsUpdateClicked] = useState(false);
  const [newStatus, setNewStatus] = useState(status);

  const [isDeleting, setIsDeleting] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);


  const handleDeleteClick = async () => {
    try {
      setIsDeleting(true);
      await handleDelete();
    } finally {
      setIsDeleting(false);
    }
  };

  const handleStatusForm = async (e) => {
    e.preventDefault();
    try {
      setIsUpdating(true);
      await handleStatusUpdate(newStatus);
      setIsUpdateClicked(false);
    } finally {
      setIsUpdating(false);
    }
  };



  

  return (
    <div className="task-card">
      <p>
        <span className="task-label">Title:</span> {title}
      </p>
      <p>
        <span className="task-label">Task Id:</span> {id}
      </p>
      <p>
        <span className="task-label">Desc:</span> {desc}
      </p>
      <p>
        <span className="task-label">Status:</span> {status}
      </p>
      <p>
        <span className="task-label">Due:</span> {due}
      </p>
      <button disabled={isDeleting} onClick={handleDeleteClick} className="btn delete">
        {isDeleting ? 'Deleting...' : 'Delete Task'}
      </button>
      <button
        onClick={() => setIsUpdateClicked(!isUpdateClicked)}
        className="btn update"
      >
        {isUpdateClicked ? "Close" : "Update Status"}
      </button>

      {isUpdateClicked ? (
        <form onSubmit={handleStatusForm}>
          <select
            className="status-update-select"
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
          >
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          <button disabled={isUpdating} className="btn submit" type="submit">
            {isUpdating ? 'Updating...' : 'Update'}
          </button>
        </form>
      ) : null}
    </div>
  );
}

export default TaskCard;
