import React from 'react';

class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
    this.render();
  }

  render () {
    const { pokemon } = this.props;

    return (
      <ul>
        {
          pokemon.map(poke => (
            <li key={poke.id} >
              {poke.name}
              <img src={poke.image_url}></img>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default PokemonIndex;
