import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AllTasksPage from "./components/AllTasksPage";
import NewTaskPage from "./components/NewTaskPage";
import SingleTaskPage from "./components/SingleTaskPage";

function App() {
  return (
    <>
      <div className="header">MOJ Task Manager</div>
      <div className="main-container">
      
        <Routes>
          <Route path="/" element={<AllTasksPage />} />
          <Route path="/add-task" element={<NewTaskPage />} />
          <Route path="/search-task" element={<SingleTaskPage />} />
        </Routes>
      </div>
      </>
  );
}

export default App;
