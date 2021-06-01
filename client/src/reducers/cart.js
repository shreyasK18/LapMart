import {
    GET_CART,
    ADD_CART,
    ADD_ITEM_TO_CART,
    REMOVE_ITEM_FROM_CART,
    REMOVE_CART,
    CART_ERROR,
    CART_EMPTY,
    ORDER_CART
    
} from '../actions/types';
const initialState ={
   items:null,
   count:0,
   totalPrice:0,
   loading:true,
   _id:null,
   itemdetails:null,
   ordered:false,
   error:{}
}



export default function(state=initialState,action){
    const { type, payload } =action;
    switch(type){
        case GET_CART:
            return {
                ...state,
                items:payload.items,
                count:payload.count,
                totalPrice:payload.total_price,
                _id:payload._id,
                loading:false,
                itemdetails:payload.itemdetails,
                ordered:payload.order_status,
                error:{}
            }
        case ADD_CART:
             return {
                    ...state,
                    items:payload.items,
                    count:state.count+1,
                    totalPrice:payload.total_price,
                    loading:false,
                    _id:payload._id,
                    error:{}  
                }
        case ADD_ITEM_TO_CART:
            return {
                ...state,
                items:payload.items,
                totalPrice:payload.total_price,
                count:state.count+1,
                loading:false,
                error:{}
        }
        case REMOVE_ITEM_FROM_CART:
             return {
                    ...state,
                    items:state.items.filter(it=>it._id!==payload.id),
                    itemsdetails:state.itemsdetails.filter(it=>it._id!==payload.id),

                    totalPrice:payload.total_price,
                    count:state.count-1,
                    loading:false
                }
        case CART_ERROR:
            return {
                ...state,
                error:payload,
                loading:false
            }
        case CART_EMPTY:
            return {
            ...state,
            items:[],
            itemdetails:[],
            _id:null
            }
        case REMOVE_CART:
            return {
                ...state,
                items:[],
                itemdetails:[],
                _id:null,
                count:0,
                ordered:false
            };
        case ORDER_CART:
            return {
                ...state,
                ordered:payload.order_status
            }
        default: return state
    }

}