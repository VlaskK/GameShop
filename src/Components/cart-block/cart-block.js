import React from 'react';
import "./cart-block.css"
import { BiCartAlt } from 'react-icons/bi'
function CartBlock(props) {
    return (
        <div className='cart-block'>
            <BiCartAlt size={25} className='cart-block__icon'/>
            <span className='cart-block__total-price'> 1000 руб.</span>
        </div>
        )
    }
export default CartBlock;