import styled from 'styled-components';

export const WrapBarSearch = styled.div`
    display: flex;
    width: 80%;
    align-items: center;
    text-align:center;
    flex-direction: row;
    position: absolute;
    background: transparent;
    z-index: 2;
    padding-left: 1.5%;
    padding-right: 3%;
    background: #fff;
    height: 1.5rem;
    left: 0;
    right: 0;
    margin: auto;
    top: 2rem;
    border-radius: 8px;
    padding: 0;
    transition: clip-path 0.45s ease-in-out;
    clip-path: ${({ open }) => open ? 'circle(150% at 100% 0%)' : 'circle(0% at 100% 0%)'};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

`

export const Form =  styled.input`
    width: 88%;
    font-size: 0.6rem;
    height: 1.5rem;
    color: black;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    background: #fff;
    border-style: none;
    padding-left: 5%;
    font-family: 'Montserrat';
    input:focus {
        outline-offset: none;
        
    }

    :focus {
        outline: none;
       
    }

`
export const ButtonSearcher = styled.button`
    width: 1.5rem;
    height: 1.5rem;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-left: 1px solid rgba(0, 0, 0, 0.05);
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    background: #fff;
`