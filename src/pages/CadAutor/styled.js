import styled from 'styled-components';

export const PageArea = styled.div`

form {
    background: #fff;
    border-radius: 3px;
    padding: 10px;
    box-shadow: 0px 0px 10px #999;
    .area {
        display: flex;
        align-items: center;
        padding: 10px;
        max-width: 500px;
        .area--title {
            width: 200px;
            text-align: right;
            padding-right: 20px;
            font-family: Raleway-Bold;
            font-size: 14px;
        }
        .area--input {
            flex: 1;

            input, textarea, select {
                width:100%;
                font-size: 14px;
                padding: 5px;
                border: 1px solid #ddd;
                border-radius: 3px;
                outline: 0;
                transition: all .5s;
                &:focus {
                    border: 1px solid #333;
                    color: #333;
                }
            }
            textarea {
                height: 100px;
                resize: none;
            }
            button {
                background: #E76006;
                border: 0;
                outline: 0;
                padding: 5px 10px;
                border-radius: 4px;
                color: #fff;
                font-size: 15px;
                cursor: pointer;
                font-family: Raleway-Bold;
                transition: all .5s;
                &:hover {
                    background: #F7B63B;
                }
            }
        }
    }
}
`;
