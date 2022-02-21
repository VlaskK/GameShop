import React from 'react';
import { useSelector } from 'react-redux';

import GameItem from '../../Components/game-item/game-item';
import "./fav-page.css";
function FavPage() {
    const favGames = useSelector(state => state.cart.itemsInFav)
    if (favGames.length > 0) {
        return (
            <div className='fav-page'>
                {favGames.map(game => <GameItem game={game} key={game.id} />)}
            </div>
        );
    } else {
        return (<h1> У вас нет избранных игр </h1>);
    }

}

export default FavPage;