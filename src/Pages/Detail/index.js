import React from 'react'

import {Container, DetailWrap, CarouselWrap} from './styles'
import {Carousel} from '../../components/Carousel/index'
import {DetailInfo} from '../../components/DetailInfo/index'

export const Detail =  () => (
    <>
        <Container>
            <CarouselWrap>
                <Carousel/>
            </CarouselWrap>
            <DetailWrap>    
                <DetailInfo/>
            </DetailWrap>
        </Container>
    </>

    )
