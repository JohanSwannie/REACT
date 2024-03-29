import React from 'react';
import './card.styles.css';   

class Card extends React.Component {
    render() {
        const { id, name, email } = this.props.cat;
        return (
            <div className="card-container" key={id}>
                <img 
                    src={`https://robohash.org/${id}?set=set4&size=180x180`} 
                    alt={`cat ${name}`}/>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )
    }
}

export default Card;
