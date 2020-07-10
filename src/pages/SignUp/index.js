import React, { useState, useEffect } from 'react';
import { PageArea } from './styled';
import useApi from '../../helpers/BlogAPI';
import { doLogin } from '../../helpers/AuthHandler';

import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';
import PainelTopo from '../../components/painel';

const Page = () => {
    const api = useApi();

    const [name, setName] = useState('');
    const [estadoLoc, setEstadoLoc] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const [disabled, setDisabled] = useState(false);
    const [ estadoLista, setEstadoLista ] = useState([]);
    const [error, setError] = useState('');

    useEffect( () => {
        const getStates = async () => {
            const lista = await api.getStates();
            setEstadoLista(lista);
        }
        getStates();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');

        if (senha !== confirmPassword) {
            setError('Confirme senha é diferente!');
            setDisabled(false);
            return;
        }

        const json = await api.register(name, email, senha);

        if (json.error) {
            setError(json.error);
        } else {
            doLogin(json.jwt);
            window.location.href = '/admin';
        }
        setDisabled(false);
    }

    return (
        <div>
            <PainelTopo />
            <PageContainer>
                <PageTitle>Cadastro</PageTitle>
                <PageArea>
                    { error &&
                        <ErrorMessage>{ error }</ErrorMessage>
                    }
                    <form onSubmit={handleSubmit}>
                        <label className="area">
                            <div className="area--title">Nome Completo</div>
                            <div className="area--input">
                                <input
                                    type="text"
                                    disabled={disabled} 
                                    value={name}
                                    onChange={ e => setName(e.target.value)}
                                    required
                                />
                            </div>
                        </label>
                        {/* <label className="area">
                            <div className="area--title">Estado</div>
                            <div className="area--input">
                                <select>
                                    <option></option>
                                    {estadoLista.map( (i, k) => 
                                        <option key={ k } value={i._id}>{i.name}</option>
                                    )}
                                </select>
                            </div>
                        </label> */}
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
                            <div className="area--title">Confirmar Senha</div>
                            <div className="area--input">
                                <input
                                    type="password"
                                    disabled={disabled}
                                    value={ confirmPassword }
                                    onChange={ e => setConfirmPassword(e.target.value) }
                                    required
                                />
                            </div>
                        </label>                   
                        <label className="area">
                            <div className="area--title"></div>
                            <div className="area--input">
                                <button disabled={disabled}>Fazer Cadastro</button>
                            </div>
                        </label>                    
                    </form>
                </PageArea>
            </PageContainer>
        </div>
    );
}

export default Page;