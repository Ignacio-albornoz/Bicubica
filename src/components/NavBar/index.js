import React, { useState, useEffect, useRef } from 'react'
import {NavBarContainer, Tittle, InteractionButtons} from './styles'
import {SeachShoppingCart} from '../SearchShoppingCart'
import {Burger} from '../BurgerMenu/index'
import { BurgerFloting } from '../BurgerFloating/index'

export const NavBar = () => {
  const element = useRef(null)
  const [show, setShow] = useState(null)
  const [open, setOpen] = useState(false)
  const [openFloting, setOpenFloting] = useState(false)

  useEffect(function (){
    const observer = new window.IntersectionObserver(function(entries){
      const { isIntersecting } = entries[0]
      if(isIntersecting === false){
          console.log(open)
          open ? 
          setOpenFloting(true) : setOpenFloting(false) 
          setShow(true)
          setOpen(null)
      }
      else{
        setShow(null)  
      }
    })
    observer.observe(element.current)
  }, [element])

  

  const renderNavbar = (fixed ) => (
    <NavBarContainer ref={element} fixed={fixed}>
      {
        <>
        {fixed ? <BurgerFloting openFloting={openFloting} setOpenFloting={setOpenFloting} /> 
        :<Burger open={open} setOpen={setOpen}/>}
        <Tittle to='/' fixed={fixed}>Bicubica</Tittle>
        <InteractionButtons fixed={fixed}>
          <SeachShoppingCart/>
        </InteractionButtons>
        </>
      }
    </NavBarContainer>
  )

  return(
    <>
    {renderNavbar()}
    {show && renderNavbar(true)}
    </>
  )
  }

