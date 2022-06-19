import React, { useRef, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { WrapBarSearch, Form, ButtonSearcher } from "./styles";

export const SearchBar = ({ open, setOpenSearch }) => {
  const element = useRef(null);

  const handleBlur = e => {
    console.log("on click Search Bar");
    setOpenSearch(false);
  };

  useEffect(
    function() {
      if (open === true) {
        element.current.focus();
      }
    },
    [open]
  );

  return (
    <WrapBarSearch onBlur={handleBlur} open={open}>
      <Form ref={element} placeholder="Buscar..."></Form>
      <ButtonSearcher>
        <IoIosSearch size="1.4rem" />
      </ButtonSearcher>
    </WrapBarSearch>
  );
};
