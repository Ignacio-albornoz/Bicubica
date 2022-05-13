import React from 'react'
import { connect } from 'react-redux'
import {CategoriesWrap, List, Li, Button, P} from './styles'


const ListOfCategoriesContainer = ({ categories, setCategory, setTitleCategory}) => {
    return(
        <CategoriesWrap>
            <List>
                {
                    categories.map(item => <Li key={item.id}><Button onClick={()=> setCategory(item.id) & setTitleCategory(item.title)}><P>{item.title.charAt(0).toUpperCase() + item.title.slice(1) }</P></Button></Li>)
                }
            </List>
        </CategoriesWrap>
    )
    
}

const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}

export const ListOfCategories = connect(mapStateToProps, null)(ListOfCategoriesContainer)