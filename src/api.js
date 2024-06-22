import axios from 'axios';

const BACKEND_URL = 'http://18.117.176.220';

export const fetchLogin = async (username, password) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/api/auth/login`, { username, password });
        localStorage.setItem('token', response.data.access_token);
        return response.data.token;
    }
    catch (error) { throw (error) }
}

export const fetchRegister = async (body) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/api/auth/register`, { ...body });
        return response.data;
    } catch (error) {
        throw (error);
    }
}

export const postProducts = async (body) => {
    const token = localStorage.getItem('token');
    console.log(token);
    console.log(body);
    try {
        const response = await axios.post(`${BACKEND_URL}/api/products`, { ...body }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response)
        return response.data;
    } catch (error) {
        throw (error);
    }
}

export const fetchProductsList = async (page, size) => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios.get(`${BACKEND_URL}/api/products`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                skip: page,
                limit: size
            }
        },)

        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const fetchProductById = async (id) => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios.get(`${BACKEND_URL}/api/products/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        throw (error);
    }
}

export const deleteProductById = async (id) => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios.delete(`${BACKEND_URL}/api/products/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        throw (error);
    }
}

export const updateProductById = async (body, id) => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios.put(`${BACKEND_URL}/api/products/${id}`, { ...body })
        console.log(response.data)
        return response.data;
    } catch (error) {
        throw (error);
    }
}