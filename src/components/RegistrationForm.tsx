import React, { useState } from 'react';
import { registerUser } from '../api';

const RegistrationForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await registerUser(name, email, password);
      // Show success message or redirect
    } catch (error) {
      console.error('Registration failed', error);
      // Show error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrar</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome"
        required
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Senha"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
