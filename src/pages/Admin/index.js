import React from 'react';
import { Link } from 'react-router-dom';
import PainelTopo from '../../components/painel';

const Page = () => {
    return (
        <div>
            <PainelTopo />
            <h1>Página Admin</h1>
            <Link to="/">Home</Link>
        </div>
    );
}

export default Page;