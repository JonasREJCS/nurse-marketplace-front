import React from 'react';
import { AuthProvider, useAuth } from './authContext';
import AuthForm from './components/AuthForm';
import RegistrationForm from './components/RegistrationForm';

const App: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div>
      {!isAuthenticated ? (
        <div>
          <RegistrationForm />
          <AuthForm />
        </div>
      ) : (
        <div>
          <h2>Bem vindo de volta!</h2>
          <button onClick={logout}>Sair</button>
        </div>
      )}
    </div>
  );
};

const Root: React.FC = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

export default Root;
