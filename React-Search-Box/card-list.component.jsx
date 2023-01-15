import React from 'react';
import Card from '../card/card.component';
import './card-list-styles.css';

class CardList extends React.Component {
    render() {
        const { cats } = this.props;
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
}

export default CardList;