import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeItemFromCart } from '../../../actions/cart';
const RemoveItemConfirm = ({name,setModal,modal,id,removeItemFromCart}) => {
    //const history = useHistory();
    
    const removeItem= ()=>{
        setModal(!modal);
       
        removeItemFromCart(id);
       
    }
    
    return (
        
       
        <div className="add-modal fade-in" id="add-modal">
            <div className="modal-overlay">
                </div>
                <div className="modal-dialog w-75 slide-in" id="add-dialog">
                    <div className="modal-content">
                        <div className="close-button pointer"  >
                            <i className="fa fa-times-circle text-secondary"></i>
                            </div>
                            <div className="modal-header modal-text pb-0">
                                <div>
                                    <h4 className="pb-2">Are Your Sure?</h4>
                                        <p><span className="text-muted">{name}</span> will be removed from the cart.</p>
                                </div>
                            </div>
                            <div className="modal-body d-flex flex-wrap add-body">
                                <div className="col-sm-12 col-md-6 col-lg-6 modal-button">
                                    <button type="button" className="btn btn-secondary btn-block close-modal mb-2" onClick={()=>removeItem() }>Yes</button>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 modal-button">
                                    <Link to={'/cart'} className="btn btn-primary btn-block close-modal" style={{textDecoration:'none'}} onClick={()=>setModal(!modal)} >Cancel</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            
       
    )
}

RemoveItemConfirm.propTypes = {
  name:PropTypes.string.isRequired,
  state:PropTypes.bool.isRequired,
  
}

export default connect(null,{removeItemFromCart})(RemoveItemConfirm)
