import React from "react";
import { Item } from "../Item/index";
import { connect } from "react-redux";
import { Container, List, Li } from "./styles";

export const StoreListItemsContainer = ({ photos }) => (
  <Container>
    <List>
      {photos.map(item => (
        <Li key={item.id}>
          <Item {...item} />
        </Li>
      ))}
    </List>
  </Container>
);

const mapStateToProps = state => {
  return {
    photos: state.photos,
  };
};

export const StoreListItems = connect(
  mapStateToProps,
  null
)(StoreListItemsContainer);
