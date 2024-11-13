// src/services/AuthService.js
import apiConfig from "../apiConfig";
import axios from "axios";

const AuthService = {
  login: async (username, password) => {
    try {
      const response = await axios.post(`${apiConfig.baseUrl}/auth/login`, { username, password });
      localStorage.setItem("token", response.data.token); // Save JWT token
      return response.data;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  },

  register: async (username, password, email) => {
    try {
      const response = await axios.post(`${apiConfig.baseUrl}/auth/register`, { username, password, email });
      return response.data;
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem("token");
  },
};

export default AuthService;
