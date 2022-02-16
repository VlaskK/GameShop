import React from 'react';
import Button from '../button/button';

import "./game-buy.css"

function GameBuy( {game} ) {
    return (
        <div className='game-buy'>
            <span className='game-buy__price'>{game.price} руб.</span>
            <Button 
                type="primary"
                onClick={() => null}>
                В Корзину
            </Button> 
               
        </div>
    );
}

export default GameBuy;