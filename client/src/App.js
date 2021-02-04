import logo from './logo.svg';
import './App.css';
import React, { Fragment, useEffect } from 'react';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Landing from './components/layouts/Landing';
import ItemDetails from './components/Item/ItemDetails';
import Cart from './components/layouts/Cart';
import NotFound from './components/layouts/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Items Fetch
import { getItems } from './actions/items';
const App=() => {
  useEffect(()=>{
    store.dispatch(getItems());
   },[]);
  return (
    <Provider store={store}>
      <Router>
        
       
        <Header/>
        <Switch>
          <Route exact path='/' component={Landing} /> 
          <Route exact path='/cart' component={Cart} /> 
           
          <Route exact path='/item/:id' component={ItemDetails}/>

          <Route component={NotFound}/>
        </Switch>
        <Footer/>
       
      </Router>
   </Provider>
  );
}

export default App;
