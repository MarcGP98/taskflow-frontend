import React from "react";
import { useNavigate } from "react-router-dom";
import { createTask } from "../services/taskService";
import TaskForm from "../components/TaskForm";

function CreateTask() {
  const navigate = useNavigate();

  const handleCreate = async (formData) => {
    try {
      await createTask(formData);
      alert("Tarea creada correctamente");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Crear tarea</h2>
      <TaskForm onSubmit={handleCreate} buttonText="Crear tarea" />
    </div>
  );
}

export default CreateTask;