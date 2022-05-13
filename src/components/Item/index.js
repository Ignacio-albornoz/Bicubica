import React from 'react'
import {Anchor, Image, Title, Price} from './styles'

const DEFAULT_IMAGE = 'https://resources.sears.com.mx/medios-plazavip/fotos/productos_sears1/original/2869376.jpg'


export const Item = ({src = DEFAULT_IMAGE, title = 'Cuadro muestra', price = '1.500'}) => {
    
    return(
        <Anchor to='/detail' >
        <Image src={src} alt="mainImg"/>
        <Title>{title}</Title>
        <Price>${price}</Price>
    </Anchor>
)
}