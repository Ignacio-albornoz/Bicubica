import React, {useEffect, useState} from "react";
import {NavBar} from '../NavBar/index';
import { Hero } from '../Hero/index';



export const Layout = (props) => {
  const [renderFix, setRenderFix] = useState(<Hero/>)
  const [show, setShow] = useState(false)

  useEffect(function(){
    switch(location.pathname ){
      case "/":
        setRenderFix(<Hero/>)
        setShow(true)
        break;

      case "/detail":
        setRenderFix(false)
        setShow(false)
        break;

      case "/test":
        setRenderFix(<Hero text="Store"/>)
        setShow(true)
        break;

      default:
        setRenderFix(<Hero/>)
        setShow(true)
        break;
    }
    }, [window.location.href])
  
  
  
  return (
    <React.Fragment>
      <NavBar />
      {show && renderFix}
      {props.children}
    </React.Fragment>
  );
}

