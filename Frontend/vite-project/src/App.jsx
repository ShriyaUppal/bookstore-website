import React from "react"; // Import React at the top
import Home from "./Home/home";
import { Navigate, Route, Routes } from "react-router-dom"; // Correct import for Routes
import Courses from "./course/Courses";
import Signup from "./components/Signup";
import { useAuth } from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
};

export default App;
