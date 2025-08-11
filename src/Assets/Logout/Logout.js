import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from 'primereact/button'; // Usaremos un botón bonito de PrimeReact

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button 
      label="Cerrar Sesión"
      icon="pi pi-sign-out" 
      className="p-button-danger p-button-rounded p-button-outlined logout-button"
      onClick={() => logout({ returnTo: window.location.origin })}
    />
  );
};
