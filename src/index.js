import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom"; // Importar BrowserRouter
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-h3go6myj5pwai8cy.us.auth0.com"
      clientId="JtWMgjZaoWoPZUabRB8PSNDZxDvjqoBj"
      authorizationParams={{ redirect_uri: window.location.origin }}
  onRedirectCallback={(appState) => {
    // respeta el returnTo que mandaste en loginWithRedirect
    const target = appState?.returnTo || window.location.pathname || '/';
    window.history.replaceState({}, document.title, target);
  }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);

reportWebVitals();
