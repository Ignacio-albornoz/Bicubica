import styled, {keyframes} from 'styled-components'
import { Link } from 'react-router-dom'

export const hoverAnimation = keyframes`
  from {
    transform: scale(0.3);
    opacity: 0
  }

  to {
    transform: scale(1);
    opacity: 1
  }
`

export const Anchor = styled(Link)`
  display: block;
  overflow: hidden;
  position: relative;
  text-align: center;
  text-decoration: none;
  background: #fff;
  width: 100%;
  border-radius: 2%; 
  margin: 2px;
  padding: 10px 0;
  :hover{
  }
`

export const Image = styled.img`
  border-radius: 2%;
  height: auto;
  overflow: hidden;
  object-fit: fill;
  height: auto;
  width: 100%;
  margin:-30px;
  margin-top: 5px;
  margin-bottom: 5px;
  
`

export const Title = styled.p`
    font-size: 1rem;
    margin: 0px;
    font-weight:300;
    font-style: italic;
    margin-top: -5px;
    font-family: 'Montserrat';
    color: #000;

`
export const Price = styled.p`
    font-family: 'Montserrat';
    font-size: 1rem;
    font-weight:600;
    margin: 3px;
    color: #000;
`