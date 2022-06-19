import styled from "styled-components";

export const Container = styled.div`
  height: 99vh ;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 48px;
  overflow-x: hidden;

`;

export const CarouselWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 7px;
  padding-left: 2%;
  height: 55vh;
  
`;

export const DetailWrap = styled.div`
  max-width: 1024px;
  display: block;
  position: relative;
  z-index: 5;
  border-top: 1px solid #0000000a;
  display: flex;
  flex-direction: column;
  padding: 2%;
`;
