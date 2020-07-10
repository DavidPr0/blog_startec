import React from 'react';
import { Link } from 'react-router-dom';
import { PainelArea } from './styled';
// import { ReactComponent as Logo } from 'https://s3.amazonaws.com/creativetim_bucket/new_logo.png';
import { isLogged, doLogout } from '../../helpers/AuthHandler';

const TopoPainel = () => {
    let logged = isLogged();

    const handleLogout = () => {
        doLogout();
        window.location.href = '/';
    }

    return (
        <PainelArea>
        <div className="container">
            <div className="usuario">
                <Link to="/">
                    <img src="https://s3.amazonaws.com/creativetim_bucket/new_logo.png" />
                </Link>
                <h1>David Santos</h1>
                {/* <p>Administrador</p> */}
            </div>
            <nav>
                <ul>
                    
                    {logged &&
                        <>
                        <li>
                            <Link className="admin" to="/cadautor">Cadastrar Autor</Link>
                        </li>
                        <li>
                            <Link className="admin" to="/cadtemas">Cadastrar Tema</Link>
                        </li>
                        <li>
                            <Link className="admin" to="/addconteudo">Cadastrar Conteúdo</Link>
                        </li>
                        <li className="btn_experimentar" >
                            <button onClick={ handleLogout }>Sair</button>
                        </li>
                        </>
                    }
                    {!logged &&
                        <>
                        <li className="btn_experimentar" >
                            <Link to="/SignIn">Logar</Link>
                        </li>
                        </>
                    }
                </ul>
            </nav>
        </div>
        </PainelArea>
    );
}

export default TopoPainel;
