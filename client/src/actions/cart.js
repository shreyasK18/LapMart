import axios from 'axios';
import { ADD_CART, REMOVE_CART ,CART_ERROR, ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, GET_CART,ORDER_CART} from './types';

export const getCart = (id) =>async dispatch =>{
    try {
       
        const res =await axios.get(`/api/cart/${id}`);

        dispatch({
            type:GET_CART,
            payload:res.data
        });
        
    } catch (err) {
       
        dispatch({
            type:CART_ERROR,
            payload:{
                msg:err.response.statusText,
                status:err.response.status
            }
        });
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

        dispatch({
            type:ADD_CART,
            payload:res.data
        });
        
    } catch (err) {
       
        dispatch({
            type:CART_ERROR,
            payload:{
                msg:err.response.statusText,
                status:err.response.status
            }
        });
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

        dispatch({
            type:ADD_ITEM_TO_CART,
            payload:res.data
        });
        
    } catch (err) {
       
        dispatch({
            type:CART_ERROR,
            payload:{
                msg:err.response.statusText,
                status:err.response.status
            }
        });
    }
}

export const removeItemFromCart = (itemID) =>async dispatch =>{
    try {
        
        const res=await axios.delete(`/api/cart/removeitem/${itemID}`);
        dispatch({
            type:REMOVE_ITEM_FROM_CART,
            payload:res.data
        });
    } catch (err) {
        dispatch({
            type:CART_ERROR,
            payload:{
                msg:"Bad Request",
                status:400
            }
        });
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
        dispatch({
            type:ORDER_CART,
            payload:res.data
        });
    } catch (err) {
        dispatch({
            type:CART_ERROR,
            payload:{
                msg:"Bad Request",
                status:400
            }
        });
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
        
        dispatch({
            type:REMOVE_CART,
            payload:id
        });
    } catch (err) {
        dispatch({
            type:CART_ERROR,
            payload:{
                msg:"Bad Request",
                status:400
            }
        });
    } 
}