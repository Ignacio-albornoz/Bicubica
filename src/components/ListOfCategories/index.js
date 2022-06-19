import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { CategoriesWrap, List, Li, Button, P } from "./styles";

const ListOfCategoriesContainer = ({
  items = [],
  setCategory,
  setTitleCategory
}) => {
  const [categories, setCategories] = useState([]);
  const categoriesListFilter = [];
  const removeDuplicates = arr => {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  };

  useEffect(() => {
    items.map(item => {
      categoriesListFilter.push(item.attributes[2].value_name);
    });

    setCategories(() => removeDuplicates(categoriesListFilter));
  }, [items]);

  return (
    <CategoriesWrap>
      <List>
        {categories
          ? categories.map(item => (
              <Li key={item.id}>
                <Button
                  onClick={() => setCategory(item) & setTitleCategory(item)}
                >
                  <P>{item.toUpperCase().split(" ", 1)}</P>
                </Button>
              </Li>
            ))
          : console.log("esperando categorias")}
      </List>
    </CategoriesWrap>
  );
};

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

export const ListOfCategories = connect(
  mapStateToProps,
  null
)(ListOfCategoriesContainer);
