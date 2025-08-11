import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { Link } from "react-router-dom"; // Importar Link para navegación interna
import { LogoutButton } from "../../Logout/Logout"; // Ruta corregida de importación
import "./Sidebar.css"; // Asegúrate de tener este archivo CSS con los estilos

export default function Sidebar1() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      {/* Botón para abrir el Sidebar */}
      <Button icon="pi pi-bars" onClick={() => setVisible(true)} />

      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        className="sidebar-glass"
      >
        <div className="sidebar-content">
          {/* Header del Sidebar */}
          <div className="sidebar-header">
            <img src="/logo.png" alt="logo" /> {/* Corrección de la ruta */}
          </div>

          {/* Menú del Sidebar */}
          <div className="sidebar-menu">
            <ul>
              <i className="pi pi-home"></i>
              <Link to='/Dashboard'>
                <span> Dashboard </span> </Link>
              <li>
                <i className="pi pi-home"></i>
                <Link to='/Fiscalizacion'>
                  <span> Fiscalizacion</span></Link>
              </li>
              <li>
                <i className="pi pi-users"></i>
                <Link to='/RecursosHumanos'>
                  <span> Recursos Humanos </span> </Link>
              </li>
              <li>
                <i className="pi pi-box"></i>
                <Link to="/extra">
                  <span> Extra</span></Link>
              </li>
              <li>
                <i className="pi pi-cog"></i>
                <Link to="/configuracion">
                  <span>Configuración</span></Link>
              </li>
            </ul>
          </div>

          {/* Usuario en la parte inferior */}
          <div className="sidebar-footer">
            <Avatar
              image="/logo.png"
              shape="circle"
            />
            <span>Estefania Cruz</span>
          </div>

          {/* Botón de Logout al final del Sidebar */}
          <div className="logout-section">
            <LogoutButton />
          </div>
        </div>
      </Sidebar>
    </div>
  );
}
