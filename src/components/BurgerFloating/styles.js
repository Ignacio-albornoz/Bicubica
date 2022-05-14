import styled, {css} from 'styled-components';


export const BurgerMenuFloting = styled.button`
  display: flex;
  align-items: center;
  width: 2rem;
  height: 1.6rem;
  position: relative;
  z-index: 10;
  top: 12px;
  

  & svg {
    padding:1px;
    size: 2rem;
    border-radius: 50%;
    color: rgba(0, 0 , 0, 0.75);
    box-shadow: 0 4px 5px rgba(0, 0, 0, .1);
  }

  & svg:hover{
    box-shadow: 0 5px 5px rgba(0, 0, 0, .3);
    background: rgba(0, 0 , 0, 0.03);
  }
`