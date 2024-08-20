import React from 'react';
import './estilos.css';
import logo from '../../Imagenes/logo.jpeg'; 

const Inicio: React.FC = () => {
    return (
        <div>
            <h1>Hola soy inicio</h1>
            <img src={logo} alt="Logo iglesia" className="logo" />
        </div>
    );
};

export default Inicio;
