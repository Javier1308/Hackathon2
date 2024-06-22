import axios from 'axios';


const API_BASE_URL = 'https://cepnq6rjbk.execute-api.us-east-1.amazonaws.com';

export const registerUser = (data) => {
  return axios.post(`${API_BASE_URL}/auth/register`, { data });
};

export const loginUser = (username, password) => {
  return axios.post(`${API_BASE_URL}/auth/login`, { username, password });
};

export const createItem = (itemData) => {
  const token = localStorage.getItem('token');
  return axios.post(`${API_BASE_URL}/items`, itemData, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const editItem = (itemData) => {
  const token = localStorage.getItem('token');
  return axios.put(`${API_BASE_URL}/items`, itemData, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const deleteItem = (itemId) => {
  const token = localStorage.getItem('token');
  return axios.delete(`${API_BASE_URL}/item/${itemId}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};


export const getItem = (itemId) => {
  const token = localStorage.getItem('token');
  return axios.get(`${API_BASE_URL}/item/${itemId}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};


export const getItems = (limit, lastKey) => {
  return axios.get(`${API_BASE_URL}/items`, {
    params: {
      limit: limit,
      lastKey: lastKey
    }
  });
};

export const addToCart = (itemId, userId) => {
  const token = localStorage.getItem('token');
  return axios.post(`${API_BASE_URL}/cart`, { itemId, userId }, {
    headers: { Authorization: `Bearer ${token}` }
  });
};


export const deleteFromCart = (itemId, userId) => {
  const token = localStorage.getItem('token');
  return axios.delete(`${API_BASE_URL}/cart`, {
    data: { itemId, userId },
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const getCart = (userId) => {
  const token = localStorage.getItem('token');
  return axios.get(`${API_BASE_URL}/cart/${userId}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const buyCart = (userId) => {
  const token = localStorage.getItem('token');
  return axios.post(`${API_BASE_URL}/buy`, { userId }, {
    headers: { Authorization: `Bearer ${token}` }
  });
};
