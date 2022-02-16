import React, { useState } from 'react';
import "./cart-block.css"
import { BiCartAlt } from 'react-icons/bi'
import { useSelector } from 'react-redux';

import calcTotalPrice from "../utils"
import CartMenu from "../cart-menu/cart-menu"
import ItemsInCart from "../items-in-cart/items-in-cart"

function CartBlock(props) {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = calcTotalPrice(items)

    return (
        <div className='cart-block'>
            <ItemsInCart quantity={items.length}/>
            <BiCartAlt size={25} className='cart-block__icon' onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}/>
            <span className='cart-block__total-price'> {totalPrice} руб.</span>
            {isCartMenuVisible && <CartMenu items={items} onClick={() => null}/>}
        </div>
        )
    }
export default CartBlock;