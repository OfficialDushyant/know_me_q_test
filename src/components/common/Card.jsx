import React from 'react';
import "./Cards.css";

function Card({children}) {
    return (
        <div className='card'>
           {children}
        </div>
    );
}

export default Card;