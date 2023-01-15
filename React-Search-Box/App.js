import React from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
          cats: [],
          searchField: ''
        }
        this.onSearchChange = this.onSearchChange.bind(this);
    }
    componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState(() => {
        return {cats: data}
      }));
    };

    onSearchChange = (event) => {
      const searchField = event.target.value.toLocaleLowerCase()
      this.setState(() => {
        return { searchField };
      });
    }
    
    render() {

      const { cats, searchField } = this.state;
      const { onSearchChange } = this;

      const filteredCharacters = cats.filter((cat) => {
        return cat.name.toLocaleLowerCase().includes(searchField);

      });
        return (
          <div className="App">
            <h1>Characters From Cat City</h1>
            <SearchBox 
              onChangeHandler={onSearchChange} 
              placeholder="Search The Cat Characters"
              className="cats-search-box"
            />
            <CardList cats={filteredCharacters} />
          </div>
        );
    }
}

export default App;
