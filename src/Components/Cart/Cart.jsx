import React from 'react'
import { useCart } from 'react-use-cart';
import './Cart.css'
function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();
   if (isEmpty) return <p className='c-title' >Your cart is empty</p>;
  

  return (
  
    <div className='cart-body'>
      <h1>Cart Products ({totalUniqueItems})</h1>
      <ul>
        {items.map((item) => (
        <div className='c-div'>
           <li key={item.id}>
            <img src={item.img} alt="" />
            {item.quantity} x {item.price} = <i class="fa-solid fa-indian-rupee-sign" style={{fontSize:'25px'}}></i>  {item.quantity * item.price}
            <br />
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            
            <button onClick={() => removeItem(item.id)} className='remove'>Remove</button>
          </li>
          </div> 
        ))}
      </ul>
      </div>
    
  )
}

export default Cart
