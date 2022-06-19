import React, { useEffect, useState, useRef } from "react";
import { Item } from "../Item/index";
import { connect } from "react-redux";
import { Container, List, Li, Title } from "./styles";

const ListOfItemsContianer = ({
  items,
  categoryNumber = false,
  title = "Geo"
}) => {
  const [showFixed, setShowFixed] = useState(false);
  const [renderOne, setRenderOne] = useState(false)
  const element = useRef(null);
  useEffect(
    function() {
      const onScroll = e => {
        const newShowFixed = element.onmouseenter < 20;
        showFixed !== newShowFixed && setShowFixed(newShowFixed);
      };
      //document.addEventListener('scroll', onScroll)
      document.addEventListener("onmouseenter", onScroll);

      return () => document.removeEventListener("onmouseenter", onScroll);
    },
    [showFixed]
  );

  const filterData = items.filter(item => item.attributes[2].value_name == categoryNumber)

  console.log(filterData.length)


  return (
    <Container>
      <Title>{title.charAt(0).toUpperCase() + title.slice(1)}</Title>
      {
        categoryNumber ? 
        <List render={filterData.length}>
          {filterData.map(item => (
            <Li key={item.id}>
              <Item {...item} render={filterData.length}></Item>
            </Li>
          ))}
        </List> :
        <List render={items.length}>
        {items.map(item => (
          <Li key={item.id}>
            <Item {...item} render={false}></Item>
          </Li>
        ))}
        </List>
      
      }
      {/* <List render={filterData.length}>
          {filterData.map(item => (
            <Li key={item.id}>
              <Item {...item} render={filterData.length}></Item>
            </Li>
          ))}
      </List> */}
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

export const ListOfItems = connect(mapStateToProps, null)(ListOfItemsContianer);
