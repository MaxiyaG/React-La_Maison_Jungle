import React from 'react';

const ShoppingList = () => {

    const plantList = [
        'monstera',
        'ficus lyrata',
        'pothos argenté',
        'yucca',
        'palmier'
    ]

    return (
        <div>
             <ul>
                 {plantList.map((plant) => (
                     <li>{plant}</li>
                 ))}
            </ul>
        </div>
    );
};

export default ShoppingList;