import React, { useState } from 'react';
import { Conteu, Loadings } from './styled';
import { Link } from 'react-router-dom';
import  { useParams } from 'react-router-dom';

export default (props) => {
    // const [loading, setLoading] = useState(true);
    return (
        <Conteu className="contItem">
            <Link to={`/ad/${props.data.id}`}>
                <div className="contImagem">
                    {props.loading && <Loadings />}
                    <img src={props.data.image} alt="" />
                </div>
                <header>
                    {props.loading && <Loadings />}
                    <p>Publicado em 28/04/2020</p>
                    <h1>{props.data.title} Lorem ipsum dolor sit amet, consectetur adipiscing elit Aliquam nonummy aucto Pellentesque habitant morbi tristique senectus</h1>
                </header>
            </Link>
        </Conteu>
    );
}