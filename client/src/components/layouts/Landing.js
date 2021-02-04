import React,{ Fragment} from 'react'
import PropTypes from 'prop-types'
import Carousal from './Carousal';
import { connect } from 'react-redux';
import ListItem from '../Item/ListItem';
import Spinner from './Spinner';
const Landing = ({  items:{items} }) => {
  
    const categories=['Laptop','Battery','Charger'];
  
    

    return items!==null ? (
        <Fragment>
            
            <div class="modal hide fade" id="myModal">
                <div class="modal-header">
                    <span class="close" data-dismiss="modal">×</span>
                    <h3>Modal header</h3>
                </div>
                <div class="modal-body">
                    <p>One fine body…</p>
                </div>
                <div class="modal-footer">
                    <button class="btn">Close</button>
                    <button class="btn btn-primary">Save changes</button>
                </div>
            </div>
            <Carousal/>
           
            <section className="items">
           <div class="container">
              
           {categories.map(category=>
                
               <Fragment>
                <div class="row">
                <div class="col-md-12 col-sm-12 col-lg-12">
                <h1 class="text-center mx-5 my-5">
                   {category}
                </h1>
                </div>
                <div class="row">
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
 items:PropTypes.object.isRequired
}
const mapStateToProps= state =>({
    items:state.items
  });
export default connect(mapStateToProps)(Landing)
