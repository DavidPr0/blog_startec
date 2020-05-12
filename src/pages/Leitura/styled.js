import styled from 'styled-components';

export const PageArea = styled.div`
    background: #dbdbdb;
    display: flex;
    .leftSide {
        background: #fff;
        width: 74%;
        margin-right: 1%;
        padding: 30px;
        color: #474747;

        header {
            margin-bottom: 30px;
        }
        h2 {
            font-family: 'Raleway-Bold';
            margin: 0;
            // color: #474747;
            font-size: 25px;
            height: 90px;
            overflow: hidden;
        }
        small {
            font-family: 'Raleway-LightItalic';
            font-size: 15px;
            // color: #474747;
        }
        p {
            // color: #474747;
        }
        footer {
            margin: 25px 0;
            display: flex;
            img {
                margin-right: 25px;
                border-radius: 50%;
                height: 130px;
            }
            h1 {
                font-size: 25px;
                font-family: 'Raleway-Bold';
                margin: 0;
                margin-top: 10px;
            }
            p {
                height: 60px;
                overflow: hidden;
                margin: 5px 0;
                font-size: 16px;
            }
        }
    }
    .leftSide {
        box-shadow: -1px 0px 30px 0px rgba(50, 50, 50, 0.42);
    }
    .rightSide {
        margin-left: 1%;
        width: 24%;
    }
`;

export const BodyArea = styled.div`
background: #dbdbdb;
.imgDestaque {
        margin-bottom: 20px;   
    }
    .imgDestaque img {
        width: 100%;
        height: 560px;
    }
`;

export const Loading = styled.div`
    height: ${props => props.height || 92}px;
    margin: 34px;
    background: #2873b52b;
`;

export const LoadingImg = styled.div`
    height: ${props => props.height || 92}px;
    margin: 0 60px;
    background: #2873b52b;
`;