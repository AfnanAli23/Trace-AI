import axios from "./axios";

export const createBug = (data) => axios.post("/bugs", data);

export const getBugs = () => axios.get("/bugs");

export const getBugById = (id) => axios.get(`/bugs/${id}`);

export const updateBug = (id, data) => axios.put(`/bugs/${id}`, data);

export const deleteBug = (id) => axios.delete(`/bugs/${id}`);
