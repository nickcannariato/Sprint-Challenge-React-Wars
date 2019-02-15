import React, { Component } from "react";
import Character from "./components/Character";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people");
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          starwarsChars: data.results,
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="app">
        <header className="header">
          <h1 className="header__text">React Wars</h1>
        </header>
        {this.state.starwarsChars.map((character, i) =>
          <Character
            key={`${character.birth_year}${character.mass}${i}`}
            name={character.name}
            height={character.height}
            mass={character.mass}
            hairColor={character.hair_color}
            skinColor={character.skin_color}
            eyeColor={character.eye_color}
            birthYear={character.birth_year}
            gender={character.gender}
            created={character.created}
            edited={character.edited}
          />
        )}
      </div>
    );
  }
}

export default App;
