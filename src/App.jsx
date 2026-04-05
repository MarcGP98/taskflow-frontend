import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateTask from "./pages/CreateTask";
import EditTask from "./pages/EditTask";
import TaskDetail from "./pages/TaskDetail";
import ThemeProvider, { ThemeContext } from "./context/ThemeContext";
import "./App.css";

function AppContent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <Router>
        <Navbar />
        <div className="container">
          <button onClick={toggleTheme} className="theme-btn">
            {theme === "light" ? "Modo oscuro" : "Modo claro"}
          </button>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateTask />} />
            <Route path="/edit/:id" element={<EditTask />} />
            <Route path="/task/:id" element={<TaskDetail />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;