import React from 'react';
import Cart from './Componants/Cart';
import Description from './Componants/Description';
import Header from './Componants/Header';
import ShoppingList from './Componants/ShoppingList';

const App = () => {
  return (
    <div>
        <Header/>
        <Description/>
        <ShoppingList/>
        <Cart/>
    </div>
  );
};

export default App;