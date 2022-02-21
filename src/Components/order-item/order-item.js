import React from 'react';
import GameCover from '../game-cover/game-cover';
import { removeItemInCart } from '../../redux/cart/reducer';
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./order-item.css"
import { useDispatch } from 'react-redux';

function OrderItem({game, key}) {

    const dispatch = useDispatch()
    const handleDeleteClick = () => {
        dispatch(removeItemInCart(game.id))
    }
    return (
        <div className='order-item'>
            <div className='order-item__cover'>
                <GameCover image={game.image}/>
            </div>
            <div className='order-item__title'>
                <span> {game.title} </span>
            </div>
            <div className='order-item__price'>
                <span> {game.price}.руб </span>
                <AiOutlineCloseCircle 
                    size={25}
                    className="cart-item__delete-icon"
                    onClick={handleDeleteClick}
                />
            </div>
        </div>
    );
}

export default OrderItem;