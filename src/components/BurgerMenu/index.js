import React from 'react';
import { BurgerMenu } from './styles.js';
import { IoIosMenu,IoIosClose } from "react-icons/io";
import {Menu} from '../Menu/index'


export const Burger = ({ open, setOpen }) => {
  const Icon = open ? IoIosClose : IoIosMenu
  return (
    <>
    <BurgerMenu open={open} onClick={() => setOpen(!open)}>
      <Icon size='1.8rem' border-radius='50%'/>
    </BurgerMenu>
    <Menu open={open} setOpen={setOpen}/>
    </>
  )
}