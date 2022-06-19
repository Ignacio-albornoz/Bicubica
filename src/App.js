import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./redux/reducer";
import initialState from "../initialState.json";
import { GlobalStyle } from "./GlobalStyled";
import { Layout } from "./components/Layout/index";
import { Home } from "./Pages/Home/index";
import { Detail } from "./Pages/Detail/index";
import { Test } from "./Pages/Test/index";

export const App = () => {
  const [activeDarkmode, setActiveDarkmode] = useState(false);
  const [search, setSearch] = useState("cuadros nordicos");
  const [items, setItems] = useState(false);
  const API = `https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=25`;

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setItems(data));
  }, [search]);


  initialState.items = items.results;
  const store = createStore(reducer, initialState);

  return (
    <>
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          {
            items ? 
            <Layout location={location.pathname}>
              <Route exact path="/" component={Home} />
              <Route exact path='/detail/:detailId' component={Detail} />
              <Route exact path="/test" component={Test} />
              <Route exact path='/detail/undefined' component={Home} />
            </Layout>:
            console.log('aaa')

        }
        </Switch>
      </Provider>
    </BrowserRouter>
    {
      items ? <GlobalStyle /> : <GlobalStyle />
    }
    </>
  );
};
