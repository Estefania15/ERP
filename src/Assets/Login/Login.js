import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Login.css';
import Megamenu from '../Components/MegaMenu/MegaMenu';

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <div className="menu-container">
        {/* Implementando enlaces en el Megamenu */}
        <Megamenu />
        {/* Ejemplo de enlace que redirige a una página externa */}
        <a href="https://curriculumestefania.my.canva.site/" target="_blank" className="portfolio-link">
          Ver Portafolio
        </a>
      </div>

      <div className="login">
        <section className="entrada">
          <div className="desc">
            <h1 className="titulo-prin">Bienvenido a Nuestro ERP</h1>
            <h2 className="titulo_sec">Administración de visitas y clientes</h2>
          </div>
          <div className="boton1">
            <button onClick={() => loginWithRedirect({ appState: { returnTo: '/dashboard' } })}>
  <span className="transition"></span>
  <span className="gradient"></span>
  <span className="label">Login</span>
</button>

          </div>
        </section>
      </div>
    </>
  );
};
