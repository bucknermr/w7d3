import React from 'react';

class PokemonDetail extends React.Component {

  componentDidMount() {
    const { match, requestSinglePokemon } = this.props;
    const id = match.params.pokemonId;
    requestSinglePokemon(id);
  }

  componentWillReceiveProps(newProp) {
    const newId = newProp.match.params.pokemonId;
    if (this.props.pokemon && (newId !== this.props.pokemon.id) ) {
      this.props.requestSinglePokemon(newId);
    }
  }

  render() {
    const { pokemon } = this.props;
    console.log(this.props);

    if (pokemon) {
      return (
        <div>
          <img src={pokemon.image_url}></img>
          <h2>{pokemon.name}</h2>
          <ul>
            <li>Type: {pokemon.pokeType}</li>
            <li>Defense: {pokemon.defense}</li>
            <li>Moves: {
                pokemon.moves.join(', ')
              }</li>
            </ul>
          </div>
        );
    } else {
      return (
        <h1>Loading...</h1>
      );
    }
  }
}


export default PokemonDetail;
