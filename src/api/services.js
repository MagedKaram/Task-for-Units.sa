import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:4000",
});

// Add token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const login = (credentials) => api.post("/login", credentials);
export const getStats = () => api.get("/stats");
export const getProducts = (query = "") => api.get(`/products${query}`);
export const getProductById = (id) => api.get(`/products/${id}`);
export const getStores = () => api.get("/stores");
export const getSchedule = () => api.get("/schedule");
export const getTransactionActivity = () => api.get("/transactionActivity");
export const getSalePerformance = () => api.get("/salePerformance");
export const getProductStatics = () => api.get("/productStatics");
export const getOrdersByTime = () => api.get("/ordersByTime");
export const getConversionRate = () => api.get("/conversionRate");
export const updateProduct = (id, data) => api.put(`/products/${id}`, data);

export default api;
