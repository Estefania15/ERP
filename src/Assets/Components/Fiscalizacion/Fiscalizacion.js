//import "./Fiscalizacion.css";

import React, { useState, useEffect } from 'react';

// Componente principal
const FiscalizacionERP = () => {
  // Estado para el mensaje de estado de fiscalización
  const [status, setStatus] = useState('Cargando estado de fiscalización...');
  
  // Estado para los datos de auditoría
  const [auditData, setAuditData] = useState([]);

  // Función simulada para obtener datos de auditoría de una API
  const fetchAuditData = () => {
    const simulatedData = [
      { id: 1, date: '2025-03-01', status: 'Aprobado', comments: 'Sin observaciones' },
      { id: 2, date: '2025-03-05', status: 'En proceso', comments: 'En espera de documentos' },
      { id: 3, date: '2025-03-08', status: 'Rechazado', comments: 'Falta información fiscal' },
    ];
    setAuditData(simulatedData);
  };

  // Función para actualizar el estado de fiscalización
  const updateStatus = () => {
    const randomStatus = ['Fiscalización completada con éxito', 'En proceso de verificación', 'Falta información'];
    const status = randomStatus[Math.floor(Math.random() * randomStatus.length)];
    setStatus(status);
  };

  // Llamada para obtener datos y actualizar el estado al cargar el componente
  useEffect(() => {
    fetchAuditData(); // Simulamos la obtención de datos de la API
    updateStatus(); // Actualizamos el estado inicial
  }, []);

  return (
    <div style={styles.container}>
      {/* Encabezado */}
      <header style={styles.header}>
        <h1 style={styles.title}>Fiscalización en ERP</h1>
        <p style={styles.description}>Monitorización y control de registros fiscales</p>
      </header>

      {/* Sección de estado de fiscalización */}
      <section style={styles.status}>
        <h2 style={styles.statusTitle}>Estado de la Fiscalización</h2>
        <div style={styles.statusMessage}>{status}</div>
        <button style={styles.button} onClick={updateStatus}>Actualizar Estado</button>
      </section>

      {/* Sección de reporte de auditoría */}
      <section style={styles.report}>
        <h2 style={styles.reportTitle}>Reporte de Auditoría</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Fecha</th>
              <th>Estado</th>
              <th>Comentarios</th>
            </tr>
          </thead>
          <tbody>
            {auditData.length > 0 ? (
              auditData.map(report => (
                <tr key={report.id} style={styles.row}>
                  <td>{report.id}</td>
                  <td>{report.date}</td>
                  <td style={getStatusStyle(report.status)}>{report.status}</td>
                  <td>{report.comments}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={styles.noData}>Cargando datos...</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
};

// Función para obtener el estilo según el estado de la auditoría
const getStatusStyle = (status) => {
  switch (status) {
    case 'Aprobado':
      return { backgroundColor: '#2ecc71', color: 'white' };
    case 'En proceso':
      return { backgroundColor: '#f39c12', color: 'white' };
    case 'Rechazado':
      return { backgroundColor: '#e74c3c', color: 'white' };
    default:
      return {};
  }
};

// Estilos en línea para los componentes
const styles = {
  container: {
    width: '80%',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  title: {
    color: '#2c3e50',
  },
  description: {
    color: '#7f8c8d',
  },
  status: {
    marginBottom: '30px',
  },
  statusTitle: {
    color: '#2980b9',
    marginBottom: '10px',
  },
  statusMessage: {
    backgroundColor: '#ecf0f1',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  report: {
    marginBottom: '30px',
  },
  reportTitle: {
    color: '#2980b9',
    marginBottom: '10px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  row: {
    backgroundColor: '#f9f9f9',
  },
  noData: {
    textAlign: 'center',
    color: '#7f8c8d',
    fontStyle: 'italic',
  },
  th: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '10px',
  },
  td: {
    padding: '10px',
  },
};

export default FiscalizacionERP;
