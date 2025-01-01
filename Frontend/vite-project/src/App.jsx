import React from "react"; // Import React at the top
import Home from "./Home/home";
import { Route, Routes } from "react-router-dom"; // Correct import for Routes
import Courses from "./course/Courses";
import Signup from "./components/Signup";

const App = () => {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
