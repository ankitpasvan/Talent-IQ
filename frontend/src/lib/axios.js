import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || (import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api"),
  withCredentials: true,
});

// Attach Clerk JWT to every outgoing request
axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      if (typeof window !== "undefined" && window.Clerk?.session) {
        const token = await window.Clerk.session.getToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
    } catch (error) {
      console.error("Error retrieving Clerk session token for request:", error);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;

