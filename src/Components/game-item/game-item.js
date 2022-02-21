import React from 'react';
import{ useNavigate } from "react-router"
import { useDispatch } from 'react-redux';
import GameBuy from '../game-buy/game-buy';
import GameCover from '../game-cover/game-cover';
import GameGenresList from '../game-genres-list/game-genres-list';
import GameFav from '../game-fav/game-fav';
import { setCurrGame } from '../../redux/game/reducer';
import "./game-item.css";

function GameItem({ game }) {
    const history = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setCurrGame(game));
        console.log(game.title)
        history(`/app/${game.title}`)
    }

    return (
        <div className='game-item' onClick={handleClick}>
            <GameCover image={game.image}/>
            <div className='game-item__details'>
                <span className='game-item__title'>{game.title}</span>
                <GameGenresList game={game}/>
                <div className='game-item__buy'>
                    <GameBuy game={game} />
                </div>
                <div className='game-item__fav'>
                    <GameFav game={game}/>
                </div>
            </div>
        </div>
    );
}

export default GameItem;