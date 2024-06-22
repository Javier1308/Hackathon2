import React, { useState, useEffect } from 'react';
import { fetchRegister } from '../service/api';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
    const [formData, setFormData] = useState({
        username: '',
        rol: '',
        password: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        const usernameInput = document.querySelector('input[name="username"]');
        if (usernameInput) {
            usernameInput.focus();
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = await fetchRegister(formData);
            console.log('Usuario registrado:', userData);
            navigate('/login');
        } catch (error) {
            console.error('Error en registro:', error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto" style={{ maxWidth: '400px' }}>
                <div className="mb-4">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="username"
                        placeholder="Nombre de usuario"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <div className="flex justify-between">
                        <button className="shadow bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
                        onClick={() => handleChange({ target: { name: 'rol', value: 'cliente' } })}>
                            Cliente
                            </button>
                    <button className="shadow bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"  type="button"
                    onClick={() => handleChange({ target: { name: 'rol', value: 'admin' } })} >
                         Admin
                         </button>
                    </div>
                </div>
                <div className="mb-6">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Registrar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default RegisterForm;