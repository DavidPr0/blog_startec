import React from 'react';
import { Conteu } from './styled';
import { Link } from 'react-router-dom';
export default (props) => {

    return (
        <Conteu className="contItem">
            <Link to={`/ad/${props.data.id}`}>
                <div className="contImagem">
                    <img src={props.data.image} alt="" />
                </div>
                <header>
                    <p>Publicado em 28/04/2020</p>
                    <h1>{props.data.title} Lorem ipsum dolor sit amet, consectetur adipiscing elit Aliquam nonummy aucto Pellentesque habitant morbi tristique senectus</h1>
                </header>
            </Link>
        </Conteu>
    );
}