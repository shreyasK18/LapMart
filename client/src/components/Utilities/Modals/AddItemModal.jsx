import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate, Link } from 'react-router-dom'

const AddItemModal = ({name,setState,state}) => {
    const history = useNavigate();
   
    
    return (
        
       
        <div className="add-modal fade-in" id="add-modal">
            <div className="modal-overlay">
                </div>
                <div className="modal-dialog w-75 slide-in" id="add-dialog">
                    <div className="modal-content">
                        <div className="close-button pointer" onClick={() => setState(!state)} >
                            <i className="fa fa-times-circle text-secondary"></i>
                            </div>
                            <div className="modal-header modal-text pb-0">
                                <div>
                                    <h4 className="pb-2">Item Added!</h4>
                                         <p><span className="text-muted">{name}</span> has been added to the cart.</p>
                                </div>
                            </div>
                            <div className="modal-body d-flex flex-wrap add-body">
                                <div className="col-sm-12 col-md-6 col-lg-6 modal-button">
                                    <button type="button" className="btn btn-secondary btn-block close-modal mb-2" onClick={()=>  history('/')}>Continue Shopping</button>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 modal-button">
                                    <Link to={'/cart'} className="btn btn-primary btn-block close-modal" style={{textDecoration:'none'}} >View Cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            
       
    )
}

AddItemModal.propTypes = {
  name:PropTypes.string.isRequired,
  state:PropTypes.bool.isRequired,
  setState:PropTypes.func.isRequired,
}

export default AddItemModal
