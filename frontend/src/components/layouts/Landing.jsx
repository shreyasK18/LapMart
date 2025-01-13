import React,{ Fragment,useReducer} from 'react'
import Carousal from './Carousal';
import ListItem from '../Item/ListItem';
import Spinner from './Spinner';
import NoteModal from '../Utilities/Modals/NoteModal';
import { useSelector } from 'react-redux';
const Landing = ({initialState}) => {
    const categories=['Laptop','Battery','Charger'];
    const itemsState=useSelector(state=>state.items)
    const {items}=itemsState;
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
              
           {categories.map((category,key)=>
                
               <Fragment key={key}>
                <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12">
                <h1 className="text-center mx-5 my-5">
                   {category}
                </h1>
                </div>
                <div className="row">
                {items.map((item,key)=> item.category===category && <ListItem key={key} item={item}/>)}
                
                
                
                </div>
                </div> 
               </Fragment>)}
            
          </div>
       </section>
        </Fragment>) :(<Spinner/>)
}



export default Landing;