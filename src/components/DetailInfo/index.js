import React from 'react';
import {Title, Price, Info, ButtonComprar} from './styles'



export const DetailInfo = ({ titleCuadro = 'Cuadro Muestra', price = '10.500',  description = ''}) => (

    <>
            <Title>{titleCuadro}</Title>
            <Price>$ {price}</Price>
            <Info>TRUST YOURSELF LÁMINA

                * Láminas Fine Art impresas sobre papel Fine Art Hahnemühle® de acabado mate libre de ácido.

                * Tipo de Impresión: Técnica "Giclée" utilizando impresoras de gran formato de 12 tintas pigmentadas.

                * La impresión se realiza en nuestro taller y se somete a un control de calidad final antes de enviarse.
            </Info>
            <ButtonComprar>Comprar</ButtonComprar>
        </>
)
