import axios from "./axios";

export const askAI = (data) => axios.post("/chat/ask", data);

export const getChatHistory = (bugId) => axios.get(`/chat/history/${bugId}`);
