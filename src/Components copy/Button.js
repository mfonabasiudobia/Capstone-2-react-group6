import React from "react";
import { Link } from 'react-router-dom';


const Button =(props)=>{
   return(       
            <div className='logo'>
               <Link id="my-link" to={props.success === true ? '/members' : '/'}> 
                  <button onClick={props.click}> Login</button>
               </Link> 
            </div>
   )

}

export default Button;