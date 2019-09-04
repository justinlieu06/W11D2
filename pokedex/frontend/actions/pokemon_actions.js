import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_A_POKEMON = "RECEIVE_A_POKEMON";
export const receiveAllPokemon = (pokemon) => (
  {
    type: RECEIVE_ALL_POKEMON,
    pokemon 
  }
);

export const receiveAPokemon = (payload) => (
  {
    type: RECEIVE_A_POKEMON,
    pokemon: payload.pokemon,
    items: payload.items
  }
);

export const requestAPokemon = (id) => (dispatch) => (
  APIUtil.fetchAPokemon(id).then((payload) => dispatch(receiveAPokemon(payload)))
);
export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon().then((pokemon) => dispatch(receiveAllPokemon(pokemon)))
);