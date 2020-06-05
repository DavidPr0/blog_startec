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
    // const [autor, setAutor] = useState('');
    const [preco, setPreco] = useState('');
    const [categorias, setCategorias] = useState([]);
    const [categoria, setCategoria] = useState('');
    
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const getCategorias = async () => {
            const cats = await api.getCategorias();
            setCategorias(cats);
        }
        getCategorias();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');
        let erros = [];

        if (!title.trim()) {
            erros.push('Sem título');
        }
        if (!categoria) {
            erros.push('Sem categoria');
        }

        if (erros.length === 0) {
            const fData = new FormData();
            fData.append('title', title);
            fData.append('price', preco);
            fData.append('desc', texto);
            fData.append('cat', categoria);

            if (fileField.current.files.length > 0) {
                for(let i = 0; i < fileField.current.files.length; i++ ) {
                    fData.append('img', fileField.current.files[i]);
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
                            <div className="area--title">Categorias:</div>
                            <div className="area--input">
                                <select
                                    disabled={disabled}
                                    onChange={e => setCategoria(e.target.value)}
                                    required
                                >
                                    <option></option>
                                    {categorias && categorias.map(i => 
                                        <option key={i._id} value={i._id}>{i.name}</option>    
                                    )}
                                </select>
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Preços:</div>
                            <div className="area--input">
                                <MaskedInput 
                                    mask={priceMask}
                                    placeholder="R$ "
                                    disabled={disabled}
                                    value={preco}
                                    onChange={ e => setPreco(e.target.value)}
                                />
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