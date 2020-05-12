import React, { useState, useEffect } from 'react';
import { SearchArea, PageArea } from './styled';
import useApi from '../../helpers/BlogAPI';
import ConteudoItem from '../../components/partials/ConteudoItem';

import { PageContainer } from '../../components/MainComponents';
import PainelTopo from '../../components/painel';
import { Link } from 'react-router-dom';

const Page = () => {
    const api = useApi();

    const [ estadoLista, setEstadoLista ] = useState([]);
    const [ destaques, setDestaques ] = useState([]);
    const [ conteudo, setConteudo ] = useState([]);

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
    
    useEffect( () => {
        const getConteudo = async () => {
            const json = await api.getCont({
                sort: 'desc',
                limit: 8
            });
            setConteudo(json.ads);
        }
        getConteudo();
    }, []);
    
    return (
        <>
            <SearchArea>
                <PageContainer>
                    <div className="searchBox">
                        <form method="GET" action="/ads">
                            <input type="text" name="q" placeholder="Busca..." />
                            <button>Pesquisar</button>
                        </form>
                        <div className="blogContato">
                            <input type="text" name="q" placeholder="Deixe-nos seu contato" />
                            <button>Seja nosso Parceiro</button>
                        </div>
                    </div>
                    <div className="destaque">
                        {/* {destaques.map((i, k) => 
                            <Link key={i.key} to={`/ads?cat=${i.slug}`} className="destaquesItem">
                                <img src={i.img} alt="" />
                                <span>{i.name}</span>
                            </Link>
                        )} */}
                        <Link to="/" className="destaquesItem">
                            <div className="destaq-titulo">
                                    {/* <img src={i.img} alt="" /> */}
                                    <h1>Novas tecnologias Chegarão ao mercado logo após essa pandemia</h1>
                                    {/* <span></span> */}
                            </div>
                            <div className="bg-img">
                                <img src="https://macmagazine.uol.com.br/wp-content/uploads/2020/04/18-airpods-1536x864.jpg.webp" alt="" />
                            </div>
                        </Link>
                        <Link to="/" className="destaquesItem">
                            <div className="destaq-titulo">
                                    {/* <img src={i.img} alt="" /> */}
                                    <h1>Avanço da Covid-19 não para mas continuamos isolados</h1>
                                    {/* <span></span> */}
                            </div>
                            <div className="bg-img">
                                <img src="https://macmagazine.uol.com.br/wp-content/uploads/2020/03/04-Apple-Store-funcionarios-1260x840.jpg" alt="" />
                            </div>
                        </Link>
                        <Link to="/" className="subDestaquesItem">
                            <div className="subDestaq-titulo">
                                    {/* <img src={i.img} alt="" /> */}
                                    <h1>Vendas no varejo recuam 11,7% em março, mostra índice da Cielo</h1>
                                    {/* <span></span> */}
                            </div>
                            <div className="bg-img">
                                <img src="https://abrilexame.files.wordpress.com/2020/03/gettyimages-1207671528-1.jpg" alt="" />
                            </div>
                        </Link>
                        <Link to="/" className="subDestaquesItem">
                            <div className="subDestaq-titulo">
                                    {/* <img src={i.img} alt="" /> */}
                                    <h1>“Precisamos reverter parte do lucro para sociedade”, diz VP do Carrefour</h1>
                                    {/* <span></span> */}
                            </div>
                            <div className="bg-img">
                                <img src="https://abrilexame.files.wordpress.com/2020/04/dsc6621baixa.jpg" alt="" />
                            </div>
                        </Link>
                        <Link to="/" className="subDestaquesItem">
                            <div className="subDestaq-titulo">
                                    {/* <img src={i.img} alt="" /> */}
                                    <h1>Rede J.C. Penney, ex-dona da Renner, pode quebrar com coronavírus</h1>
                                    {/* <span></span> */}
                            </div>
                            <div className="bg-img">
                                <img src="https://abrilexame.files.wordpress.com/2020/04/size_960_16_9_penney3.jpg" alt="" />
                            </div>
                        </Link>
                    </div>
                    <div className="centroDivisor">
                        <div className="searchBox">
                            {/* <form method="GET" action="/ads">
                                <input type="text" name="q" placeholder="Busca..." />
                                <button>Pesquisar</button>
                            </form> */}
                            <div className="blogContatoDivisor">
                                <input type="text" name="q" placeholder="Deixe-nos seu contato" />
                                <button>Seja nosso Parceiro</button>
                                <span>Código para desconto: OKSKHJX</span>
                            </div>
                        </div>
                    </div>
                <PageArea>
                    <div className="conteudo">
                        {conteudo.map((i, k) =>
                            <ConteudoItem key={k} data={i} />
                        )}

                    </div>
                    <div className="btn_verT">
                        <Link to="/ads" className="seeAllConteudo">Carregar Mais</Link>
                    </div>

                    <hr/>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing."
                </PageArea>
            </PageContainer>
        </SearchArea>
        </>
    );
}

export default Page;