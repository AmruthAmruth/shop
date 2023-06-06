import React from 'react'
import {useCart} from 'react-use-cart'
import data from '../../Data'
import s1 from '../../img/s-1.jpg'
import s2 from '../../img/s-2.jpg'
import s3 from '../../img/s-3.jpg'
import s4 from '../../img/s4.jpg'
import './Rowpost.css'


function Rowpost() {

    const { addItem } = useCart();

   console.log(data.tShirtData[1].name);
  return ( 
    <div className="rowfull">
        <h1>Feature Products</h1>
        <p>Summer Collection New Morden Desing</p>


    <div className="rowpost"> 
     {data.shirtData.map((obj)=>{
         return(
             <div>
         <div className="row"  >
        <img src={obj.img} alt="" />
        <p>{obj.brand}</p>   
        <h5>{obj.name}</h5>
        <h4><i class="fa-solid fa-indian-rupee-sign"></i> {obj.price}</h4>
        <i class="fa-solid fa-cart-shopping " onClick={()=>addItem(obj)}></i>
    </div >
    </div>
)
})}
    </div>


    <h1>New Arrivals</h1>
        <p>Summer Collection New Morden Desing</p>

    <div className="rowpost">  
    
     {data.tShirtData.map((obj)=>{
return(
    <div>
        
         <div className="row">
        <img src={obj.img} alt="" />
        <p>{obj.brand}</p>
        <h5>{obj.name}</h5>
        <h4><i class="fa-solid fa-indian-rupee-sign"></i> {obj.price}</h4>
        <i class="fa-solid fa-cart-shopping "  onClick={()=>addItem(obj)}></i>
    </div >
    </div>
)
    })}
    
    </div>


    </div>
  )
}

export default Rowpost
