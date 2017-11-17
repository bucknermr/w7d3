import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router-dom';

class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
  }


  render () {
    const { pokemon } = this.props;

    return (
      <div>
        <ol>
          {
            pokemon.map(poke => (
              <PokemonIndexItem key={poke.id} poke={poke} />
            ))
          }
        </ol>
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
      </div>
    );
  }
}

export default PokemonIndex;
