import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleRegistro from '../../Componentes/LoginGoogle'; 
import './estilos.css';
import { useContext } from 'react';
import { ContextoApp } from '../../Contexto/index';

const Registro: React.FC = () => {
    const navigate = useNavigate();
    const almacenVariables = useContext(ContextoApp);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const ingresoExitoso = (usuario: { nombre: string, email: string, userId: string }) => {
        console.log("Usuario logueado con éxito:", usuario.nombre)
        
        // Guardar el objeto usuario completo en el contexto
        if (almacenVariables) {
            almacenVariables.setUsuario(usuario);
        }
        // Redirigir al usuario a /Inicio
        navigate('/Inicio');
    };

    const handleEmailLogin = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Correo:", email);
        console.log("Contraseña:", password);
        // Aquí puedes agregar la lógica para manejar el inicio de sesión con correo y contraseña
        // Por ejemplo, validar el correo y la contraseña, y luego redirigir al usuario si es exitoso
        if (almacenVariables) {
            almacenVariables.setUsuario({ nombre: "Usuario", email, userId: "12345" });
        }
        navigate('/Inicio');
    };

    return (
        <div className="contenedor_registro">
            <GoogleRegistro onLoginSuccess={ingresoExitoso} />
            <h3>O inicia sesión con tu correo electrónico</h3>
            <form onSubmit={handleEmailLogin} className="formulario_login">
                <div className="input_group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input_group">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login_button">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default Registro;
