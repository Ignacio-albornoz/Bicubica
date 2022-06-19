import styled from "styled-components";

export const ContainerFooter = styled.div`
  width: 100%;
  background: #eeeae7;
  color: #fff;
  display: flex;
  position: relative;
  flex-direction: column;
  text-align: center;
  bottom: 0px;
`;
export const P = styled.p`
  display: inline;
  color: #fff;
  font-size: 1rem;
  font-family: "Montserrat";
  font-stretch: 1px;
  letter-spacing: -0.8px;
`;
export const Title = styled.h1`
  display: inline;
  font-family: "Montserrat";
  font-weight: 300;
  letter-spacing: -1.2px;
  text-decoration: none;
  font-size: 1rem;
  color: #fff;
`;

export const ButtonWrap = styled.div`
  width: 100%;
  background: rgb(160, 155, 149);
  display: flex;
  justify-content: center;
`;

export const ButtonSocialMedia = styled.a`
  margin: 2px 6px;
  display: flex;
  align-items: center;
  & svg {
    color: rgb(246, 240, 224);
    border-radius: 8px;
    padding: 2px;
  }
`;
