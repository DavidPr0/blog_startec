import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderArea } from './styled';
import { ReactComponent as Logo } from '../../../assets/img/logo_horizontal.svg';
import { isLogged } from '../../../helpers/AuthHandler';

const Header = () => {
    let logged = isLogged();

    return (
        <HeaderArea>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <Logo className="logoHeader" />
                    </Link>
                </div>
                <nav>
                    <ul>
                        {logged &&
                        <li>
                            <Link className="admin" to="/admin">Administrar</Link>
                        </li>
                        }
                        <li>
                            <a href="https://startecti.com.br">Início</a>
                        </li>
                        <li className="spanTopo"></li>
                        <li className="btn_experimentar" >
                            {/* <span>></span> */}
                            <a href="https://startecti.com.br/#contato">Experimentar</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    );
}

export default Header;