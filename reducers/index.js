import { FETCH_DECKS, ADD_DECK } from './../actions/index';

function decks(state = {}, action) {
  switch (action.type) {
    case FETCH_DECKS:
      return {
        ...state,
        ...action.decks,
      }
    case ADD_DECK:
      return {
        ...state,
        [action.key]: action.deck,
      }
    default:
      return state
    
  }
}

export default decks;
