// import React, { useContext, useEffect, useRef } from 'react';
import './estilos.css';
import logo from '../../Imagenes/logo.jpeg';
import { useContext } from 'react'
import { ContextoApp } from '../../Contexto/index'

const Inicio: React.FC = () => {
    const almacenVariables = useContext(ContextoApp);
    
    return (
        <div className='ContenedorInicio'>
            <h2>Hola {almacenVariables?.usuario?.nombre}</h2>
            <img src={logo} alt="Logo iglesia" className="logo" />
        </div>
    );
};

export default Inicio;
