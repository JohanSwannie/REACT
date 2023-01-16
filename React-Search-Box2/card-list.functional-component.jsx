import React from 'react';
import Card from '../card/card.functional-component';
import './card-list.styles.css';

const CardList = ({cats}) => {
    return (
        <div className="card-list">
            {cats.map(cat => {
                return ( 
                    <Card cat={cat} />
                )
            })}
        </div>
    )
}

export default CardList;