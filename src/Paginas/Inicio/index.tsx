import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link
import './estilos.css';
import logo from '../../Imagenes/logo.jpeg'; 

const Inicio: React.FC = () => {
    return (
        <div className='ContenedorInicio'>
            <h1>Hola soy inicio</h1>
            
            <Link to="/registro">
                <button className="botonRegistro">Ir a Registro</button>
            </Link>

            <img src={logo} alt="Logo iglesia" className="logo" />
        </div>
    );
};

export default Inicio;
