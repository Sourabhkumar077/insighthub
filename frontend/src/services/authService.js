import axios from "axios"; //using axios to make http requests

const API_URL = "http://localhost:5000/api/auth";

// signup request
export const signup = async (userData) => {
  const res = await axios.post(`${API_URL}/signup`, userData);
  return res.data; // token + user
};

// login request
export const login = async (userData) => {
  const res = await axios.post(`${API_URL}/login`, userData);
  return res.data; // token + user
};

// get logged in user (verify token)
export const getMe = async (token) => {
  const res = await axios.get(`${API_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
