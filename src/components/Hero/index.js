import React from 'react';
import {Img, WrapTitle ,P , ImgWrapper, TitleHero} from './styles'


const DEFAULT_IMG2 = 'https://peakvisor.com/img/news/cascade-mountains.jpg'
const DEFAULT = 'https://image.freepik.com/foto-gratis/maqueta-pared-interior-sofa-gris-claro-decoraciones_42637-239.jpg'


export const Hero = ({ text = "Cuadros & Laminas"}) => (
    <>
    <ImgWrapper>
        <Img />
        <WrapTitle>
            <TitleHero>{text}</TitleHero>
            <P>Bicubica</P>
        </WrapTitle>
    </ImgWrapper>
    </>
) 