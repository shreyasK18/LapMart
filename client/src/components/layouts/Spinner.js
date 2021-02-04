import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export default () => (
  <Fragment>
    <div style={{width:'100vh',height:'100%',padding:'10%',margin:'0 auto'}}>
      <img
        src={spinner}
        style={{ width: '200px', margin: 'auto', display: 'block' }}
        alt='Loading...'
      />
    </div>
  </Fragment>
);