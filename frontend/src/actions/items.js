
import axios from 'axios';
import { getItemFromReducer, getItemsFromReducer,itemError } from '../reducers/items';

export const getItems =() =>async dispatch =>{
    try {
        const res =await axios.get('https://lap-mart-35z68c5ad-shreyas-kanchans-projects.vercel.app/api/item');
        
        dispatch(getItemsFromReducer(
           res.data
        ));
        
    } catch (err) {
        dispatch(itemError({
                msg:err.response.statusText,
                status:err.response.status
            }));
    }
}
export const getItem = (id) =>async dispatch=>{
    try {
        const res =await axios.get(`https://lap-mart-35z68c5ad-shreyas-kanchans-projects.vercel.app/api/item/${id}`);
        dispatch(getItemFromReducer(res.data));
    } catch (err) {
        dispatch(itemError({
                msg:err.response.statusText,
                status:err.response.status
            }
        ));
    }
}

