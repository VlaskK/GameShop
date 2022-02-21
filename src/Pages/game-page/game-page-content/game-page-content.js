import React from 'react';
import GameBuy from '../../../Components/game-buy/game-buy';
import GameCover from '../../../Components/game-cover/game-cover';
import GameGenre from '../../../Components/game-genre/geme-genre';
import "./game-page-content.css"

function GamePageContent({ game }) {
    return (
        <div className='game-page__content'>
            <div className='game-page__left'>
                <iframe
                    width="90%"
                    height="400px"
                    src={game.video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
            </div>
            <div className='game-page__right'>
                <GameCover image={game.image} />
                <p>{game.description}</p>
                <p className='secondary-text'>Популярные метки для этого продукта</p>
                {game.genres.map(genre => (<GameGenre genre={genre} key={genre} />))}
                <div className='game-page__buy-game'>
                    <GameBuy game={game} />
                </div>
            </div>
        </div>
    );
}

export default GamePageContent;