import React from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleRegistro from '../../Componentes/LoginGoogle'; 
import './estilos.css';
import { useContext } from 'react';
import { ContextoApp } from '../../Contexto/index';

const Registro: React.FC = () => {
    const navigate = useNavigate();
    const almacenVariables = useContext(ContextoApp);

    const ingresoExitoso = (usuario: { nombre: string, email: string, userId: string }) => {
        console.log("Usuario logueado con éxito:", usuario.nombre);
        
        // Guardar el objeto usuario completo en el contexto
        if (almacenVariables) {
            almacenVariables.setUsuario(usuario);
        }
        // Redirigir al usuario a /Inicio
        navigate('/Inicio');
    };

    return (
        <div className="contenedor_registro">
            <GoogleRegistro onLoginSuccess={ingresoExitoso} />
        </div>
    );
};

export default Registro;
