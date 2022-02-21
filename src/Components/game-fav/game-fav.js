import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { removeItemInFav, setItemInFav} from '../../redux/cart/reducer';

import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";
import Button from '../button/button';

import "./game-fav.css"

function GameFav({game}) {

    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInFav)
    const isItemInFav = items.some(item => item.id === game.id)

    const handleClick = (e) => {
        e.stopPropagation();
        isItemInFav ? dispatch( removeItemInFav(game.id)) : dispatch(setItemInFav(game))
    }

    return (
        <div className='game-fav'>
            <Button type={"fav"}
                onClick={handleClick} size="s">
                {
                    isItemInFav? <AiFillHeart className='game-fav__heart'/> : <AiOutlineHeart className='game-fav__heart'/>
                }
            </Button>
        </div>
    );
}

export default GameFav;