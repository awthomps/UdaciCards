import { AsyncStorage } from 'react-native'


const DECKS_STORAGE_KEY = 'UdaciCards:decks';

export function fetchDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
}

export function formatDecks(decks) {
  return decks === null
    ? {}
    : JSON.parse(decks)
}

export function submitDeck({deck, key}) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [key]: deck
  }))
}