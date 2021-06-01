import React,{ Fragment,useReducer} from 'react'
import PropTypes from 'prop-types'
import Carousal from './Carousal';
import { connect } from 'react-redux';
import ListItem from '../Item/ListItem';
import Spinner from './Spinner';
import { getItems } from '../../actions/items';
import { getCart } from '../../actions/cart';
import NoteModal from '../Utilities/Modals/NoteModal';
const Landing = ({  items:{items},getItems,getCart ,cart,initialState}) => {
    
    const categories=['Laptop','Battery','Charger'];
   
    const [state, dispatch] = useReducer(reducer, initialState);
    function reducer(state, action) {
     if(action.type==='agreed'){
         initialState.declaration=true;
         return { declaration:true};
     }
 }
    
    
    return items!==null ? (
        <Fragment>
            <Carousal/>
           { !state.declaration && <NoteModal  dispatch={dispatch}/>}
           
            <section className="items">
           <div className="container">
              
           {categories.map(category=>
                
               <Fragment>
                <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12">
                <h1 className="text-center mx-5 my-5">
                   {category}
                </h1>
                </div>
                <div className="row">
                {items.map(item=> item.category===category && <ListItem key={item.id} item={item}/>)}
                
                
                
                </div>
                </div> 
               </Fragment>)}
            
          </div>
       </section>
        </Fragment>
      
       
    ) : (<Spinner/>)
}

Landing.propTypes = {
 items:PropTypes.object.isRequired,
 getItems:PropTypes.func.isRequired,
 cart:PropTypes.object.isRequired,
 getCart:PropTypes.func.isRequired,
}
const mapStateToProps= state =>({
    items:state.items,
    cart:state.cart
  });
export default connect(mapStateToProps,{getItems,getCart})(Landing)
