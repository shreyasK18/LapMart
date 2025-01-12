import { useState } from 'react'
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer'; 
import Landing from './components/layouts/Landing'; 
import ItemDetails from './components/Item/ItemDetails';
import NotFound from './components/layouts/NotFound';
import Cart from './components/layouts/Cart';
import CheckOut from './components/layouts/CheckOut';

import {  Route, Routes } from 'react-router-dom';
import { getCart } from './actions/cart';
import { getItems } from './actions/items';
import items from './reducers/items';
import store from './store';
import { useEffect } from 'react';
function App() {
  const [count, setCount] = useState(0)
  const initialState={declaration:false};
  useEffect(()=>{
    store.dispatch(getItems())
    
  })
  return (
    <>


    <Header/>
        <main>
        <Routes>
        <Route path="/" element={<Landing  
          getCart={getCart}
          getItems={getItems}
          items={items}
         initialState={initialState} />}/>
       <Route  path='/' render={(props)=><Landing {...props} initialState={initialState}></Landing>}  /> 
         <Route exact path='/cart' element={<Cart/>} /> 
          <Route exact path='/checkout/:id' element={<CheckOut/>}/>
          <Route exact path='/item/:id' element={<ItemDetails/>}/>
          <Route element={<NotFound/>}/> 
        </Routes>
        </main>
        <Footer/>
    </>
  )
}

export default App
