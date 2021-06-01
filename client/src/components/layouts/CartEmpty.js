import React,{ Fragment } from 'react'
import { Link } from 'react-router-dom';

const CartEmpty = props => {
    return (
        <Fragment>
          <div className="container">
            <div className="row">
              <div className="col-md-12 center p-5 view-65">
              <h1 className='x-large text-primary'>
                <i className='fa fa-exclamation-triangle' /> Cart Empty
              </h1>
              <p className='large'>Please select a item in our store</p>
              <Link className="btn btn-danger nounderline" to="/" >Back to Store</Link>
              </div>
            </div>
          </div>
        </Fragment>
      );
}


export default CartEmpty
