import React from 'react';
import { useSelector } from 'react-redux';
import GamePageContent from './game-page-content/game-page-content';

import "./game-page.css"
function GamePage() {

    const game = useSelector(state => state.game.currGame)
    if (!game) {
        return null
    } else {
        return (
            <div className='game-page'>
                <div className='game-page__title'>
                    <span> {game.title} </span>
                </div>
                <GamePageContent game={game}/>
            </div>
        )
    }



}

export default GamePage;