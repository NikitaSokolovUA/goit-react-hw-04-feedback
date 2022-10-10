import styled from "@emotion/styled";

export const ButtonList = styled.ul`
    display: flex;
    gap: 20px
`

export const Button = styled.button`
    padding: 10px 20px;
    border-radius: 5px;
    border:none;
    background-color: d3d3d3;
    cursor: pointer;

    :hover, :focus{
        background-color: green;
    }
`