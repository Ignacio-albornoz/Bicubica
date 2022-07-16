import React, { useRef, useEffect, useState } from "react";
import { CarouselItem } from "../CarouselItem";
import { MainImgWraper, ButtomsCWraper, Img, ButtonCarousel } from "./styles";
const CAROUSEL_IMAGE_SIZE = 500;


export const Carousel = ({ price,id , title, thumbnail_id,
  thumbnail,}) => {


  console.log(thumbnail_id)
  const [showImage, setImage] = useState(1);
  const element = useRef(null);
  console.log(price)
  const [itemImage, setItemImage] = useState(false);
  const API = `https://api.mercadolibre.com/pictures/?ids=${thumbnail_id}`;
  const SIZE_IMAGE = `${CAROUSEL_IMAGE_SIZE}x${CAROUSEL_IMAGE_SIZE}`;
  const URL_ID = `/detail/${id}`

  useEffect(() => {
    try {
      fetch(API)
      .then((res) => res.json())
      .then((data) => setItemImage(data[0].variations.filter((image) => image.size === SIZE_IMAGE)));

  } catch (e) {
      console.error(e);
  }
    
  }, []);
  
  return (
    <>
      <ButtomsCWraper>
        {/*data.map(item => (
          <li key={item.id}>
            <ButtonCarousel
              onClick={() => {
                setImage(item.id);
              }}
            >
              <CarouselItem Img={item.image} />
            </ButtonCarousel>
          </li>
        ))*/}
      </ButtomsCWraper>
      <MainImgWraper>
      {
                itemImage ?
                  <Img src={itemImage[0].url} alt='mainImg' /> :
                  <Img src={thumbnail} alt='mainImg' />
              }
      </MainImgWraper>
    </>
  );
};

