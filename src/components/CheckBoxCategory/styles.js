import styled from 'styled-components'

export const CategoryWrap = styled.div`
    
    display:flex;
    top: 65px;
    border: 1px solid #fafafa;
    height: 0.8rem;
    width: 5.2rem;
    align-items: center;

`

export const Label = styled.label`
    position:relative;
    display: block;
    font-family: "Montserrat";
    cursor: pointer;
    font-size: 0.6rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
`

export const Input = styled.input`
    cursor: pointer;
    height: 0.6rem;
    width: 0.6rem;
    input:checked ~ .Span {
        background-color: #2196F3;
    }
`

