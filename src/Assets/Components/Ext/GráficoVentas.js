import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './GráficoVentas.css';

const data = [
  { name: 'Producto A', quantity: 30 },
  { name: 'Producto B', quantity: 20 },
  { name: 'Producto C', quantity: 50 },
  { name: 'Producto D', quantity: 15 },
];

const GráficoVentas = () => {
  const [mostrarGrafico, setMostrarGrafico] = useState(true);  // Estado para mostrar/ocultar

  const toggleGrafico = () => {
    setMostrarGrafico(!mostrarGrafico);  // Cambiar estado de visibilidad
  };

  return (
    <div className="bar-graph-container">
      <h2>Gráfico de Cantidades</h2>
      <button onClick={toggleGrafico}>
        {mostrarGrafico ? 'Ocultar Gráfico' : 'Mostrar Gráfico'}
      </button>
      
      {mostrarGrafico && (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="quantity" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default GráficoVentas;
