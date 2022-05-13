import React, {useEffect, useState, useRef}from 'react'
import { Item } from '../Item/index'
import { connect } from 'react-redux'
import {Container, List, Li, Title} from './styles'

const ListOfItemsContianer = ( {photos, categoryNumber = 1, title = 'Geo'} ) => {
    const [showFixed, setShowFixed] = useState(false)
    const element = useRef(null)
    useEffect(function () {
        const onScroll = e => {
            const newShowFixed = element.onmouseenter < 20;
            showFixed !== newShowFixed && setShowFixed(newShowFixed)
        }
        //document.addEventListener('scroll', onScroll)
        document.addEventListener('onmouseenter', onScroll)

        return () => document.removeEventListener('onmouseenter', onScroll)
    }, [showFixed])

    
    
    return (
        <Container >
            <Title>{title.charAt(0).toUpperCase() + title.slice(1)}</Title>
            <List>
                {
                  photos.filter(photo => photo.categoryId == categoryNumber).map(item => <Li key={item.id}><Item  {...item}></Item></Li>)
                }
            </List>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        photos: state.photos
    }
}

export const ListOfItems = connect(mapStateToProps, null)(ListOfItemsContianer)
