import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
});

export const registerUser = (data: any) => API.post("/auth/register", data);
export const loginUser = (data: any) => API.post("/auth/login", data);


export const getLists = async (token: string) =>
  API.get("/lists/get", { headers: { Authorization: `Bearer ${token}` } });

export const getListById = async (id: string, token: string) =>
  API.get(`/lists/getbyid/${id}`, { headers: { Authorization: `Bearer ${token}` } });

export const createList = async (data: any, token: string) =>
  API.post("/lists/create", data, { headers: { Authorization: `Bearer ${token}` } });

export const updateList = async (id: string, data: any, token: string) =>
  API.put(`/lists/update/${id}`, data, { headers: { Authorization: `Bearer ${token}` } });

export const deleteList = async (id: string, token: string) =>
  API.delete(`/lists/delete/${id}`, { headers: { Authorization: `Bearer ${token}` } });