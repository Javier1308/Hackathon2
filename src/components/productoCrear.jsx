import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const productoCrear = () => {
const [infoProducto,setInfoproducto] = useState({
    itemId:'',
    boughtInLastMonth: 0,
    imgUrl:"",
    isBestSeller:false,
    price:0,
    stars:0,
    title:""
})
const handleChange = (e) => {
    const {name,value} = e.target;
    setInfoproducto(prevState => ({
      ...prevState,
      [name]:value
    }));
};
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const userData = await fetchRegister(infoProducto);
        console.log('Producto creado', infoProducto.itemId );
        navigate('/adminView');
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
                    type="int"
                    name="BoughtInLastMonth"
                    placeholder="Comprados ultimo mes"
                    value={infoProducto.boughtInLastMonth}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-4">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="imgUrl"
                    placeholder="Imagen"
                    value={infoProducto}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-6">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="boolean"
                    name="isBestSeller"
                    placeholder="Es un exito?"
                    value={infoProducto.isBestSeller}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-6">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="double"
                    name="price"
                    placeholder="Precio"
                    value={infoProducto.price}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-6">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="int"
                    name="stars"
                    placeholder="Estrellas"
                    value={infoProducto.stars}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-6">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="title"
                    placeholder="titulo"
                    value={infoProducto.title}
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
export default productoCrear;