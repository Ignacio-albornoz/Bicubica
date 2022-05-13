import React, {useState} from 'react';
import { BrowserRouter, Switch, Route, useParams } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer } from './reducers'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import { GlobalStyle } from './GlobalStyled'
import { Layout } from './components/Layout/index'
import { Home } from './Pages/Home/index'
import { Detail } from './Pages/Detail/index'
import { Test } from './Pages/Test/index'



const initialState = {
    "users": [
      {
        "id": "7ec3d2f0-641e-11e9-9d5d-1b8ad05606d1",
        "password": "$2b$10$RNCVsIxNLKP8Gl.BPoedXuwGczl527UfsLDYcb.9V856ng4kxULrS",
        "favs": [
          "18",
          "1"
        ],
        "avatar": "https://gravatar.com/avatar/8e04be7dab487d77f16969fd3e0d45d4",
        "email": "miduga@gmail.com"
      }
    ],
      "categories": [
        {
          "id": 1,
          "title": "geo",
          "path": "/frames/geo",
          "visit": 0
        },
        {
          "id": 2,
          "title": "set",
          "path": "/frames/set",
          "visit": 0
        },
        {
          "id": 3,
          "title": "vintage",
          "path": "/frames/vintage",
          "visit": 0
        },
        {
          "id": 4,
          "title": "acuarela",
          "path": "/frames/acuarela",
          "visit": 0
        },
        {
          "id": 5,
          "title": "carteleras",
          "path": "/frames/carteleras",
          "visit": 0
        },
        {
          "id": 6,
          "title": "frases",
          "path": "/frames/frases",
          "visit": 0
        },
        {
          "id": 7,
          "title": "XXL",
          "path": "/frames/set",
          "visit": 0
        },
        {
          "id": 8,
          "title": "fotografias",
          "path": "/frames/vintage",
          "visit": 0
        },
        {
          "id": 9,
          "title": "arquitectura",
          "path": "/frames/acuarela",
          "visit": 0
        },
        {
          "id": 10,
          "title": "abstracto",
          "path": "/frames/carteleras",
          "visit": 0
        },
        {
          "id": 11,
          "title": "frases",
          "path": "/frames/frases",
          "visit": 0
        },
        {
          "id": 12,
          "title": "set",
          "path": "/frames/set",
          "visit": 0
        },
        {
          "id": 13,
          "title": "vintage",
          "path": "/frames/vintage",
          "visit": 0
        },
        {
          "id": 14,
          "title": "acuarela",
          "path": "/frames/acuarela",
          "visit": 0
        },
        {
          "id": 15,
          "title": "carteleras",
          "path": "/frames/carteleras",
          "visit": 0
        },
        {
          "id": 16,
          "title": "frases",
          "path": "/frames/frases",
          "visit": 0
        }
    ],
    "photos": [
      {
        "id": 11,
        "categoryId": 1,
        "src": "https://cuadrosguapadeco.com.ar/pub/media/catalog/product/cache/64ce1ded4c6b2a41ca924b30258665a4/c/u/cuadro-vista-del-mar.jpg",
        "userId": 1,
        "likes": 40,
        
      },
      {
        "id": 5,
        "categoryId": 1,
        "src": "https://cuadrosguapadeco.com.ar/pub/media/catalog/product/cache/64ce1ded4c6b2a41ca924b30258665a4/c/u/cuadro-campo-paisaje-abstracto.jpg",
        "userId": 1,
        "likes": 0,
            
      },
      {
        "id": 2,
        "categoryId": 2,
        "src": "https://cuadrosguapadeco.com.ar/pub/media/catalog/product/cache/64ce1ded4c6b2a41ca924b30258665a4/c/u/cuadro-mar-playa-azul.jpg",
        "userId": 1,
        "likes": 3,
            
      },
      {
        "id": 9,
        "categoryId": 2,
        "src": "https://cuadrosguapadeco.com.ar/pub/media/catalog/product/cache/64ce1ded4c6b2a41ca924b30258665a4/l/a/lamina-paisaje-arbol-solitario.jpg",
        "userId": 1,
        "likes": 0,
            
      },
      {
        "id": 1,
        "categoryId": 1,
        "src": 
          "https://cuadrosguapadeco.com.ar/pub/media/catalog/product/cache/64ce1ded4c6b2a41ca924b30258665a4/l/a/laminas-minimalistas-de-lineas-modernas.jpg"  
        ,
        "userId": 1,
        "likes": 45,
        "title": "Circulos",
        "price": 6000,
        "visits": 0,
        "soldout": 0
      },
      {
        "id": 15,
        "categoryId": 4,
        "src": 'https://cuadrosguapadeco.com.ar/pub/media/catalog/product/cache/64ce1ded4c6b2a41ca924b30258665a4/c/u/cuadro-tu-eres-magico.jpg',
        "title": "Cuadrados",
        "userId": 1,
        "likes": 1
      },
      {
        "id": 18,
        "categoryId": 5,
        "src": "https://cuadrosguapadeco.com.ar/pub/media/catalog/product/cache/64ce1ded4c6b2a41ca924b30258665a4/c/u/cuadros-de-frases-mujer-bella.jpg",
        "userId": 2,
        "likes": 15,
        "title": "Pluma"
      },
      {
        "id": 16,
        "categoryId": 4,
        "src": 
          "https://cuadrosguapadeco.com.ar/pub/media/catalog/product/cache/64ce1ded4c6b2a41ca924b30258665a4/l/a/laminas-minimalistas-de-lineas-modernas.jpg"  
        ,
        "userId": 1,
        "likes": 1,
        "title": "Termo"    
      },
      {
        "id": 7,
        "categoryId": 2,
        "src": "https://cuadrosguapadeco.com.ar/pub/media/catalog/product/cache/64ce1ded4c6b2a41ca924b30258665a4/c/u/cuadros-de-frases-mujer-bella.jpg",
        "userId": 1,
        "likes": 40,
        "title": "Libro"
      },
      {
        "id": 12,
        "categoryId": 3,
        "src": "https://cuadrosguapadeco.com.ar/pub/media/catalog/product/cache/64ce1ded4c6b2a41ca924b30258665a4/c/u/cuadro-tu-eres-magico.jpg",
        "userId": 3,
        "likes": 6,
        "title": "Funda"
      },
      {
        "id": 13,
        "categoryId": 1,
        "src": "https://cuadrosguapadeco.com.ar/pub/media/catalog/product/cache/64ce1ded4c6b2a41ca924b30258665a4/c/u/cuadro-mar-playa-azul.jpg",
        "userId": 1,
        "likes": 7,
            
      },
      
      
      {
        "id": 8,
        "categoryId": 2,
        "src": "https://images.unsplash.com/photo-1447684808650-354ae64db5b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "userId": 1,
        "likes": 0,
            
      },
      {
        "id": 3,
        "categoryId": 2,
        "src": "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "userId": 1,
        "likes": 7,
            
      },
      {
        "id": 19,
        "categoryId": 6,
        "src": "https://images.unsplash.com/photo-1531523668299-e20047c89111?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "userId": 1,
        "likes": 0,
            
      },
      {
        "id": 4,
        "categoryId": 2,
        "src": "https://images.unsplash.com/photo-1500879747858-bb1845b61beb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "userId": 1,
        "likes": 27,
        
      },
      {
        "id": 10,
        "categoryId": 3,
        "src": "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "userId": 1,
        "likes": 0,
            
      },
      {
        "id": 17,
        "categoryId": 5,
        "src": "https://images.unsplash.com/photo-1515619363794-e826f7de3487?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "userId": 1,
        "likes": 21,
        
      },
      {
        "id": 6,
        "categoryId": 2,
        "src": "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "userId": 1,
        "likes": 0,
        
      },
      {
        "id": 20,
        "categoryId": 6,
        "src": "https://images.unsplash.com/photo-1522720833375-9c27ffb02a5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "userId": 1,
        "likes": 0,
            
      },
      {
        "id": 14,
        "categoryId": 2,
        "src": "https://images.unsplash.com/photo-1500879747858-bb1845b61beb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "userId": 1,
        "likes": 27,
        
      }
    ]
  
  }
  
const store = createStore( reducer, initialState)



export const App =  () => {

  const client = new ApolloClient({
    uri: 'https://bicubica-f124l87on.now.sh/graphql'
  })
    
  return(
    <BrowserRouter>
        <Provider store={store}>
            <ApolloProvider client={client}>
                <GlobalStyle/>
                <Switch>
                    <Layout id={location.pathname}>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/detail" component={Detail}/>
                        <Route exact path="/test" component={Test} />
                    </Layout>
                </Switch>
            </ApolloProvider>
        </Provider>
    </BrowserRouter>

)
}