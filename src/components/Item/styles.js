import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";

export const hoverAnimation = keyframes`
  from {
    transform: scale(0.3);
    opacity: 0
  }

  to {
    transform: scale(1);
    opacity: 1
  }
`;

export const Anchor = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center ;
  align-items: center;
  overflow: hidden;
  position: relative;
  text-align: center;
  text-decoration: none;
  background: #fff;
  border-radius: 2%;
  margin: 2px;
  padding: 10px 0;
  :hover {
  }
`;

export const Image = styled.img`
  border-radius: 2%;
  height: auto;
  overflow: hidden;
  object-fit: fill;
  height: auto;
  margin: -30px;
  margin-top: 5px;
  margin-bottom: 5px;
  ${props => props.render > 1 ? css`
    max-width: 200px;
  `:
  css`
    max-width: 400px;
  ` }
`;

export const Title = styled.p`
  font-size: 0.8rem;
  margin: 0px;
  font-weight: 300;
  font-style: italic;
  margin-top: -5px;
  font-family: "Montserrat";
  color: #000;
`;
export const Price = styled.p`
  font-family: "Montserrat";
  font-size: 1.2rem;
  font-weight: 600;
  margin: 3px;
  color: #000;
`;
