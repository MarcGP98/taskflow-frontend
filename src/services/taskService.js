const API_URL = import.meta.env.VITE_API_URL;

export const getTasks = async () => {
  const response = await fetch(`${API_URL}/tasks`);
  if (!response.ok) {
    throw new Error("Error al obtener las tareas");
  }
  return response.json();
};

export const getTaskById = async (id) => {
  const response = await fetch(`${API_URL}/tasks/${id}`);
  if (!response.ok) {
    throw new Error("Error al obtener la tarea");
  }
  return response.json();
};

export const createTask = async (taskData) => {
  const response = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(taskData)
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error al crear la tarea");
  }

  return data;
};

export const updateTask = async (id, taskData) => {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(taskData)
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error al actualizar la tarea");
  }

  return data;
};

export const deleteTask = async (id) => {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: "DELETE"
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error al eliminar la tarea");
  }

  return data;
};

export const toggleTaskCompleted = async (id) => {
  const response = await fetch(`${API_URL}/tasks/${id}/completed`, {
    method: "PATCH"
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error al cambiar el estado");
  }

  return data;
};