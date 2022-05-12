import Card from '../card/Card';
import './card-list.styles.css';
/* eslint react/prop-types: 0 */

const CardList = ({ monsters }) => (
  <div className='card-list'>
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;
