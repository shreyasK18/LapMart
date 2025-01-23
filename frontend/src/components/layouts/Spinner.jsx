
import React,{useState} from "react";
export default () =>{
   const [scrollUp,setScrollUp]=useState(false);
  if(scrollUp===false){
    window.scrollTo(0,0);
    setScrollUp(true);
}
  return (
 
    <div  style={{ width:"100%",height:"100%",display:"block",margin:"10% auto",padding:"10%"}} > 
      <div style={{ margin: 'auto', display: 'block' }} className="spinner-border text-dark center" >
        <span  className="sr-only">Loading...</span>
      </div>
    </div>
   

)};