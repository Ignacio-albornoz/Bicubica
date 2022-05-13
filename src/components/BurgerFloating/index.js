import React from 'react';
import { BurgerMenuFloting } from './styles.js';
import { IoIosMenu,IoIosClose } from "react-icons/io";
import {Menu} from '../Menu/index'

export const BurgerFloting = ({ openFloting, setOpenFloting }) => {
  const Icon = openFloting ? IoIosClose : IoIosMenu
  return (
    <>
    <BurgerMenuFloting open={openFloting} onClick={() => setOpenFloting(!openFloting)}>
      <Icon size='1.0rem' border-radius='50%'/>
    </BurgerMenuFloting>
    <Menu open={openFloting}/>
    </>
  )
}