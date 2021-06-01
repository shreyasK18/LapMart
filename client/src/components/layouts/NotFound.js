import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <Fragment>
       <div className="container">
        <div className="row">
            <div className="col-md-12 center p-5 view-65" >
            <h1 className='x-large text-primary'>
              <i className='fa fa-exclamation-triangle text-danger' /> Page Not Found
            </h1>
            <p className='large'>Sorry, this page does not exist</p>
            <Link className="btn btn-danger nounderline" to="/" >Back to Store</Link>

          </div>
        </div>
       </div>
     
    </Fragment>
  );
};

export default NotFound;