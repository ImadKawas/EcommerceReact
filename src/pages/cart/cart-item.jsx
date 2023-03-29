import React, {useContext} from 'react'
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
  return (
    <div className='cartItem'>
        <img alt='helloworld' src={productImage}/> 
         
    <div className='description'>
        <p><b>{productName}</b></p>
        <b>Special Instructions</b>
        <br />
        <input value={CartItem[id]} />
        <p>${price}</p>
    </div>
    </div>
  );
    
 
};

