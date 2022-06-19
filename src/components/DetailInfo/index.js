import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Title, Price, Info, ButtonComprar, ButtonShow} from "./styles";

export const DetailInfo = ({
  detailId,
  title,
  price,
  description,

}) => {
  

  const number = description.length;
  const descriptionLength = number / 2;
  const [showMore, setShowMore] = useState(500);
  const ShowMore = () => {
    showMore > description.length ? setShowMore(300) : setShowMore( showMore + descriptionLength )
  }
  console.log(number);

  return(
  
  <>
    <Title>{title}</Title>
    <Price>${price}</Price>
    <Info>
      {descriptionLength ? description.split('', showMore) : 'loading'}
    </Info>
    <ButtonShow onClick={() => ShowMore()}> ver mas </ButtonShow>

    <ButtonComprar>Comprar</ButtonComprar>
  </>
  
);}

