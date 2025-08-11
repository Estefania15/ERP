import { useAuth0 } from '@auth0/auth0-react';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) return null; // aquí podrías poner un loader

  if (!isAuthenticated) {
    loginWithRedirect({ appState: { returnTo: window.location.pathname } });
    return null;
  }

  return children;
}
