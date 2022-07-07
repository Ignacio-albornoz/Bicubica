import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { WrapLayout } from "./styles";
import { NavBar } from "../NavBar/index";
import { Hero } from "../Hero/index";

export const LayoutContainer = ({props, detailId})=> {
  const [renderFix, setRenderFix] = useState(<Hero />);
  const [show, setShow] = useState(false);
  const URI = location.pathname.split('/')
  

  useEffect(
    function() {

      switch (location.pathname) {
        case "/":
          setRenderFix(<Hero />);
          setShow(true);
          break;

        case `/detail/${URI[2]}`:
          setRenderFix(false);
          setShow(false);
          break;
          
        case "/detail/":
          setRenderFix(<Hero text="Store" />);
          setShow(true);
          break;

        case "/test":
          setRenderFix(<Hero text="Store" />);
          setShow(true);
          break;


        default:
          setRenderFix(<Hero />);
          setShow(true);
          break;
      }
    },
    [window.location.href]
  );

  return (
    <WrapLayout>
      <NavBar />
      {show && renderFix}
      {props.children}
    </WrapLayout>
  );
};

const mapStateToProps = (state, props) => {
  return {
    detailId: state.detailId,
    props: props
  };
};

export const Layout = connect(mapStateToProps, null)(LayoutContainer);
