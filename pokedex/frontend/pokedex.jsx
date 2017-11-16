import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'

// TODO: REMOVE -- FOR TESTING ONLY
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions'
import { fetchAllPokemon } from './util/api_util'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root');
  const store = configureStore();
  ReactDOM.render(<h1>hi</h1>, root);



  // TODO: FOR TESTING
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  window.requestAllPokemon = requestAllPokemon;

  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});
