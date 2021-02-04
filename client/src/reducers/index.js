import { combineReducers } from 'redux';
import alert from './alert';
import items from './items';
import cart from './cart';
export default combineReducers({
alert,
items,
cart


});