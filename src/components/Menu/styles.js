import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 35vh;
  min-height: 220px;
  text-align: center;
  padding: 1.1rem;
  position: absolute;
  z-index: 4;
  background: #fff;
  left: 0px;
  right: 0;
  top: 0px;
  transition: clip-path 0.7s ease-in-out;

  clip-path: ${({ open }) =>
    open ? "circle(150% at 0% 0%)" : "circle(0% at 0% 0%)"};

  @media (min-width: 719px) {
    height: 45vh;
    min-height: 220px;
  }
`;

export const A = styled(Link)`
  font-size: 1rem;
  border-top: 1px solid #0000000f;
  text-transform: uppercase;
  padding: 0.5rem 0;
  font-weight: bold;
  letter-spacing: 1px;
  text-decoration: none;
  transition: color 0.3s linear;
  text-decoration-style: none;
  color: black;
  font-family: "Montserrat";
  font-weight: 300;

  @media (max-width: 425px) {
    font-size: 1rem;
    text-align: center;
  }

  &:hover {
  }
`;
