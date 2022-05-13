import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    display:flex;
    position:absolute;
    flex-direction: column;
    justify-content:center;
    top:50px;
    overflow-x: hidden;
`

export const CarouselWrap = styled.div`
    width: 100%;
    display:flex;
    justify-content: space-between;
    margin-bottom: 7px;
    padding-left: 2%;
    @media (min-width: 719px) {
      height: 85vh;
    }
`

export const DetailWrap = styled.div`
width: 98%;
display: block;
position: relative;
z-index: 5;
border-top: 1px solid #0000000a;
display:flex;
flex-direction:column;
padding: 4%;

`