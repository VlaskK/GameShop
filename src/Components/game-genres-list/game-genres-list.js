import React from 'react';
import GameGenre from '../game-genre/geme-genre';

import "./game-genres-list.css"

function GameGenresList({ game }) {
    return (
        <div className='game-item__genre'>
            {game.genres.map(genre => <GameGenre genre={genre} key={genre} />)}
        </div>
    );
}

export default GameGenresList;