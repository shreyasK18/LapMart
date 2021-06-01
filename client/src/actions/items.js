
import axios from 'axios';
import { GET_ITEMS, GET_ITEM ,ITEM_ERROR} from './types';

export const getItems =() =>async dispatch =>{
    try {
        const res =await axios.get('/api/item');
        dispatch({
            type:GET_ITEMS,
            payload:res.data
        });
    } catch (err) {
        dispatch({
            type:ITEM_ERROR,
            payload:{
                msg:err.response.statusText,
                status:err.response.status
            }
 
        });
    }
}
export const getItem =(id) =>async dispatch =>{
    try {
        const res =await axios.get(`/api/item/${id}`);
        dispatch({
            type:GET_ITEM,
            payload:res.data
        });
    } catch (err) {
        dispatch({
            type:ITEM_ERROR,
            payload:{
                msg:err.response.statusText,
                status:err.response.status
            }
        });
    }
}

