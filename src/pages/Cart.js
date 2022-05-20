import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import { Button, List, Media } from 'reactstrap';

export default function({cartItems}) {
  return (
    <div className='container'>
      <div className='cart-header'>
        <div className='cart-product'>
          Products
        </div>
        <div className='cart-price'>
          Price
        </div>
        <div className='cart-quantity'>
          Quantity
        </div>
        <div className='cart-total'>
          Total
        </div>
        <div className='cart-remove'>
          
        </div>
      </div>

      <List className='cart-list'>
        {cartItems.map((item, idx) => (
          <li key={idx} className='cart-item'>
            <div className='details'>
              <div className='cart-product'>
                <Media className='imgStyle' src={item.product.imagineUrl} />
                <div className='cart-info'>
                  {item.product.name}
                </div>
              </div>
                <div className='cart-price'>
                  {`$${item.product.price}`}
                </div>
                <div className='cart-quantity'>
                  1
                </div>
                <div className='cart-total'>
                  ${item.product.price * 1}
                </div>
                <div >
                  <Button
                  className='cart-remove' close 
                  />
                </div>
            </div>
          </li>
        ))}
        
      </List>
    </div>
  )
}