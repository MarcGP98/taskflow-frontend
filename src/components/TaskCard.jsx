import React from "react";
import { Link } from "react-router-dom";

function TaskCard({ task, onDelete, onToggle }) {
  return (
    <div className={`task-card ${task.completed ? "completed" : ""}`}>
      <h3>{task.title}</h3>
      <p>{task.description || "Sin descripción"}</p>
      <p>
          <strong>Prioridad:</strong>{" "}
            <span className={`badge ${task.priority}`}>
                {task.priority}
            </span>
      </p>
      <p><strong>Categoría:</strong> {task.category}</p>
      <p><strong>Fecha límite:</strong> {task.dueDate || "Sin fecha"}</p>
      <p><strong>Estado:</strong> {task.completed ? "Completada" : "Pendiente"}</p>

      <div className="task-actions">
        <button onClick={() => onToggle(task._id)}>
          {task.completed ? "Desmarcar" : "Completar"}
        </button>

        <Link to={`/task/${task._id}`} className="task-link">Ver</Link>
        <Link to={`/edit/${task._id}`} className="task-link edit">Editar</Link>

        <button onClick={() => onDelete(task._id)}>Eliminar</button>
      </div>
    </div>
  );
}

export default TaskCard;