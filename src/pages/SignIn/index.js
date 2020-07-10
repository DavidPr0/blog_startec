import React, { useState } from 'react';
import { PageArea } from './styled';
import useApi from '../../helpers/BlogAPI';
import { doLogin } from '../../helpers/AuthHandler';

import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';
import PainelTopo from '../../components/painel';

const Page = () => {
    const api = useApi();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');
        
        const json = await api.login(email, senha);

        if (json.error) {
            setError(json.error);
        } else {
            // console.log(json.token);
            doLogin(json.jwt, rememberPassword);
            window.location.href = '/';
        }
        setDisabled(false);
    }

    return (
        <>
            <PainelTopo />
            <PageContainer>
                <PageTitle>Login</PageTitle>
                <PageArea>
                    { error &&
                        <ErrorMessage>{ error }</ErrorMessage>
                    }
                    <form onSubmit={handleSubmit}>
                        <label className="area">
                            <div className="area--title">E-mail</div>
                            <div className="area--input">
                                <input
                                    type="email"
                                    disabled={disabled} 
                                    value={email}
                                    onChange={ e => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </label>                    
                        <label className="area">
                            <div className="area--title">Senha</div>
                            <div className="area--input">
                                <input
                                    type="password"
                                    disabled={disabled}
                                    value={ senha }
                                    onChange={ e => setSenha(e.target.value) }
                                    required
                                />
                            </div>
                        </label>                    
                        <label className="area">
                            <div className="area--title">Lembrar Senha</div>
                            <div className="">
                                <input
                                    type="checkbox"
                                    disabled={disabled}
                                    checked={ rememberPassword }
                                    onChange={ () => setRememberPassword(!rememberPassword) }
                                />
                            </div>
                        </label>                    
                        <label className="area">
                            <div className="area--title"></div>
                            <div className="area--input">
                                <button disabled={disabled}>Fazer Login</button>
                            </div>
                        </label>                    
                    </form>
                </PageArea>
            </PageContainer>
        </>
    );
}

export default Page;