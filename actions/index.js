import * as API from '../utils/api'

export const FETCH_DECKS = 'FETCH_DECKS'
export const ADD_DECK = 'ADD_DECK'

export function fetchDecks(decks) {
  return {
    type: FETCH_DECKS,
    decks,
  }
}

export const getDecks = () => dispatch => (
  API.fetchDecks()
  .then(decks => {
    dispatch(fetchDecks(API.formatDecks(decks)))
  })
)

export function addDeck(deck, key) {
  return {
    type: ADD_DECK,
    deck,
    key,
  }
}

export const putDeck = ({deck, key}) => dispatch => (
  API.submitDeck({deck, key})
  .then(() => {
    dispatch(addDeck(deck, key))
  })
)