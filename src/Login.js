import React, { useState } from 'react';

// Componente de Login para SheilaPets
function Login() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Enviando datos a la API PHP...", { usuario, password });
    // Aquí se conectaría con tu login_api.php
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión - SheilaPets</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Correo" 
          onChange={(e) => setUsuario(e.target.bind)} 
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          onChange={(e) => setPassword(e.target.bind)} 
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;