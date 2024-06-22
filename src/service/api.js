import axios from 'axios';

const API_BASE_URL = 'https://cepnq6rjbk.execute-api.us-east-1.amazonaws.com';

export const registerUser = (data) => {
  return axios.post(`${API_BASE_URL}/auth/register`, data)
    .then(response => response.data)
    .catch(error => {
      console.error('Error en registro:', error);
      throw error;
    });
};

export const loginUser = (username, password) => {
  return axios.post(`${API_BASE_URL}/auth/login`, { username, password })
    .then(response => response.data)
    .catch(error => {
      console.error('Error en login:', error);
      throw error;
    });
};

export const createItem = (itemData) => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('Token no disponible');
  return axios.post(`${API_BASE_URL}/items`, itemData, {
    headers: { Authorization: `Bearer ${token}` }
  })
  .then(response => response.data)
  .catch(error => {
    console.error('Error al crear item:', error);
    throw error;
  });
};

export const editItem = (itemData) => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('Token no disponible');
  return axios.put(`${API_BASE_URL}/items`, itemData, {
    headers: { Authorization: `Bearer ${token}` }
  })
  .then(response => response.data)
  .catch(error => {
    console.error('Error al editar item:', error);
    throw error;
  });
};

export const deleteItem = (itemId) => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('Token no disponible');
  return axios.delete(`${API_BASE_URL}/item/${itemId}`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  .then(response => response.data)
  .catch(error => {
    console.error('Error al eliminar item:', error);
    throw error;
  });
};

export const getItem = (itemId) => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('Token no disponible');
  return axios.get(`${API_BASE_URL}/item/${itemId}`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  .then(response => response.data)
  .catch(error => {
    console.error('Error al obtener item:', error);
    throw error;
  });
};

export const getItems = (limit, lastKey) => {
  return axios.get(`${API_BASE_URL}/items`, {
    params: { 
        limit: limit, 
        lastKey: lastKey 
    }
  })
  .then(response => response.data)
  .catch(error => {
    console.error('Error al obtener items:', error);
    throw error;
  });
};

export const addToCart = (itemId, userId) => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('Token no disponible');
  return axios.post(`${API_BASE_URL}/cart`, { itemId, userId }, {
    headers: { Authorization: `Bearer ${token}` }
  })
  .then(response => response.data)
  .catch(error => {
    console.error('Error al agregar al carrito:', error);
    throw error;
  });
};

export const deleteFromCart = (itemId, userId) => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('Token no disponible');
  return axios.delete(`${API_BASE_URL}/cart`, {
    data: { itemId, userId },
    headers: { Authorization: `Bearer ${token}` }
  })
  .then(response => response.data)
  .catch(error => {
    console.error('Error al eliminar del carrito:', error);
    throw error;
  });
};

export const getCart = (userId) => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('Token no disponible');
  return axios.get(`${API_BASE_URL}/cart/${userId}`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  .then(response => response.data)
  .catch(error => {
    console.error('Error al obtener carrito:', error);
    throw error;
  });
};

export const buyCart = (userId) => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('Token no disponible');
  return axios.post(`${API_BASE_URL}/buy`, { userId }, {
    headers: { Authorization: `Bearer ${token}` }
  })
  .then(response => response.data)
  .catch(error => {
    console.error('Error al comprar carrito:', error);
    throw error;
  });
};
