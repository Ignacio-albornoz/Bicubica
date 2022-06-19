import React, { useState, useEffect } from "react";
import { Anchor, Image, Title, Price } from "./styles";
import { addDetailId } from "../../redux/actions";
import { connect } from "react-redux";

const DEFAULT_IMAGE =
  "https://resources.sears.com.mx/medios-plazavip/fotos/productos_sears1/original/2869376.jpg";

export const ItemContainer = ({
  src = DEFAULT_IMAGE,
  title = "Cuadro muestra",
  price = "1.500",
  thumbnail_id = {},
  thumbnail,
  id,
  addDetailId,
  render = false,
}) => {
  const [itemImage, setItemImage] = useState(false);
  const API = `https://api.mercadolibre.com/pictures/?ids=${thumbnail_id}`;
  const SIZE_IMAGE = "400x400";
  const URL_ID = `/detail/${id}`
  
  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data =>
        setItemImage(
          data[0].variations.filter(image => image.size === SIZE_IMAGE)
        )
      );

  }, []);
  return (
    <>
      <Anchor rel='preload' to={URL_ID} onClick={ () => { addDetailId(id) }}>
        {itemImage ? (
          <Image render={render} src={itemImage[0].url} alt="mainImg" />
        ) : (
          <Image src={thumbnail} alt="preImg" />
        )}
        <Title>{title}</Title>
        <Price>${price}</Price>
      </Anchor>
    </>
  );
};

const mapDispatchToProps = {
  addDetailId,
};

export const Item = connect(null, mapDispatchToProps)(ItemContainer);
