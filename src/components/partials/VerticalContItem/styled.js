import styled from 'styled-components';

export const Conteu = styled.div`
    width: 100%;
    a {
        box-shadow: -1px 0px 12px 0px rgba(50, 50, 50, 0.42);
        margin: 0 0 10% 5%;
        display: block;
        // margin-bottom: 20px;
        background: #fff;
        padding-bottom: 7px;
        transition: all .2s;
        &:hover {
            // transform: scale(1.03);
            background: #2873b52b;
        }
    }
    .contImagem img {
        width: 100%;
        height: 130px;
    }
    header{
        margin: 0px 15px;
        h1 {
            font-family: 'Raleway-Bold';
            color: #474747;
            font-size: 15px;
            height: 104px;
            width: 100%;
            overflow: hidden;
        }
        p {
            font-family: 'Raleway-Regular';
            font-style: italic;
            font-size: 12px;
            color: #474747;
        }
    }
`;

export const Loadings = styled.div`
    height: ${props => props.height || 134}px;
    margin: 0px 10px 12px 10px;
    background: #2873b52b;
`;