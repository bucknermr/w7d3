import React from 'react';

class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
    this.render();
  }

  render () {
    const { pokemon } = this.props;

    return (
      <ol>
        {
          pokemon.map(poke => (
            <li key={poke.id} >
              <img className="poke-icon" src={poke.image_url}></img>
              {poke.name}
            </li>
          ))
        }
      </ol>
    );
  }
}

export default PokemonIndex;
