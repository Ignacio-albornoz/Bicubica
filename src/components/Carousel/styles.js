import styled, { css }from 'styled-components'



export const MainImgWraper = styled.div`
    width: 80%;
    display: flex;
    justify-content: flex-end;
    position: relative;
    margin: 0;
    padding: 0;
    z-index: 0;
    
    @media (max-width: 724px) {
        width: 72%;
        object-fit: contain;
         
    }
    @media (max-width: 428px) {
        width: 90%;
        object-fit: contain;
        
    }
    

    
`
export const ButtomsCWraper = styled.ul`
    width: 17%;
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    height: 8rem;
    top: 10px;
    margin: 15% 0;
    padding: 0;
    z-index:1;
    overflow-x: hidden;
    overflow-y: scroll;
`

export const Img = styled.img`
    width: inherit;
    display:flex;
    object-fit: contain;
    margin: 0;
    opacity: 0;
    border-radius: 2px;
    left: 0;
    right: 0;
    transition: clip-path 0.7s ease-in-out;
    clip-path: circle(0% at 0% 100%);
    ${props => props.imageShow == props.id && css`
      opacity: 1;
      clip-path: circle(150% at 0% 100%);
      position: absolute;
    `}

    @media (max-width: 770px) {
        width: 95%;
    }
    @media (max-width: 425px) {
        width: 95%;
    }
`

export const ButtonCarousel = styled.button`
    width: 2.0rem;
    height: 2.5rem;
    z-index:3;
      
`