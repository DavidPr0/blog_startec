import styled from 'styled-components';

export const PageArea = styled.div`
display: flex;
margin-top: 20px;
width: 100%;

.leftSide {
    width: 25%;
    margin-right: 10px;
    .filterName {
        font-size: 15px;
        margin: 10px 0;
    }
    input, select {
        height: 40px;
        padding: 10px;
        border-radius: 50px;
        outline: 0;
        border: 2px solid #e76006;
        color: #000;
        width: 100%;
        font-size: 15px;
        font-family:"Raleway-Regular";
    }
    ul, li {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .categoriaItem {
        display: flex;
        align-items: center;
        padding: 10px;
        border-radius: 50px;
        color: #000;
        cursor: pointer;
        img {
            width: 25px;
            height: 25px;
            margin-right: 5px;
        }
        span{
            font-size: 14px;
        }
    }
    .categoriaItem:hover, 
    .categoriaItem.active {
        background: #F7B63B;
        color:#fff;
    }
}
.rightSide {
    width: 75%;
    .carregandoConteudo {
        padding: 30px;
        text-align: center;
    }
    .conteudo{
        display: flex;
        flex-wrap: wrap;

        .contItem{
            width: 32%;
            margin-left: 1%;
        }
    }
    .paginacao {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px 0;
        .pagItem {
            width: 25px;
            height: 25px;
            border: 1px solid #2873b5;
            display: flex;
            justify-content: center;
            font-size: 14px;
            margin-right: 5px;
            padding-top: 2px;
            cursor: pointer;
            transition: all .3s;
            &:hover {
                border: 1px solid #f7b63b;
                color: #f7b63b;
            }
            &.active {
                background: #e76006;
                border: 1px solid #e76006;
            }
        }
    }
}

@media (max-width: 600px) {
    & {
        flex-direction: column;
    }
    .leftSide, .rightSide {
        width: 90%;
        margin: auto;
    }
    .categoriaItem {
        // justify-content: center;
    }
    .rightSide {
        .conteudo{
            display: flex;
            flex-wrap: wrap;

            .contItem{
                width: 90%;
                margin: auto;
            }
        }
    }
}
`;
