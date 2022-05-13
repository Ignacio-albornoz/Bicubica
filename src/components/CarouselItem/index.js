import React from 'react'
import {Image} from './styles'

const DEFAULT_IMAGE = 'https://cuadrosguapadeco.com.ar/pub/media/catalog/product/cache/64ce1ded4c6b2a41ca924b30258665a4/c/u/cuadro-tu-eres-magico.jpg'


export const CarouselItem = ({Img = DEFAULT_IMAGE, title = 'Cuadro muestra'}) => {
    
    return(
        
        <Image src={Img} alt={title}/>

)
}