import axios from "axios"
const BACKEND_URL = 'https://cepnq6rjbk.execute-api.us-east-1.amazonaws.com/'

export const fetchLogin = async (email, password) => {
    const response = await axios.post(`${BACKEND_URL}/login`, { email, password })
    return response
}
export const fetchPaginacion = async (limit, lastKey) => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios.get(`${BACKEND_URL}/items`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                limit: page,
                lastKey: size
            }
        },)

        return response.data;
    } catch (error) {
        console.log(error)
    }
}
export const fetchDelete = async (id) => {
    const response = await axios.delete(`${BACKEND_URL}/users/${id}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
    })
    return response
}
export const fetchGetUserById = async (userId) => {
    try {
        const response = await axios.get(`${BACKEND_URL}/users/${userId}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error al obtener usuario por ID:', error);
        throw error;
    }
};
export const fetchRegister = async (userData) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/register`, userData);
        return response.data;
    } catch (error) {
        console.error('Error en registro:', error);
        throw error;
    }
};
export const fetchPostProduct = async (Data) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/products`, Data, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error al crear producto:', error);
        throw error;
    }
};
export const fetchPutProduct = async (productId, updatedProductData) => {
    try {
        const response = await axios.put(`${BACKEND_URL}/products/${productId}`, updatedProductData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error al actualizar producto:', error);
        throw error;
    }
};


export const fetchPatchProductName = async (productId, updatedName) => {
    try {
        const response = await axios.patch(`${BACKEND_URL}/products/${productId}`, {
            name: updatedName
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,

            },
        });
        return response.data;
    } catch (error) {
        console.error('Error al actualizar nombre del producto:', error);
        throw error;

    }
};
