import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTaskById, updateTask } from "../services/taskService";
import TaskForm from "../components/TaskForm";

function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTask = async () => {
      try {
        const data = await getTaskById(id);
        setTask(data);
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadTask();
  }, [id]);

  const handleUpdate = async (formData) => {
    try {
      await updateTask(id, formData);
      alert("Tarea actualizada correctamente");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  if (loading) return <p>Cargando tarea...</p>;

  return (
    <div>
      <h2>Editar tarea</h2>
      <TaskForm
        onSubmit={handleUpdate}
        initialData={task}
        buttonText="Guardar cambios"
      />
    </div>
  );
}

export default EditTask;