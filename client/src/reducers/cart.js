import {
   
    ADD_CART,
    REMOVE_CART,
    CART_ERROR
    
} from '../actions/types';
const initialState ={
   cart:[],
   count:0,
   totalPrice:0.00,
   loading:true,
   error:{}
}

const removeItem = (items,payload) => {
  
    const index = items.findIndex(item => item.id === payload);
    if (index !== undefined) items.splice(index, 1);
    return items;
}

export default function(state=initialState,action){
    const { type, payload } =action;
    switch(type){
        
        case ADD_CART:
             return {
                    ...state,
                    cart:[payload,...state.cart],
                    count:state.count+1,
                    loading:false   
                }
        case REMOVE_CART:
             return {
                    ...state,
                    cart:removeItem(state.cart,payload),
                    count:state.count-1,
                    loading:false
                }
        case CART_ERROR:
            return {
                ...state,
                error:payload,
                loading:false
            }
        
     
        default: return state
    }

}