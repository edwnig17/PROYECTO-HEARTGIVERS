import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Agregamos useNavigate
import DefaultLayout from "../layout/DefaultLayout";
import { useAuth } from "../auth/AuthProvider";
import { Navigate } from "react-router-dom";
import { AuthResponse, AuthResponseError } from "../types/types";

import "../css/style.css"; 

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorResponse, setErrorResponse] = useState("");

  const auth = useAuth();
  const navigate = useNavigate(); // Agregamos useNavigate

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const json = (await response.json()) as AuthResponse;
        console.log(json);

        if (json.body.accessToken && json.body.refreshToken) {
          auth.saveUser(json);
          navigate("../../../py/frontend/"); 
        }
      } else {
        const json = (await response.json()) as AuthResponseError;

        setErrorResponse(json.body.error);
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (auth.isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <DefaultLayout>
      <div className="body-wrapper">
        <div className="container">
          <div className="left-section">
            <h1>Mi cuenta!</h1>
            <p>Ingresa tu cuenta</p>
            {!!errorResponse && <div className="errorMessage">{errorResponse}</div>}
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <input
                  type="text"
                  name="username"
                  placeholder="Usuario"
                  onChange={handleChange}
                  value={username}
                />
              </div>
              <div className="input-container">
                <input
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  onChange={handleChange}
                  value={password}
                />
              </div>
              <div className="checkbox-container">
                <input type="checkbox" id="accept-checkbox" />
                <label htmlFor="accept-checkbox">Acepto el uso y manejo de datos</label>
              </div>
              <button type="submit" className="login-button">Entrar</button>
            </form>
          </div>
          <div className="right-section">
            <div className="image-container">
              <img src="src/img/login.jpg" alt="Imagen Super HD" />
              <a href="#">Registrarme</a>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
