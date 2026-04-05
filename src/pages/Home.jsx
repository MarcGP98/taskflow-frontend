import React, { useEffect, useState } from "react";
import {
  getTasks,
  deleteTask,
  toggleTaskCompleted,
} from "../services/taskService";
import TaskList from "../components/TaskList";
import FilterBar from "../components/FilterBar";
import SearchBar from "../components/SearchBar";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const loadTasks = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("¿Seguro que quieres eliminar esta tarea?");
    if (!confirmDelete) return;

    try {
      await deleteTask(id);
      setMessage("Tarea eliminada correctamente");
      loadTasks();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleToggle = async (id) => {
    try {
      await toggleTaskCompleted(id);
      setMessage("Estado actualizado correctamente");
      loadTasks();
    } catch (error) {
      setError(error.message);
    }
  };

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "pending") return !task.completed;
      return true;
    })
    .filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div>
      <h2>Lista de tareas</h2>

      <div className="toolbar">
        <SearchBar search={search} setSearch={setSearch} />
        <FilterBar filter={filter} setFilter={setFilter} />
      </div>

      {message && <p className="success">{message}</p>}
      {loading && <p>Cargando tareas...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <TaskList
          tasks={filteredTasks}
          onDelete={handleDelete}
          onToggle={handleToggle}
        />
      )}
    </div>
  );
}

export default Home;