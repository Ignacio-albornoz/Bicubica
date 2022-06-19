import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import { Container, DetailWrap, CarouselWrap } from "./styles";
import { Carousel } from "../../components/Carousel/index";
import { DetailInfo } from "../../components/DetailInfo/index";

export const DetailContainer = ({ detailId, items} ) => {
  const [item, setItem] = useState([]);
  const API = `https://api.mercadolibre.com/items/${detailId}/description`;
  const [description, setDescription] = useState(false);

  useEffect(() => {

    const data = (items.filter((item) => item.id === detailId));
    fetch(API).then((res) => res.json()).then((data) => setDescription(data.plain_text));
    setItem(data[0]);

  }, [detailId]);


return(
  <>
    <Container>
      <CarouselWrap>
        <Carousel {...item}/>
      </CarouselWrap>
      <DetailWrap>
        <DetailInfo {...item} description={description}/>
      </DetailWrap>
    </Container>
  </>
)}

const mapStateToProps = (state, props) => {
  return {
    items: state.items,
    detailId: props.match.params.detailId,
  };
};

export const Detail = connect(
  mapStateToProps,
  null
)(DetailContainer);