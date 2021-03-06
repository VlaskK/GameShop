import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import CartMenu from "../cart-menu/cart-menu"
import ItemsInCart from "../items-in-cart/items-in-cart"
import { useNavigate } from 'react-router-dom';

import calcTotalPrice from "../utils"

import { BiCartAlt } from 'react-icons/bi'
import "./cart-block.css"


function CartBlock() {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = calcTotalPrice(items)

    const history = useNavigate();

    const handleClick = useCallback(() => {
        console.log("over")
        setIsCartMenuVisible(false)
        history('/order')
    }, [history]);

    return (
        <div className='cart-block'>
            <ItemsInCart quantity={items.length} />
            <BiCartAlt size={25} className='cart-block__icon' onClick={() => setIsCartMenuVisible(!isCartMenuVisible)} />
            {
                totalPrice > 0 ?
                    <span className='cart-block__total-price'> {totalPrice} руб.</span>
                    : null
            }
            {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
        </div>
    )
}
export default CartBlock;