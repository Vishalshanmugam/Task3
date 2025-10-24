import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/tasks"; // backend from Task1

export const getTasks = async () => {
  const res = await axios.get(API_BASE_URL);
  return res.data;
};

export const createTask = async (command: string) => {
  const res = await axios.post(API_BASE_URL, { command });
  return res.data;
};

export const deleteTask = async (id: string) => {
  const res = await axios.delete(`${API_BASE_URL}/${id}`);
  return res.data;
};

