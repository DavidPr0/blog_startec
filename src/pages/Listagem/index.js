import React, { useState, useEffect } from 'react';
import { PageArea } from './styled';
import useApi from '../../helpers/BlogAPI';
import ConteudoItem from '../../components/partials/ConteudoItem';

import { PageContainer } from '../../components/MainComponents';
import PainelTopo from '../../components/painel';
import { useLocation, useHistory } from 'react-router-dom';

let timer;

const Page = () => {
    const api = useApi();
    const history = useHistory();

    const useQueryString = () => {
        return new URLSearchParams( useLocation().search );
    }
    const query = useQueryString();
    
    const [q, setQ] = useState( query.get('q') != null ? query.get('q') : '' );
    const [cat, setCat] = useState( query.get('cat') != null ? query.get('cat') : '' );
    const [estado, setEstado] = useState( query.get('estado') != null ? query.get('estado') : '' );
    
    const [buscaTotal, setBuscaTotal] = useState(0);
    const [ estadoLista, setEstadoLista ] = useState([]);
    const [ destaques, setDestaques ] = useState([]);
    const [ conteudo, setConteudo ] = useState([]);
    const [ contaPagina, setContaPagina ] = useState(0);
    const [ paginaAtual, setPaginaAtual ] = useState(1);

    const [resultOpacity, setResultOpacity] = useState(1);
    const [mensagemAguardo, setMensagemAguardo] = useState('Carregando Conteúdo...');
    const [loading, setLoading] = useState(true);

    const getBuscaList = async () => {

        setLoading(true);
        let offset = (paginaAtual - 1) * 12;

        const json = await api.getCont({
            sort: 'desc',
            limit: 12,
            q,
            cat,
            offset
        });
        setConteudo(json.ads);
        setBuscaTotal(json.total);
        setResultOpacity(1);
        setLoading(false);
    }
    useEffect(() => {
        if (conteudo.length > 0) {
            setContaPagina( Math.ceil( buscaTotal / conteudo.length ));
        } else {
            setContaPagina(0);
        }
    }, [ buscaTotal ]);

    useEffect(() => {
        setResultOpacity(0.3);
        getBuscaList();
    }, [ paginaAtual ]);

    useEffect(() => {
        let queryString = [];

        if (q) {
            queryString.push(`q=${q}`);
        }
        if (cat) {
            queryString.push(`cat=${cat}`);
        }

        history.replace({
            search: `?${queryString.join('&')}`
        });

        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(getBuscaList, 1000);
        setResultOpacity(0.3);
        setPaginaAtual(1);
    }, [q, cat]);

    useEffect( () => {
        const getStates = async () => {
            const lista = await api.getStates();
            setEstadoLista(lista);
        }
        getStates();
    }, []);

    useEffect( () => {
        const getDestaques = async () => {
            const destaq = await api.getDestaques();
            setDestaques(destaq);
        }
        getDestaques();
    }, []);
        
    let paginacao = [];

    for(let i = 1; i <= contaPagina; i++) {
        paginacao.push(i);
    }

    return (
        <PageContainer >
            <PageArea>
                <div className="leftSide">
                    <form method="GET">
                        <input
                            type="text"
                            name="q"
                            placeholder="O que procura?"
                            value={q}
                            onChange={ e => setQ(e.target.value)}
                        />
                        {/* <div className="filterName">Estado:</div>
                        <select name="state">
                            <option></option>
                            {estadoLista.map((i, k) => 
                                <option key={k} value={i.name}>{i.name}</option>
                            )}
                        </select> */}
                        <div className="filterName">Categoria:</div>
                        <ul>
                                {destaques.map((i, k) => 
                                    <li
                                        key={k}
                                        className={cat == i.slug ? "categoriaItem active" : "categoriaItem"}
                                        onClick={() => setCat(i.slug)}
                                    >
                                        <img src={i.img} alt={i.name} />
                                        <span>{i.name}</span>
                                    </li>
                                )}
                        </ul>
                    </form>
                </div>
                <div className="rightSide">
                    {loading && conteudo.length === 0 && 
                        <div className="carregandoConteudo">{mensagemAguardo}</div>
                    }
                    {!loading && conteudo.length === 0 &&
                        <div className="carregandoConteudo">Sem Conteúdo.</div>
                    }
                    <div className="conteudo" style={{opacity:resultOpacity}}>
                        {conteudo.map((i, k) =>
                                <ConteudoItem key={k} data={i} />
                            )}
                    </div>
                    <div className="paginacao">
                        {paginacao.map((i, k) =>
                            <div onClick={() => setPaginaAtual(i)} key={k} className={i === paginaAtual ? 'pagItem active' : 'pagItem'}>{i}</div>
                        )}
                    </div>
                </div>
            </PageArea>
        </PageContainer>
    );
}

export default Page;