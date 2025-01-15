
import axios from 'axios';
import { getItemFromReducer, getItemsFromReducer,itemError } from '../reducers/items';
const apiBaseUrl = 'https://lap-mart-pscqmuo2g-shreyas-kanchans-projects.vercel.app';
export const getItems =() =>async dispatch =>{
    try {
        const res =await axios.get(`${apiBaseUrl}/api/item`);
        
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
        const res =await axios.get(`${apiBaseUrl}/api/item/${id}`);
        dispatch(getItemFromReducer(res.data));
    } catch (err) {
        dispatch(itemError({
                msg:err.response.statusText,
                status:err.response.status
            }
        ));
    }
}

