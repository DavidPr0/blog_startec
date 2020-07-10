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
    const [descricao, setDescricao] = useState('');
    
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');
    const [sucesso, setSucesso] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');
        setSucesso('');
        let erros = [];

        if (!nome.trim()) {
            erros.push('Nome Obrigatório');
        }

        if (erros.length === 0) {
            const fData = new FormData();
            fData.append('nome', nome);
            fData.append('descricao', descricao);

            if (fileField.current.files.length > 0) {
                for(let i = 0; i < fileField.current.files.length; i++ ) {
                    fData.append('img', fileField.current.files[i]);
                }
            } else {
                erros.push('Imagem Obrigatório');
            }

            const json = await api.cadTema(fData);
            if (json.sucesso) {
                // history.push(`/ad/${json.id}`);
                setSucesso(json.sucesso);
                setDisabled(false);
                setNome('');
                setDescricao('');
                document.getElementById('form').reset();
                return;
            } else {
                setError(json.error);
                setDisabled(false);
            }

        } else {
            setError(erros.join("\n"));
            setDisabled(false);
        }

    }

    return (
        <>
            <PainelTopo />
            <PageContainer>
                <PageTitle>Cadastrar Temas</PageTitle>
                <PageArea>
                    { error &&
                        <ErrorMessage>{ error }</ErrorMessage>
                    }
                    { sucesso &&
                        <SucessoMessage>{ sucesso }</SucessoMessage>
                    }
                    <form id="form" onSubmit={handleSubmit}>
                        <label className="area">
                            <div className="area--title"><strong>*</strong>Nome: </div>
                            <div className="area--input">
                                <input
                                    type="text"
                                    disabled={disabled} 
                                    value={nome}
                                    onChange={ e => setNome(e.target.value)}
                                    // required
                                    placeholder="Informe o nome do Tema"
                                />
                            </div>
                        </label>                    
                        <label className="area">
                            <div className="area--title">Descrição:</div>
                            <div className="area--input">
                                <textarea
                                    placeholder="Informe o Conteúdo"
                                    disabled={disabled}
                                    value={ descricao }
                                    onChange={ e => setDescricao(e.target.value) }
                                    required
                                ></textarea>
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Foto do Tema:</div>
                            <div className="area--input">
                                <input
                                    type="file"
                                    disabled={disabled}
                                    ref={fileField}
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