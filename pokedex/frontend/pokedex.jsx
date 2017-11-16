import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'

// TODO: REMOVE -- FOR TESTING ONLY
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import { fetchAllPokemon } from './util/api_util';
import { selectAllPokemon } from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.querySelector('#root');
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, rootEl);



  // TODO: FOR TESTING
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;

  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});
