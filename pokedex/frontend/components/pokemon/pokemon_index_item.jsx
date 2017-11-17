import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({ poke }) => {
  const path = `/pokemon/${poke.id}`;
  return (
    <li>
      <Link to={path}>
        <img className="poke-icon" src={poke.image_url}></img>
        {poke.name}
      </Link>
    </li>
  );
};

export default PokemonIndexItem;
