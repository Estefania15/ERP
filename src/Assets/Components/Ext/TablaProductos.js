import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const TablaProductos = ({ products }) => (
  <div className="table-container">
    <h2>Lista de Productos</h2>

    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>${product.price}</td>
            <td>${product.quantity * product.price}</td>
          </tr>
        ))}
      </tbody>
    </table>

    {products.length > 0 && (
      <div className="grafica-container">
        <h3>Gráfica de Cantidades</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={products}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="quantity" fill="#4CAF50" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )}
  </div>
);

export default TablaProductos;
