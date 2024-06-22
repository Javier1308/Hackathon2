import React, { useState } from 'react';
import { fetchLogin } from '../service/api';
import { useNavigate } from 'react-router-dom';

const Log = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetchLogin(email, password);
      localStorage.setItem('token', res.data.token);
      navigate('/login');
    } catch (error) {
      console.log(error);
      alert('Usuario o contraseña incorrecta');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-8">Login</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-xs">
        <div className="mb-4">
          <label htmlFor='email' className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='email' name='email' id='email' required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-6">
          <label htmlFor='password' className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password" name="password" id="password" required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Login
          </button>
          <button
            onClick={() => navigate('/register')}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            No tienes cuenta
          </button>
        </div>
      </form>
    </div>
  );
};

export default Log;