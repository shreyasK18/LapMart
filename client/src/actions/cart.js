import axios from 'axios';
import { ADD_CART, REMOVE_CART ,CART_ERROR} from './types';
export const addItemToCart = (id) =>async dispatch =>{
    try {
        const res =await axios.get(`/api/items/${id}`);
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

export const removeItemFromCart = (id) =>async dispatch =>{
    try {
       
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