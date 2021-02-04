import {
    GET_ITEMS,
    GET_ITEM,
    ITEM_ERROR,
    ADD_CART,
    REMOVE_CART
    
} from '../actions/types';
const initialState ={
   items:[],
   item:null,
   loading:true,
   error:{}
}
const addItemCount =(items,payload) =>{
    let item=items.filter(item=>item.id===payload.id);
    if(item){
        item.count++;
        return [item,...items];
    } 
    return [payload,...items];

    
    
}
const removeItemCount = (items,payload) => {
    let item=items.filter(item=>item.id===payload);
    if(item.count>1){
        item.count--;
        return [item,...items];
    }
    return items.filter(item=>item.id!==payload);
}
export default function(state=initialState,action){
    const { type, payload } =action;
    switch(type){
        
        case GET_ITEMS:
            return {
             ...state,
             items:payload,
             loading:false
            }  
        case GET_ITEM:
            return {
                 ...state,
                 item:payload,
                 loading:false
            }
    
        case ADD_CART:
            return {
                    ...state,
                    cart:addItemCount(state.items,payload),
                    loading:false   
            }
        case REMOVE_CART:
            return {
                    ...state,
                    cart:removeItemCount(state.items,payload),
                    loading:false
            }
        case ITEM_ERROR:
            return {
                ...state,
                error:payload,
                loading:false
            }
        
     
        default: return state
    }

}