import styled from 'styled-components'

export const ImgWrapper = styled.div`
  display: block;
  height: 0;
  overflow: hidden;
  padding: 80.25% 0 0 0;
  position: relative;
  width: 100%;
  background: #a09b95;
`

export const Img = styled.img`
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  object-fit: cover;
  position: absolute;  
  top: 0px;
  height: 100%;
  z-index: 0;
  width: 100%;
  
  
`
export const WrapTitle = styled.div`
  position: absolute;
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    top: 125px;
    left: 0;
    right: 0;
    top: 30px;
    bottom: 0;
    padding: 5%;
    margin: auto;
  z-index:1;
  
  border: 2px solid #fff;
    text-align: center;
    border-radius: 5px;
  text-align:center;
`

export const TitleHero = styled.h1`
  font-family: 'Montserrat';
  font-weight: 600;
  color: #ffffffc9;
  font-size: 0.70rem;
`
export const P = styled.p`
  font-family: 'Montserrat';
  font-weight: 300;
  color: #ffffffc9;
  font-size: 0.6rem;
  
`