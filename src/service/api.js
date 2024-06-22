import axios from "axios"
const BACKEND_URL = 'https://cepnq6rjbk.execute-api.us-east-1.amazonaws.com'

export const fetchLogin = async (email, password) => {
  const response = await axios.post(`${BACKEND_URL}/login`, { email, password });
  return response;
}

export const registerUser = async (data) => {
  return axios.post(`${API_BASE_URL}/auth/register`, { data });
};

export const loginUser = async (username, password) => {
  return axios.post(`${API_BASE_URL}/auth/login`, { username, password });
};

export const createItem = async (itemData) => {
  const token = localStorage.getItem('token');
  return axios.post(`${API_BASE_URL}/items`, itemData, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const editItem = async (itemData) => {
  const token = localStorage.getItem('token');
  return axios.put(`${API_BASE_URL}/items`, itemData, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const deleteItem = async (itemId) => {
  const token = localStorage.getItem('token');
  return axios.delete(`${API_BASE_URL}/item/${itemId}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const getItem = async (itemId) => {
  const token = localStorage.getItem('token');
  return axios.get(`${API_BASE_URL}/item/${itemId}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const getItems = async (limit, lastKey) => {
  return axios.get(`${API_BASE_URL}/items`, {
    params: {
      limit: limit,
      lastKey: lastKey
    }
  });
};

export const addToCart = async (itemId, userId) => {
  const token = localStorage.getItem('token');
  return axios.post(`${API_BASE_URL}/cart`, { itemId, userId }, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const deleteFromCart = async (itemId, userId) => {
  const token = localStorage.getItem('token');
  return axios.delete(`${API_BASE_URL}/cart`, {
    data: { itemId, userId },
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const getCart = async (userId) => {
  const token = localStorage.getItem('token');
  return axios.get(`${API_BASE_URL}/cart/${userId}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const buyCart = async (userId) => {
  const token = localStorage.getItem('token');
  return axios.post(`${API_BASE_URL}/buy`, { userId }, {
    headers: { Authorization: `Bearer ${token}` }
  });
};
