import styled, { css } from "styled-components";

export const BurgerMenu = styled.button`
  display: flex;
  align-items: center;
  width: 2rem;
  height: 1.6rem;
  position: relative;
  z-index: 10;

  & svg {
    padding: 1px;
  }

  & svg:hover {
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
    background: rgba(0, 0, 0, 0.01);
  }
`;
