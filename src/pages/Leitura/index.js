import React, { useState, useEffect } from 'react';
import  { useParams } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import { PageArea, BodyArea, Loading, LoadingImg } from './styled';
import useApi from '../../helpers/BlogAPI';
import VerticalContItem from '../../components/partials/VerticalContItem';

import { PageContainer } from '../../components/MainComponents';

const Page = () => {
    const api = useApi();
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [leituraInfo, setLeituraInfo] = useState([]);
    const [ conteudo, setConteudo ] = useState([]);

    useEffect( () => {
        const getConteudo = async () => {
            const json = await api.getCont({
                sort: 'desc',
                limit: 3
            });
            setConteudo(json.ads);
            setLoading(false);
        }
        getConteudo();
    }, []);

    useEffect( () => {
        const getLeituraInfo = async (id) => {
            const json = await api.getContInfo(id, true);
            setLeituraInfo(json);
            setLoading(false);
        }
        getLeituraInfo(id);
    }, []);
    const formataData = (d) => {
        let cData = new Date(d);

        let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
        let cDia = cData.getDate();
        let cMes = cData.getMonth();
        let cAno = cData.getUTCFullYear();

        return `${cDia} de ${meses[cMes]} de ${cAno}`;
    }

    return (
        <>
            <BodyArea>
                <div className="imgDestaque">
                {loading && <LoadingImg height={540} />}
                    {leituraInfo.images && 
                        <Slide>
                                {leituraInfo.images.map((img, k) =>
                                    <div >
                                        <img src={img} alt="" />
                                    </div>
                                )
                                }
                        </Slide>
                        // <img src="https://macmagazine.uol.com.br/wp-content/uploads/2020/04/18-airpods-1536x864.jpg.webp" />
                    }
                </div>
                <PageContainer>
                    <PageArea>
                        <div className="leftSide">
                            <header>
                                {loading && <Loading height={700} />}
                                {leituraInfo.title && 
                                    <h2>{leituraInfo.title} Lorem ipsum mattis fermentum tempor consequat himenaeos, fermentum tellus viverra libero lorem felis, id scelerisque at id maecenas. feugiat gravida vehicula nibh orci dictum mattis, rutrum libero</h2>
                                }
                                {leituraInfo.dateCreated &&
                                    <small>Publicado em {formataData(leituraInfo.dateCreated)}</small>
                                }
                            </header>
                            <p>{leituraInfo.description} Scelerisque velit est fames porta vulputate blandit neque duis lacus, dapibus lacinia ipsum phasellus placerat vulputate habitant lorem, ornare maecenas aliquet cursus dapibus duis scelerisque nec. taciti senectus mi etiam elit sapien ut nullam tempus, tempor laoreet nam quisque mollis conubia class, rhoncus sit pharetra tempus magna feugiat viverra. orci mauris neque in scelerisque vivamus aliquam pulvinar vulputate consequat, morbi habitant luctus at lectus cursus taciti lorem, et cubilia aliquet hendrerit semper lacinia aliquam consequat. neque proin class fusce vestibulum curabitur rhoncus quis, vivamus quisque risus nisl metus ut. gravida hac sem eget donec hendrerit nec magna urna ligula elementum fames ante, aliquam libero habitant egestas porta urna vulputate velit imperdiet vulputate. </p>
                            <p>{leituraInfo.description} Eu nisi vivamus tellus proin nullam elementum tempor vivamus magna, nisi volutpat sem justo cubilia rutrum gravida ornare commodo, fermentum aliquet sociosqu convallis aptent justo torquent primis. et fusce leo nulla aptent imperdiet litora bibendum, venenatis fringilla gravida quam purus quam, phasellus urna tempor metus in est. porta eu fusce nam ullamcorper massa mauris tempus sollicitudin, etiam pretium quisque ut turpis suscipit mauris, posuere fermentum enim pulvinar ac erat etiam. est eleifend augue ut mi molestie senectus vestibulum in sapien, tellus ac elit aenean mattis elementum eu interdum imperdiet, sociosqu praesent a hac suspendisse etiam quam egestas. </p>
                            <p>{leituraInfo.description} Integer non venenatis nunc orci aptent augue nostra suspendisse enim ullamcorper, consequat nullam augue commodo volutpat adipiscing litora et etiam porttitor, dolor metus elit semper lorem litora lorem ad iaculis. vehicula dictum consequat risus nisl potenti lacus, potenti ut lacus a ultrices per, a lorem massa condimentum iaculis. felis proin aptent mattis quisque gravida tristique elementum per, sapien praesent quam fusce varius erat suscipit aenean, torquent nisi ac torquent nullam turpis elit. mattis feugiat integer aliquam neque facilisis euismod hac non fames purus leo gravida libero elementum, quam aliquam orci gravida ante ultrices duis inceptos aptent interdum taciti tempus sapien.</p>
                            {leituraInfo.views &&
                                <small>Visualizações: {leituraInfo.views}</small>
                            }
                            <footer>
                                <div className="AutorImg">
                                    {leituraInfo.images && 
                                        <img src={leituraInfo.images[0]} alt="" />
                                    }
                                </div>
                                <div className="AutorInfo">
                                    <h1>David Santos</h1>
                                    <p>Bibendum habitant lorem magna tristique inceptos enim pulvinar, eu inceptos tortor blandit aliquam accumsan quisque, aenean euismod condimentum class urna mollis. ipsum auctor tempor per vestibulum blandit massa mattis adipiscing fringilla habitasse, fermentum odio rutrum auctor eros in lorem torquent fringilla varius, justo massa </p>
                                </div>
                            </footer>
                        </div>
                        <div className="rightSide">
                        {conteudo.map((i, k) =>
                            <VerticalContItem key={k} data={i} />
                        )}
                        </div>
                    </PageArea>
                </PageContainer>
            </BodyArea>
        </>
    );
}

export default Page;