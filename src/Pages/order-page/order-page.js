import React from 'react';
import { useSelector } from 'react-redux';
import OrderItem from '../../Components/order-item/order-item';
import calcTotalPrice from '../../Components/utils';

import "./order-page.css"

const OrderPage = () => {
    const items = useSelector(state => state.cart.itemsInCart)

    const declination = (len) => {
        if (len === 1) {
            return "товар"
        } 
        if (len < 5){
            return "товара"
        }
        return "товаров"
    }

    if (items.length === 0) {
        return (
            <h1>Ваша карзина пуста</h1>
        )
    }
    return (
        <div className='order-page'>
            <div className='order-page__left'>
                {items.map(game => (<OrderItem game={game} key={game.id}/>))}
            </div>
            <div className='order-page__right'>
                <div className='order-page__total-price'>
                    <span> {items.length} {declination(items.length)} на сумму {calcTotalPrice(items)}.руб </span>
                </div>
            </div>
        </div>
    )
};

export default OrderPage;