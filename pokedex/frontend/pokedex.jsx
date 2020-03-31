import React from "react";
import ReactDOM from "react-dom";
import { selectAllPokemon } from "./reducers/selectors";
import configureStore from "./store/store";
import { receiveAllPokemon, requestAllPokemon } from "./actions/pokemon_actions";
import { HashRouter, Route } from "react-router-dom";
import { fetchAllPokemon } from "./util/api_util";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  //testing
  window.store = store;
  window.dispatch = store.dispatch;
  window.requestAllPokemon = requestAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  window.selectAllPokemon = selectAllPokemon;
  //testing
  
  const rootEl = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, rootEl);
});
