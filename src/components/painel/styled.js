import styled from 'styled-components';

export const PainelArea = styled.div`
background-color:#f7b63b;
height: 70px;
border-bottom: 1px solid #ccc;
    .container {
        max-width: 1000px;
        margin:auto;
        display:flex;
    }

    .usuario {
        flex:1;
        display:flex;
        img{
            border:2px solid #ccc;
            border-radius:50%;
            height: 60px;
            width: 60px;
            margin: 5px 0;
        }
        h1 {
            font-size:17px;
            color: #fff;
            margin-left: 10px
        }
        p {
            font-size: 13px;
            flex-wrap: wrap;
        }
    }
    nav {
        padding-top: 10px;
        padding-bottom:10px;

        ul, li {
            padding:0;
            list-style:none;
        }
        ul {
            display:flex;
            align-items:center;
        }
        li {
            margin-top: -3px;
            margin-left: 7px
        }
        a {
            font-size: 20px;
            color: #fff;
        }
    }
    .btn_experimentar {
        a, button{
            color: #fff;
            border:none;
            -webkit-transition: all .3s;
            transition: all .3s;
            background: #cb601a;
            padding: 8px 30px;
            border-radius: 19px;
            font-family: "Raleway-Bold";
            font-size: 17px;
            text-transform: uppercase;
            cursor:pointer;
            outline:0;
            width: 100px;

            &:hover {
                color: #fff;
                background: #f7b63b;
            }
        }
    }
    .admin {
        margin: 4px
    }

`;