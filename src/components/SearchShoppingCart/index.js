import React, {useState, useEffect, Ref} from 'react'
import { Search, ShoppingCart, WrapButtons} from './styles'
import { IoIosSearch, IoIosCart} from "react-icons/io";
import {SearchBar} from '../SearchBar'

export const SeachShoppingCart = () => {
    
    const[ openSearch, setOpenSearch] = useState(false)
    
    

    return(
    <WrapButtons>
        <Search onClick={ () => setOpenSearch(!openSearch)} >
            <IoIosSearch size='0.8rem'/>
        </Search>
        <SearchBar  setOpenSearch={setOpenSearch} open={openSearch} />
        <ShoppingCart>
            <IoIosCart size='0.8rem'/>
        </ShoppingCart>
    </WrapButtons>
)
}