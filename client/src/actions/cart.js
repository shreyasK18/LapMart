import axios from 'axios';
import { getCartFromReducer,
    addCartFromReducer,
    removeCartFromReducer,
    cartErrorFromReducer,
    addItemToCartFromReducer,
    removeItemFromCartFromReducer,
    orderCartFromReducer, } from '../reducers/cart';
export const getCart = (id) =>async dispatch =>{
    try {
       
        const res =await axios.get(`/api/cart/${id}`);
        
        dispatch(getCartFromReducer(res.data))
        
    } catch (err) {
        dispatch(cartErrorFromReducer({
                    msg:err.response.statusText,
                    status:err.response.status
                }));
    }
}
export const addCart = (id,price) =>async dispatch =>{
    try {
        const config ={
            headers:{
                'Content-Type':'application/json'
            }
        }
        const items={
            
                item:id,
                count:1,
                price:price
            
        }
        const res =await axios.post(`/api/cart`,items,config);
        dispatch(addCartFromReducer(res.data));
        
    } catch (err) {
        console.log(err);
        dispatch(cartErrorFromReducer({
            msg:err.response.statusText,
            status:err.response.status
        }));
    }
}
export const addItemToCart = (id,itemid,price) =>async dispatch =>{
    try {
        const config ={
            headers:{
                'Content-Type':'application/json'
            }
        }
        const item={
            item:itemid,
            count:1,
            price
        }
        const res =await axios.put(`/api/cart/additem/${id}`,item,config);
        dispatch(addItemToCartFromReducer(res.data));
        
    } catch (err) {
        dispatch(cartErrorFromReducer({
            msg:err.response.statusText,
            status:err.response.status
        }));
    }
}

export const removeItemFromCart = (itemID) =>async dispatch =>{
    try {
        
        const res=await axios.delete(`/api/cart/removeitem/${itemID}`);
       
        dispatch(removeItemFromCartFromReducer(res.data));
    } catch (err) {
        dispatch(cartErrorFromReducer({
            msg:"Bad Request",
            status:400
        }));
    } 
}
export const orderCart = (name,credit,ship_ad,agree,id) =>async dispatch =>{
    try {
        const config ={
            headers:{
                'Content-Type':'application/json'
            }
        }
        const order_details={
            status:true,
            name:name,
            shipping_address:ship_ad,
            agreed_terms:agree,
            credit:credit
        }
        const res=await axios.put(`/api/cart/order/${id}`,order_details,config);
        dispatch(orderCartFromReducer(res.data));
    } catch (err) {
        dispatch(cartErrorFromReducer({
            msg:"Bad Request",
            status:400
        }));
    } 
}
export const removeCart = (id) =>async dispatch =>{
    try {
        const config ={
            headers:{
                'Content-Type':'application/json'
            }
        }
        const cartid={
            cartid:id
        }
       
      axios.delete(`/api/cart/`,cartid,config);
        
        dispatch(removeCartFromReducer(id));
    } catch (err) {
        dispatch(cartErrorFromReducer({
            msg:"Bad Request",
            status:400
        }));
    } 
}