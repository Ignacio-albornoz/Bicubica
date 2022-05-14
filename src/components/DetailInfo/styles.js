import styled from 'styled-components'

export const Title = styled.h3`
    font-family: 'Montserrat';
    font-weight: 600;
    letter-spacing: -1.2px;
    font-size: 1rem;
    color: #000;
    margin-bottom: 5px;
`

export const Price = styled.h3`
    font-family: 'Montserrat';
    font-weight: 600;
    letter-spacing: -0.2px;
    font-size: 1rem;
    color: #000000a1;
    margin-bottom: 7px;
`

export const Info = styled.p`
    font-family: 'Montserrat';
    font-weight: 300;
    letter-spacing: -0.7px;
    font-size: 1rem;
    color: #000000a6;
`

export const ButtonComprar = styled.button`
    font-size: 1rem;
    font-family: 'Montserrat';
    font-weight: 300;
    color: #fff;
    background: #000;
    border-radius: 8px;
    margin: 15px auto;
    width: 50%;
    padding: 2%;
    box-shadow: 0 0px 1px rgb(0, 0, 0.15);
    :hover{
        box-shadow: 0 0px 5px rgb(0, 0, 0.45);
        
    }
`
