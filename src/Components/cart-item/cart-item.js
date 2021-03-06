import React from 'react';
import "./cart-item.css"

function CartItem({ price, title }) {
    return (
        <div className='cart-item'>
            <span> {title}</span>
            <div className='cart-item__price'>
                <span> {price}руб. </span>
            </div>
        </div>
    );
}

export default CartItem;