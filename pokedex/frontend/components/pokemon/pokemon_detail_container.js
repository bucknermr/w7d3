import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import { withRouter } from 'react-router-dom';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state) => {
  // debugger
  return {
    pokemon: state.entities.pokemon[state.ui.pokeDisplay]
  }
}
// const mapStateToProps = (state) => ({
//   pokemon: state.entities.pokemon[state.ui.pokeDisplay]
// });

const mapDispatchToProps = (dispatch) => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PokemonDetail)
);
