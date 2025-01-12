import React from 'react'
import PropTypes from 'prop-types'

const NoteModal = ({dispatch}) => {
    return (
        <div className="add-modal fade-in" id="add-modal">
            <div className="modal-overlay">
                </div>
                <div className="modal-dialog w-75 slide-in" id="add-dialog">
                    <div className="modal-content">
                       
                            <div className="modal-header modal-text pb-0">
                                <div>
                                   <h4 className="text-center"> Welcome to LapMart</h4>
                                    <p className="text-center">LapMart is a full-stack E-commerce application built using React.js and Node/Express and is to be used strictly for demonstrative purposes</p>
                                </div>
                            </div>
                            <div className="modal-body d-flex flex-wrap add-body">
                                <div className="col-sm-12 col-md-12 col-lg-12 modal-button">
                                    <p className="text-center">By clicking the button below, I accept that no real purchases will be made, no payment processing will be done, and personal information such as real names, addresses, and credit card numbers should not be used.</p>
                                    <button type="button" className="btn btn-danger btn-block close-modal" onClick={() => dispatch({type:'agreed'})}>Continue Shopping</button>
                                </div>
                               
                                </div>
                            </div>
                        </div>
                    </div>
    )
}


export default NoteModal
