import styled from 'styled-components';

export const WrapBarSearch = styled.div`
    display: flex;
    max-width: 76vw;
    align-items: center;
    justify-content: space-between;
    text-align:center;
    flex-direction: row;
    position: absolute;
    background: transparent;
    z-index: 2;
    background: #fff;
    height: 2rem;
    left: 0;
    right: 0;
    margin: auto;
    top: 3rem;
    border-radius: 8px;
    padding: 0 4px;
    transition: clip-path 0.45s ease-in-out;
    clip-path: ${({ open }) => open ? 'circle(150% at 100% 0%)' : 'circle(0% at 100% 0%)'};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

`

export const Form =  styled.input`
    width: 96%;
    font-size: 1rem;
    height: 1.5rem;
    color: black;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    background: #fff;
    border-style: none;
    padding-left: 1%;
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
    background: #fff;
`