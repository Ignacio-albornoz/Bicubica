import React from 'react'
import { Item } from '../Item/index'
import { connect } from 'react-redux'
import {Container, List, Li} from './styles'

export const StoreListItemsContainer = ({photos})  => (
        <Container >{console.log(photos)}
            <List>
                {
                  photos.map(item => <Li key={item.id}><Item {...item}/>{console.log(item.id)}</Li>)
                }
            </List>
        </Container>
)

const mapStateToProps = state => {
    return {
        photos: state.photos
        
    }
}

export const StoreListItems = connect(mapStateToProps, null)(StoreListItemsContainer)


