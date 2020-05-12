import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>Página Não Encontrada</h1>
            <h2>404</h2>
            <Link to="/">Volte para o Início</Link>
        </div>
    );
}

export default NotFound;