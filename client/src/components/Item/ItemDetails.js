import React,{ useEffect,useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getItem } from '../../actions/items';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../layouts/Spinner';
import AddItemModal from '../Utilities/Modals/AddItemModal';
import { addItemToCart } from '../../actions/cart';

const ItemDetails = ({match,getItem,items:{item,error,loading},addItemToCart})=> {
    const [addButtonState,setAddButtonState]=useState(false);
    const history=useHistory();

    const addToCart = (addItem) =>{
        setAddButtonState(!addButtonState);
        addItemToCart(addItem._id);
    }
    let flag=0;
        
        
    if(window.scrollTop > 0){
        window.scrollTo(0,0);
    }
       
 
    
    useEffect(()=>{
        getItem(match.params.id);
       
    })
    
    if (item!==null && loading===false)  {
       
        return (
        <section>
            { addButtonState && <AddItemModal name={item.name} id={item._id} setState={setAddButtonState}  state={addButtonState}/> }
            <div className="container py-5 fade-in">
                <div className="container p-4 border rounded-lg shadow">
                    <div className="d-inline-block pb-3 pointer d-">
                    <Link to='/' className="btn" style={{textDecoration:'none'}}><i className="fa fa-arrow-left pr-2"></i>Back to Catalog</Link>
                    </div>
                    <div className="row pb-3">
                        <div className="col-lg-5 px-3 pb-3 text-center">
                            <img src={process.env.PUBLIC_URL + `/img/${item.image}`} alt={item.image} className="fit"/>
                        </div>
                    <div className="col-lg-7 pb-3 d-flex align-items-center">
                    <div className="details-text"><h5>{item.name}</h5><h6 className="text-muted">Rs. {item.price}</h6>
                            <button type="button" className="btn btn-primary"  onClick={() => addToCart(item)}>Add to Cart</button>
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
  getItems:PropTypes.func.isRequired,
  items:PropTypes.object.isRequired
}
const mapStateToProps= state =>({
    items:state.items
});
export default connect(mapStateToProps,{getItem,addItemToCart})(ItemDetails)
