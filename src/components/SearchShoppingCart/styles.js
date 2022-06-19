import Styled from "styled-components";

export const WrapButtons = Styled.div`
  display:flex;
  width: 100%;
  height: inherit;
  justify-content: flex-end;
  & button {
    padding:1px;
    align-items: center;
    color: rgba(0, 0 , 0, 0.75);
  }
  button:hover{
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    background: rgba(0, 0 , 0, 0.05);
  }
`;

export const Search = Styled.button`
  display: flex;
  align-items: center;
  justify-content:center;
  width: 1.9rem;
`;
export const ShoppingCart = Styled.button`
  display: flex;
  justify-content:center;
  width: 1.9rem;  
`;
