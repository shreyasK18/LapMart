import React,{ useEffect,useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getItem } from '../../actions/items';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../layouts/Spinner';
import AddItemModal from '../Utilities/Modals/AddItemModal';
import { addItemToCart,addCart, getCart } from '../../actions/cart';
import currencyFormatter  from '../../utilities/currencyFormatter';

const ItemDetails = ({match,getItem,items:{item,error,loading},addItemToCart,addCart,cart:{_id},getCart})=> {
    const [addButtonState,setAddButtonState]=useState(false);
    const [scrollUp,setScrollUp]=useState(false);
    const history=useHistory();

    const addToCart = () =>{
        setAddButtonState(!addButtonState);
        if(_id!==null && _id!==undefined){
            addItemToCart(_id,item._id,item.price);
        } else {
            addCart(item._id,item.price);
        }
       getCart(_id);
    }
    
        
        
    
    useEffect(()=>{
        getItem(match.params.id);
    },[item])
  
    if (item!==null && loading===false)  {
        if(scrollUp===false){
            window.scrollTo(0,0);
            setScrollUp(true);
        }
        
        return (
        <section>
            { addButtonState && <AddItemModal name={item.name} id={item._id} setState={setAddButtonState}  state={addButtonState}/> }
            <div className="container py-5 fade-in">
                <div className="container p-4 border rounded-lg shadow">
                    <div className="d-inline-block pb-3 pointer d-">
                         <Link to='/' className="btn" style={{textDecoration:'none'}}><i className="fa fa-arrow-left pr-2"></i>Back to Store</Link>
                    </div>
                    <div className="row pb-3">
                        <div className="col-xl-5 col-lg-12 px-3 pb-3 text-center">
                            <img src={process.env.PUBLIC_URL + `/img/${item.image}`} alt={item.image} className="fit"/>
                        </div>
                        <div className="col-lg-7 pb-3 d-flex align-items-center">
                            <div className="details-text"><h5>{item.name}</h5><h6 className="text-muted">{currencyFormatter(item.price)}</h6>
                                <button type="button" className="btn btn-primary"  onClick={() => addToCart()}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="long-description">
                        <h5>Description</h5>
                        <p>{item.description}</p>
                    </div>
                </div>
            </div>
        </section>
    ) }
    else if(error.status!==400 || loading!==false) {
            return <Spinner/>;
    }  else {
            
          history.push('/pagenotfound');
          return <Spinner/>;
       
    }
    
}

ItemDetails.propTypes = {
  addItemToCart:PropTypes.func.isRequired,
  addCart:PropTypes.func.isRequired,
  getItems:PropTypes.func.isRequired,
  items:PropTypes.object.isRequired,
  currencyFormatter:PropTypes.func.isRequired,
}
const mapStateToProps= state =>({
    items:state.items,
    cart:state.cart
});
export default connect(mapStateToProps,{getItem,addItemToCart,addCart,getCart})(ItemDetails)
