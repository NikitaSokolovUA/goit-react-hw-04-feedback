import styled from "@emotion/styled";

export const ButtonList = styled.ul`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 0;
`

export const Button = styled.button`
    min-width: 100px;
    padding: 10px 20px;
    border-radius: 5px;
    border:none;
    cursor: pointer;   
    font-weight: 500;
    font-size: 16px;
    line-height: 1.14; 
    background-color: #d3d3d3;
    transition: color 250ms linear;
    transition: background-color 250ms linear;

    :hover, :focus{
        background-color: #2196F3;
        color: white;
    }

    ::first-letter{
        text-transform: uppercase;
    }
`