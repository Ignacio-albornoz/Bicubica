import React, {useState}from 'react';
import {Hero} from '../../components/Hero/index'
import { useRouteMatch } from 'react-router-dom'
import {ListOfItems} from '../../components/ListOfItems/index'
import {Categories} from './styles'
import {ListOfCategories} from '../../components/ListOfCategories/index'
import {Footer} from '../../components/Footer/index'

export const Home =  () => {

    const [category, setCategory] = useState(1)
    const [titleCategory, setTitleCategory] = useState('Mas Vendidos')

    return(
    
    <div>
        <Categories>
            <ListOfCategories setCategory={setCategory} setTitleCategory={setTitleCategory}/>
            <ListOfItems categoryNumber={category} title={titleCategory} />
        </Categories>
        <Footer/>
        
    </div>

)}