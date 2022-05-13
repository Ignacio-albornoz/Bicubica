import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    align-items: center;
    text-align:center;
    padding-top: 10px;
    margin-bottom: -20px;
    position: relative;
    z-index: 1;
    background: #fff;
    width: 100%;

`


export const List = styled.ul`
  display: flex;
  justify-content:center;
  margin-top: 13px;
  overflow-x: none;
  width: 100%;
  flex-flow: wrap;
  
`

export const Li = styled.li`
  padding: 5px 1px;
  margin-bottom: 15px;
  width: 45%;
  & a {   
    margin-bottom: 7px;
  }
  a:hover{
    box-shadow: 3px 3px 5px rgba(0, 0, 0, .2);
    
  }
`