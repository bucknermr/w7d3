import values from 'lodash/values';

export const selectAllPokemon = (state) => {
  const pokemon = values(state.entities.pokemon);
  return pokemon.map(({ id, name, image_url }) => {
    return { id, name, image_url };
  });
};
