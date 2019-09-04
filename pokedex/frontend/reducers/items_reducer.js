import { RECIEVE_A_POKEMON } from '../actions/pokemon_actions';

function itemsReducer(state={}, action){
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch(action.type){
    case RECIEVE_A_POKEMON:
      nextState = action.items;
      return nextState;
    default:
      return state;
  }
}