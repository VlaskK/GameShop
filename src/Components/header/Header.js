import React from 'react';
import { Link } from 'react-router-dom';
import CartBlock from '../cart-block/cart-block';
import "./header.css"

function Header() {
    return (
        <div className='header'>
            <div className='wrapper'>
                <div className="wrapper__links">
                    <Link to="/" className='header__store-title'>
                        Game Store
                    </Link>
                    <Link to="/favorite" className='header__store-title'>
                        Избранное
                    </Link>
                    <Link to="/order" className='header__store-title'>
                        Корзина
                    </Link>
                </div>
            </div>
            <div className='wrapper header__cart-btn-wrapper'>
                <CartBlock />
            </div>


        </div>
    );
}

export default Header