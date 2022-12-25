import Card-Searchbox-Card from './Card-Searchbox-Card';
/* eslint react/prop-types: 0 */

const Card-Searchbox-CardList = ({ people }) => (
  <div className='card-list'>
    {people.map((person) => {
      return <Card-Searchbox-Card key={person.id} person={person} />;
    })}
  </div>
);

export default Card-Searchbox-CardList;
