import './App.css';
import React, { useEffect } from 'react';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Landing from './components/layouts/Landing';
import ItemDetails from './components/Item/ItemDetails';
import Cart from './components/layouts/Cart';
import NotFound from './components/layouts/NotFound';
import CheckOut from './components/layouts/CheckOut';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Items Fetch
import { getItems } from './actions/items';

const App=() => {
  useEffect(()=>{
    store.dispatch( getItems());
  
   });
   const initialState={declaration:false};
 
  return (
    <Provider store={store}>
      <Router>
        <Header/>
        <main>
        <Switch>
          <Route exact path='/' render={(props)=><Landing {...props} initialState={initialState}></Landing>}  /> 
          <Route exact path='/cart' component={Cart} /> 
          <Route exact path='/checkout/:id' component={CheckOut}/>
          <Route exact path='/item/:id' component={ItemDetails}/>
          <Route component={NotFound}/>
        </Switch>
        </main>
        <Footer/>
      </Router>
   </Provider>
  );
}

export default App;
