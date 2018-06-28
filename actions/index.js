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
  .then(decks => dispatch(fetchDecks(decks)))
)

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}

export const putDeck = (deck) => dispatch => (
  API.submitDeck(deck)
  .then((deck) => dispatch(addDeck(deck)))
)