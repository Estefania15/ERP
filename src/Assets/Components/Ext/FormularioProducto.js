import React, { useState } from 'react';
import axios from 'axios'; // 👈 importa axios
import './FormularioProducto.css';

const FormularioProducto = () => {
  const [product, setProduct] = useState({
    name: '',
    quantity: 0,
    price: 0,
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Enviando producto:", product); // 👀 para verificar

      const response = await axios.post('http://localhost:1900/api/products', product);

      console.log("Producto guardado:", response.data); // ✅

      setProduct({ name: '', quantity: 0, price: 0 }); // limpiar

    } catch (error) {
      console.error("Error al guardar producto:", error);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleChange}
        placeholder="Nombre del Producto"
        required
      />
      <input
        type="number"
        name="quantity"
        value={product.quantity}
        onChange={handleChange}
        placeholder="Cantidad"
        required
      />
      <input
        type="number"
        name="price"
        value={product.price}
        onChange={handleChange}
        placeholder="Precio"
        required
      />
      <button type="submit">Agregar Producto</button>
    </form>
  );
};

export default FormularioProducto;
