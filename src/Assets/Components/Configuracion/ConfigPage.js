import React, { useState } from 'react';
import './ConfigPage.css';

const ConfigPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedback('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="config-page">
      <h1>Configuración y Atención al Cliente</h1>

      {/* Sección de Formulario de Contacto */}
      <div className="contact-form">
        <h2>Contacto</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo electrónico"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escribe tu mensaje"
            required
          />
          <button type="submit">Enviar</button>
        </form>

        {/* Mensaje de Confirmación */}
        {feedback && <div className="feedback">{feedback}</div>}
      </div>

      {/* Sección de Preferencias */}
      <div className="preferences">
        <h2>Preferencias de Notificación</h2>
        <form>
          <label>
            <input type="checkbox" />
            Recibir notificaciones por correo electrónico
          </label>
          <label>
            <input type="checkbox" />
            Recibir notificaciones por SMS
          </label>
          <button type="submit">Guardar Preferencias</button>
        </form>
      </div>
    </div>
  );
};

export default ConfigPage;
