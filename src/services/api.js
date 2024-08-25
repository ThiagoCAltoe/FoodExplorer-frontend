import axios from "axios";

export const api = axios.create({
  baseURL: "https://foodexplorer-backend-tdt6.onrender.com",
});
