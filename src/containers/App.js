import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      puppets: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ puppets: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { puppets, searchField } = this.state;
    const filteredPuppets = puppets.filter((puppet) => {
      return puppet.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !puppets.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1>Puppet pals</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList puppets={filteredPuppets} />;
        </Scroll>
      </div>
    );
  }
}

export default App;
