import styled from 'styled-components';

export const SearchArea = styled.div`
    background: #b3b3b557;
    border-bottom: 1px solid #ccc;
    padding: 40px 0;

    .searchBox {
        background: #F7B63B;
        padding: 20px 15px;
        box-shadow: 1px 1px 1px 0.3 rgba(0,0,0,0.2);
        display: flex;
        border-radius: 50px;

        input {
            font-family:"Raleway-Regular";
            font-size: 16px;
            // flex: 1;
        }
        button {
            position:relative;
            overflow:hidden;
            z-index:1;
            border-radius: 0% 16% 16% 0% / 50% 50% 50% 50%;
            cursor:pointer;
            height: 42px;
            top:-1px;
            font-size: 17px;
            color:#fff;
            padding-left: 30px;
            font-family:"Raleway-Bold";
            width:150px;
            text-align:center;
            border: none;
            outline:none;
            margin-left:-29px;
            &:hover:after{
                box-shadow:0 0 0 90px #2873B5;
                background: #2873B5;
                width: 4.6rem;
            }
        }
        button:before, button:after {
            content:'';
            position:absolute;
            top:0;
            bottom:0;
            background:#F7B63B;
            z-index:-1;
        }

        button:before, button:after {
            top:-3px;
            bottom:-3px;
            border-radius:10em;
            width:3.5em;
            z-index:-1;
            box-shadow:0 0 0 90px #E76006;
            transition: all .5s;
        }
        button:before {left:-1.55em;}
        button:after {right:-1.55em;width: 0em;}
        form {
            flex: 1;
            display: flex;

            input {
                height: 40px;
                border: 0;
                border-radius: 50px;
                outline: 0;
                padding: 10px;
                color: #000;
                z-index:2;
                margin-left: 8px;
            }
            
        }
        .blogContato {
            display: flex;
            input {
                height: 40px;
                border: 0;
                padding: 10px;
                border-radius: 50px;
                outline: 0;
                color: #000;
                margin-right: 20px;
                z-index:2;
                font-family:"Raleway-Regular";
            }
            button{
                font-size:15px;
                width:181px;
                margin-left: -44px;
                margin-right: 13px;
                border-radius: 0% 12% 12% 0% / 50% 50% 50% 50%;
                &:hover:after{
                    width: 6.8rem;
                }
            }
        }
    }
    .destaque {
        display:flex;
        flex-wrap: wrap;
        margin: 40px 0;
        overflow:hidden;
        
        .destaquesItem {
            position: relative;
            width: 49%;
            display: flex;
            align-items: center;
            margin: 0 0.5%;
            overflow:hidden;
            transition: all .3s;
            border-radius: 10px;
            // height: 350px;

            &:hover .bg-img {
                transform: scale(1.2);
            }
            :before, :after {
                content: ' ';
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                pointer-events: none;
                transition: all .5s;
            }
            :before {
                background: #080810;
                opacity: .3;
                transition: opacity 0.2s;
                z-index: 1;
            }
            &:hover:before {
                opacity: .8;
                background-image: linear-gradient(135deg,rgba(51,179,211,.95) 0%,rgba(56,51,211,.95) 100%);
            }
            &:hover:after {
                opacity: .3;
                z-index: 1;
            }
            .destaq-titulo {
                padding: 25px;
                margin: 0;
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                background-image: linear-gradient(to bottom,transparent 0%,rgba(0,0,0,.8) 110%);
                z-index: 1;
                h1 {
                    position:relative;
                    font-size: 25px;
                    font-family:"Raleway-Bold";
                    color: #fff;
                    z-index: 10;
                }
            }
            .bg-img {
                transition: all .3s;
                border-radius: 10px;
                transform: scale(1.3);
                img {
                    width: 100%;
                }
            }
        }
        .subDestaquesItem {
            position: relative;
            width: 32.33%;
            display: flex;
            align-items: center;
            margin: 10px 0.5%;
            overflow:hidden;
            transition: all .3s;
            border-radius: 10px;
            // height: 350px;

            &:hover .bg-img {
                transform: scale(1.2);
            }
            :before, :after {
                content: ' ';
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                pointer-events: none;
                transition: all .5s;
            }
            :before {
                background: #080810;
                opacity: .3;
                transition: opacity 0.2s;
                z-index: 1;
            }
            &:hover:before {
                opacity: .8;
                background-image: linear-gradient(135deg,rgba(51,179,211,.95) 0%,rgba(56,51,211,.95) 100%);
            }
            &:hover:after {
                opacity: .3;
                z-index: 1;
            }
            .subDestaq-titulo {
                padding: 25px;
                margin: 0;
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                background-image: linear-gradient(to bottom,transparent 0%,rgba(0,0,0,.8) 110%);
                z-index: 1;
                h1 {
                    position:relative;
                    font-size: 15px;
                    font-family:"Raleway-Bold";
                    color: #fff;
                    z-index: 10;
                }
            }
            .bg-img {
                transition: all .3s;
                border-radius: 10px;
                transform: scale(1.3);
                img {
                    width: 100%;
                }
            }
        }
    }
    .centroDivisor{
        margin-bottom: 25px;
    }
    .blogContatoDivisor {
        display: flex;
        flex: 1;
        padding: 0 12px;
        input {
            height: 40px;
            border: 0;
            padding: 10px;
            border-radius: 50px;
            outline: 0;
            flex: auto;
            color: #000;
            margin-right: 20px;
            z-index:2;
            font-family:"Raleway-Regular";
        }
        button{
            font-size:15px;
            width:181px;
            margin-left: -44px;
            border-radius: 0% 12% 12% 0% / 50% 50% 50% 50%;
            &:hover:after{
                width: 6.8rem;
            }
        }
        span {
            font-size: 15px;
            background: #2873b5;
            line-height: 42px;
            border-radius: 25px;
            padding: 0 12px;
            margin-left: 22px;
            color: #fff;
        }
    }
    
`;

export const PageArea = styled.div`
.conteudo {
    display: flex;
    flex-wrap: wrap;
}
.btn_verT {
    margin: 40px;
    display:flex;
}
.seeAllConteudo {
    color: #fff;
    text-decoration: none;
    display: inline-block;
    background: #e76006;
    margin: 0 auto;
    font-family: 'Raleway-Bold';
    font-size: 15px;
    padding: 10px 45px;
    text-transform: uppercase;
    transition: all .4s;
    &:hover {
        opacity: .8;
        background-image: linear-gradient(135deg,rgba(51,179,211,.95) 0%,rgba(56,51,211,.95) 100%);
    }
}

`;
