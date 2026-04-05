import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTaskById } from "../services/taskService";

function TaskDetail() {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTask = async () => {
      try {
        const data = await getTaskById(id);
        setTask(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadTask();
  }, [id]);

  if (loading) return <p>Cargando detalle...</p>;
  if (!task) return <p>No se encontró la tarea</p>;

  return (
    <div className="task-detail">
      <h2>{task.title}</h2>
      <p><strong>Descripción:</strong> {task.description || "Sin descripción"}</p>
      <p><strong>Prioridad:</strong> {task.priority}</p>
      <p><strong>Categoría:</strong> {task.category}</p>
      <p><strong>Fecha límite:</strong> {task.dueDate || "Sin fecha"}</p>
      <p><strong>Estado:</strong> {task.completed ? "Completada" : "Pendiente"}</p>
    </div>
  );
}

export default TaskDetail;