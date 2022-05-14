import styled, { keyframes } from 'styled-components'

const moventUp = keyframes`
  from{
    top: 50vh;
  }
  to{
    top: 0
  }
`


export const Container = styled.div`
    min-height: 46vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center ;
    text-align:center;
    padding-top: 10px;
    position: relative;
    z-index: 1;
    overflow-x:hidden;
    background: #fff;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation: 1.3s ${moventUp} ease-in-out;
    box-shadow: 0 2px 2px #a09b95;

    @media only screen and (max-width: 456px){
      min-height: 56vh;
    }

    @media only screen and (max-width: 425px){
      min-height: 56vh;
    }
    @media only screen and (max-width: 344px){
      min-height: 60vh;
    }
`

export const Title = styled.h1`
    margin-bottom: -2px;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 1.2rem;
    margin-top: 15px;
`
export const List = styled.ul`
  display: flex;
  flex-flow: wrap;
  justify-content:center;
  margin-top: 13px;
  overflow-y:hidden;
  width: 100%;
  flex-direction: row;
`

export const Li = styled.li`
  padding: 5px 1px;
  margin-bottom: 15px;
  margin: 0 7px;
  width: 45%;
  
  & a {
    margin-bottom: 7px;
  }
  a:hover{
    box-shadow: 3px 3px 5px rgba(0, 0, 0, .2);
  }
`