import { useEffect, useState } from 'react';
import SearchBox from './components/search-box/search-box.functional-component';
import CardList from './components/card-list/card-list.functional-component';
import './App.css';

const AppFunction = () => {
    const [cats, setCats] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [filteredCats, setFilteredCats] = useState(cats);

    console.log('RENDER');

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => setCats(data));
      }, []);
  
    useEffect(() => {
        const newFilteredCharacters = cats.filter((cat) => {
            return cat.name.toLocaleLowerCase().includes(searchField);
          });   
        setFilteredCats(newFilteredCharacters);
    }, [cats, searchField]);

    const onSearchChange = (event) => {
        const searchField = event.target.value.toLocaleLowerCase()
        setSearchField(searchField);
      }
  
    return (
        <div className="App">
        <h1>Characters From Cat City</h1>
        <SearchBox 
          onChangeHandler={onSearchChange} 
          placeholder="Search The Cat Characters"
          className="cats-search-box"
        />
        <CardList cats={filteredCats} />
      </div>
    )
}

export default AppFunction;
