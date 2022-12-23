import React from 'react';
import '../styles/Card.css';


const Cart = () => {

    const monstera={espece:'monstera', prix:8}
    const lierre={espece:'lierre', prix:10}
    const bouquet={espece:'bouquet', prix:15}

    return (
        <div className='lmj-cart'>
            <p>La liste de vaut article si dessous</p>
            <ul>
                <li>Une {monstera["espece"]} coute {monstera["prix"]}€</li>
                <li>Une {lierre["espece"]} coute {lierre["prix"]}€</li>
                <li>Une {bouquet["espece"]} coute {bouquet["prix"]}€</li>
            </ul>
            <p>La somme vaut {monstera["prix"]+lierre["prix"]+bouquet["prix"]}€</p>
        </div>
    );
};

export default Cart;