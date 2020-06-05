import styled from 'styled-components';

export const HeaderArea = styled.div`
background-color:#fff;
height: 70px;
border-bottom: 1px solid #ccc;
    .container {
        max-width: 1000px;
        margin:auto;
        display:flex;
    }
    .logoHeader {
        margin: 10px 5px;
        width: 110px;
        height: 50px;
    }
    .logo {
        flex:1;
        display:flex;
    }
    nav {
        padding-top: 10px;
        padding-bottom:10px;

        ul, li {
            margin:0;
            padding:0;
            list-style:none;
        }
        ul {
            display:flex;
            align-items:center;
        }
        a {
            font-size: 20px;
            color: #b3b3b5;
        }
    }
    .spanTopo {
        background: #b3b3b5;
        width: 2px;
        height: 50px;
        margin: 0 15px;
    }
    .btn_experimentar a {
        color: #fff;
        -webkit-transition: all .3s;
        transition: all .3s;
        background: #cb601a;
        padding: 8px 30px;
        border-radius: 19px;
        font-family: "Raleway-Bold";
        font-size: 17px;
        text-transform: uppercase;
        width: 100px;
        &:hover {
            color: #fff;
            background: #f7b63b;
        }
    }
    .admin {
        margin: 4px
    }
@media (max-width: 600px) {
    & {
        height: auto;
    }
    .container {
        flex-direction: column;
    }
    .logo {
        justify-content: center;
    }
    nav {
        margin: 0 auto;
    }
    .spanTopo {
        margin: 0 7px;
    }
}
`;