import Card-SearchBox-CardList from "./Card-Searchbox-CardList";
import Card-SearchBox-SearchBox from "./Card-Searchbox-SearchBox";
import { useState, useEffect } from "react";

const Card-Searchbox-App = () => {
  const [searchField, setSearchField] = useState("");
  const [people, setPersons] = useState([]);
  const [searchPersons, setSearchPersons] = useState(people);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/JohanSwannie/10ec52c77bd989e512f6474d1686fb36/raw/830677fef4de45420671796d9eecdf06ff47780a/jswan-persons1.json"
    )
      .then(response => response.json())
      .then(users => setPersons(users));
  }, []);

  useEffect(() => {
    const filteredSearchPersons = people.filter((person) => {
      return person.name.toLocaleLowerCase().includes(searchField);
    });
    setSearchPersons(filteredSearchPersons);
  }, [people, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">My Family & Friends</h1>

      <Card-Searchbox-SearchBox
        className="persons-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search for people"
      />
      <Card-Searchbox-CardList people={searchPersons} />
    </div>
  );
};

export default Card-Searchbox-App;
