import React, {useRef, useEffect, useState} from 'react';
import {CarouselItem} from '../CarouselItem'
import {MainImgWraper, ButtomsCWraper, Img, ButtonCarousel} from './styles'

const Imagenes = [
        {
            "id":1,
            "image":'https://cuadrosguapadeco.com.ar/pub/media/catalog/product/cache/64ce1ded4c6b2a41ca924b30258665a4/l/a/laminas-minimalistas-de-lineas-modernas.jpg',
            "title": 'mainImage'
        },
        {
            "id":2,
            "image":'https://cuadrosguapadeco.com.ar/pub/media/catalog/product/cache/64ce1ded4c6b2a41ca924b30258665a4/c/u/cuadro-tu-eres-magico.jpg',
            "title": 'image2'
        },
        {
            "id":3,
            "image":'https://cuadrosguapadeco.com.ar/pub/media/catalog/product/cache/64ce1ded4c6b2a41ca924b30258665a4/c/u/cuadro-con-la--frases-textos-cree-en-ti.jpg',
            "title": 'image3'
        },
        {
            "id":4,
            "image":'https://cuadrosguapadeco.com.ar/pub/media/catalog/product/cache/64ce1ded4c6b2a41ca924b30258665a4/c/u/cuadros-de-frases-mujer-bella.jpg',
            "title": 'image4'
        }
]


const DEFAULT_IMAGE = 'https://cuadrosguapadeco.com.ar/pub/media/catalog/product/cache/64ce1ded4c6b2a41ca924b30258665a4/c/u/cuadro-tu-eres-magico.jpg'

export const Carousel = ({data= Imagenes , cover = DEFAULT_IMAGE}) => {
    const [showImage, setImage] = useState(1)
    const element = useRef(null)

    

    return(
        <>
        
        <ButtomsCWraper>
        {
          data.map(item => <li key={item.id}><ButtonCarousel onClick={
              () => {setImage(item.id)}}><CarouselItem Img={item.image}/></ButtonCarousel></li>)
        }
        </ButtomsCWraper>
        <MainImgWraper>
            {
                data.map(item => <Img imageShow={showImage} id={item.id} key={item.id} src={item.image} alt='mainImage'/>)
            }
        </MainImgWraper>
        </>
    )
}