import styled from 'styled-components'

export const CategoriesWrap = styled.div`
    display:flex;
    flex-direction: column;
    border-bottom: 1.2px solid rgba(0, 0, 0, 0.05);
    position: relative;
    z-index: 5;
    overflow: hidden;
    width: 100vw;
    font-family: "Montserrat";
    font-weight: 600;
    font-size: .8rem;
    background: #fff;
`

export const List = styled.ul`
    width: 100vw;
    display: flex;
    justify-content:flex-start;
    flex-direction: row;
    overflow-x:scroll;
    padding: 1% 2%;
`

export const Li = styled.li`
    list-style-type:none;
    display: flex;
    justify-content: center;
    
`

export const Button = styled.button`
    display: flex;
    min-width: inherit;
    border-radius: 8px;
    justify-content:center;
    color: rgb(246, 240, 224);
    background: #a09b95;
    text-align: center;
    padding: 0 10px;
    box-shadow: 0 4px 5px rgba(0, 0, 0, .3);
    margin: 5px 2px 5px 2px;
    :hover{
        box-shadow: 0 4px 5px rgba(0, 0, 0, .4);
        background: #EEEAE7;
        color: #a09b95;
    }
`

export const P = styled.p`
    font-size: 0.5rem;
    font-family: "Montserrat";  
    margin: 5% 8%;
`