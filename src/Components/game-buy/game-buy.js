import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { removeItemInCart, setItemInCart } from '../../redux/cart/reducer';
import Button from '../button/button';


import "./game-buy.css"

function GameBuy({ game }) {

    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart);
    const isItemInCart = items.some(item => item.id === game.id);

    const handleClick = (e) => {
        e.stopPropagation();

        isItemInCart ? dispatch(removeItemInCart(game.id)) : dispatch(setItemInCart(game))

    }

    return (
        <div className='game-buy'>
            <span className='game-buy__price'>{game.price} руб.</span>
            <Button
                type={isItemInCart ? "secondary" : "primary"}
                onClick={handleClick}>
                {
                    isItemInCart ? "Убрать из корзины" : "В Корзину"
                }
            </Button>
        </div>
    );
}

export default GameBuy;