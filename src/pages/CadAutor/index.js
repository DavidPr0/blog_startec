import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { PageArea } from './styled';
import useApi from '../../helpers/BlogAPI';

import { PageContainer, PageTitle, ErrorMessage, SucessoMessage } from '../../components/MainComponents';
import PainelTopo from '../../components/painel';

const Page = () => {
    const api = useApi();
    const fileField = useRef('');
    const history = useHistory();

    const [nome, setNome] = useState('');
    const [tipoAutores, setTipoAutores] = useState([{nome: 'Principal'}, {nome: 'Coautor'}]);
    const [tipoAutor, setTipoAutor] = useState('');
    
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');
    const [sucesso, setSucesso] = useState('');

    // useEffect(() => {
    //     const getCategorias = async () => {
    //         const cats = await api.getCategorias();
    //         setCategorias(cats);
    //     }
    //     getCategorias();
    // }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');
        let erros = [];

        if (!nome.trim()) {
            erros.push('Sem nome');
        }
        if (!tipoAutor) {
            erros.push('Selecione o tipo do autor');
        }

        if (erros.length === 0) {
            const fData = new FormData();
            fData.append('nome', nome);
            fData.append('tipoAutor', tipoAutor);
            
            if (fileField.current.files.length > 0) {
                for(let i = 0; i < fileField.current.files.length; i++ ) {
                    fData.append('img', fileField.current.files[i]);
                }
            } else {
                erros.push('Imagem Obrigatório');
            }

            const json = await api.cadAutor(fData);
            if (json.sucesso) {
                // history.push(`/ad/${json.id}`);
                setSucesso(json.sucesso);
                document.getElementById('form').reset();
                setTipoAutor('');
                setNome('');
                setDisabled(false);
                return;
            } else {
                setError(json.error);
                setDisabled(false);
            }

        } else {
            setError(erros.join("\n"));
        }

    }

    return (
        <>
            <PainelTopo />
            <PageContainer>
                <PageTitle>Cadastrar Autor</PageTitle>
                <PageArea>
                    { error &&
                        <ErrorMessage>{ error }</ErrorMessage>
                    }
                    { sucesso && 
                        <SucessoMessage>{ sucesso }</SucessoMessage>
                    }
                    <form id="form" onSubmit={handleSubmit}>
                        <label className="area">
                            <div className="area--title">Nome: </div>
                            <div className="area--input">
                                <input
                                    type="text"
                                    disabled={disabled} 
                                    value={nome}
                                    onChange={ e => setNome(e.target.value)}
                                    required
                                    placeholder="Informe o Nome do Autor"
                                />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Tipo Autor:</div>
                            <div className="area--input">
                                <select
                                    disabled={disabled}
                                    onChange={e => setTipoAutor(e.target.value)}
                                >
                                    <option>Selecione o autor</option>
                                    {tipoAutores && tipoAutores.map(i => 
                                        <option key={i.nome} value={i.nome}>{i.nome}</option>    
                                    )}
                                </select>
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Foto do autor:</div>
                            <div className="area--input">
                                <input
                                    type="file"
                                    disabled={disabled}
                                    ref={fileField}
                                    multiple
                                />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title"></div>
                            <div className="area--input">
                                <button disabled={disabled}>Cadastrar</button>
                            </div>
                        </label>                    
                    </form>
                </PageArea>
            </PageContainer>
        </>
    );
}

export default Page;