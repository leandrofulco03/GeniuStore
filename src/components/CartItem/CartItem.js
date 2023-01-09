import React from 'react';
// import {faTimes} from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CartItem.css';

function CartItem({item, removeItemById}) {
  return (
    <div className='cart_page d-flex align-items-center'>
    <div className="cart-item__delete" onClick={() => removeItemById(item.id)}>
          <i class="fa-solid fa-trash"></i>
    </div>
    <article className="cart-item-card my-3">
            <div className="cart-item-img">
                <img src={item.image} alt="product" />
            </div>
            <div className="cart-info px-5">
              <div className="cart-description px-5 py-2">
                <h2 className="cart-item-title">{item.title}</h2>
                <span className="cart-item-price">${item.price}</span>
              </div>
              <div className="cart-count px-5 py-2">
                <span className="cart-item-count d-flex flex-column align-items-center"><strong>Amount:</strong> {item.count}</span>
              </div>
              <div className="cart-price px-5 py-2">
                <span className="cart-item-count d-flex flex-column align-items-center"> ${item.count * item.price}</span>
              </div>
            </div>
    </article>
    </div>
  )
}

export default CartItem