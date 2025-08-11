// App.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

import { LoginButton } from "./Assets/Login/Login.js";
import Profile from "./Assets/Profile/Profile.js";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { PrimeReactProvider } from "primereact/api";

import { Routes, Route, Navigate } from "react-router-dom";

import Topbar from "./Assets/Components/Topbar/Topbar";
import Dashboard from "./Assets/Components/Dashboard/Dashboard";
import Fiscalizacion from "./Assets/Components/Fiscalizacion/Fiscalizacion.js";
import Ext from "./Assets/Components/Ext/Ext.js";
import Configuracion from "./Assets/Components/Configuracion/ConfigPage.js";
import RecursosHumanos from "./Assets/Components/RecursosHumanos/RecursosHumanos.js";
import Mensaje from "./Assets/Components/Mensaje/Mensaje.js";

import "./App.css";
import "./Assets/Components/Ext/FormularioProducto.css";
import "./Assets/Components/Ext/TablaProductos.css";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// URL de la API: usa .env para ngrok o localhost en desarrollo
const API = import.meta?.env?.VITE_API_BASE_URL || "http://localhost:1900";

// --- Formulario de producto
function FormularioProducto({ onAddProduct }) {
  const [product, setProduct] = useState({
    name: "",
    quantity: 0,
    price: 0,
  });

  const handleChange = (e) => {
    setProduct((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onAddProduct(product);
    setProduct({ name: "", quantity: 0, price: 0 });
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
}

// --- Tabla de productos
function TablaProductos({ products }) {
  return (
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
}

// --- Página de productos
function ProductosPage() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${API}/api/products`);
      setProducts(res.data);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  const addProduct = async (product) => {
    try {
      const res = await axios.post(`${API}/api/products`, product);
      setProducts((prev) => [...prev, res.data]);
    } catch (error) {
      console.error("Error al agregar producto:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Gestión de Productos</h1>
      <FormularioProducto onAddProduct={addProduct} />
      <TablaProductos products={products} />
    </div>
  );
}

// --- App principal
function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <PrimeReactProvider>
      <div className="App">
        {isAuthenticated ? (
          <>
            <Topbar />
            <Mensaje />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/fiscalizacion" element={<Fiscalizacion />} />
              <Route path="/recursoshumanos" element={<RecursosHumanos />} />
              <Route path="/extra" element={<Ext />} />
              <Route path="/configuracion" element={<Configuracion />} />
              <Route path="/productos" element={<ProductosPage />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
            <Profile />
          </>
        ) : (
          <Routes>
            <Route path="/" element={<LoginButton />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}
      </div>
    </PrimeReactProvider>
  );
}

export default App;
