import React from 'react';
import RegisterForm from ',./Components/RegisterForm';

const RegisterPage = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md">
                <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">Registro de Usuario</h2>
                <RegisterForm />
            </div>
        </div>
    );
}

export default RegisterPage;