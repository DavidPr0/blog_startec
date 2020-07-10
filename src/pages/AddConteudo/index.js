import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { PageArea } from './styled';
import useApi from '../../helpers/BlogAPI';

import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';
import PainelTopo from '../../components/painel';

const Page = () => {
    const api = useApi();
    const fileField = useRef('');
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [texto, setTexto] = useState('');
    const [autores, setAutores] = useState([]);
    const [autor, setAutor] = useState('');
    const [temas, setTemas] = useState([]);
    const [tema, setTema] = useState('');
    
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const getTemas = async () => {
            const tem = await api.getTemas();
            setTemas(tem);
        }
        getTemas();

        const getAutores = async () => {
            const aut = await api.getAutores();
            setAutores(aut);
        }
        getAutores();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');
        let erros = [];

        if (!title.trim()) {
            erros.push('Sem título');
        }
        // if (!categoria) {
        //     erros.push('Sem categoria');
        // }

        if (erros.length === 0) {
            const fData = new FormData();
            fData.append('title', title);
            // fData.append('price', preco);
            fData.append('desc', texto);
            // fData.append('cat', categoria);

            if (fileField.current.files.length > 0) {
                for(let i = 0; i < fileField.current.files.length; i++ ) {
                    fData.append('img[]', fileField.current.files[i]);
                }
            }

            const json = await api.addAd(fData);
            if (!json.error) {
                history.push(`/ad/${json.id}`);
                return;
            } else {
                setError(json.error);
            }

        } else {
            setError(erros.join("\n"));
        }

    }

    const priceMask = createNumberMask({
        prefix: 'R$ ',
        includeThousandsSeparator: true,
        thousandsSeparatorSymbol: '.',
        allowDecimal: true,
        decimalSymbol: ','
    });

    return (
        <>
            <PainelTopo />
            <PageContainer>
                <PageTitle>Adicionar Conteúdo</PageTitle>
                <PageArea>
                    { error &&
                        <ErrorMessage>{ error }</ErrorMessage>
                    }
                    <form onSubmit={handleSubmit}>
                        <label className="area">
                            <div className="area--title">Título: </div>
                            <div className="area--input">
                                <input
                                    type="text"
                                    disabled={disabled} 
                                    value={title}
                                    onChange={ e => setTitle(e.target.value)}
                                    required
                                    placeholder="Informe o Título"
                                />
                            </div>
                        </label>                    
                        <label className="area">
                            <div className="area--title">Conteúdo:</div>
                            <div className="area--input">
                                <textarea
                                    placeholder="Informe o Conteúdo"
                                    disabled={disabled}
                                    value={ texto }
                                    onChange={ e => setTexto(e.target.value) }
                                    required
                                ></textarea>
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Tema:</div>
                            <div className="area--input">
                                <select
                                    disabled={disabled}
                                    onChange={e => setTema(e.target.value)}
                                >
                                    <option></option>
                                    {temas && temas.map(i => 
                                        <option key={i.idtema} value={i.idtema}>{i.nome_tema}</option>    
                                    )}
                                </select>
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Imagens do conteúdo:</div>
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
                            <div className="area--title">Autor:</div>
                            <div className="area--input">
                                <select
                                    disabled={disabled}
                                    onChange={e => setAutor(e.target.value)}
                                    
                                >
                                    <option></option>
                                    {autores && autores.map(i => 
                                        <option key={i.idautor} value={i.idautor}>{i.nome_aut}</option>    
                                    )}
                                </select>
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Preços:</div>
                            <div className="area--input">
                                {/* <MaskedInput 
                                    mask={priceMask}
                                    placeholder="R$ "
                                    disabled={disabled}
                                    value={preco}
                                    onChange={ e => setPreco(e.target.value)}
                                /> */}
                            </div>
                        </label>
                        {/* <label className="area">
                            <div className="area--title">Autor: </div>
                            <div className="area--input">
                                <input
                                    placeholder="Informe o nome do autor da publicação"
                                    type="text"
                                    disabled={disabled}
                                    value={ autor }
                                    onChange={ e => setAutor(e.target.value) }
                                    required
                                />
                            </div>
                        </label> */}
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